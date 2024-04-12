const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/release-notes-generator',
    [
      "@semantic-release/git", 
      {
        "assets": ["dist/*.js", "dist/*.js.map"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "angular",
        "releaseRules": [
          { "type": "docs", "scope": "README", "release": "patch" },
          { "type": "refactor", "release": "patch" },
          { "type": "style", "release": "patch" },
          { "type": "test", "release": "patch" },
          { "type": "chore", "release": "minor" }
        ],
        "parserOpts": {
          "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    '@semantic-release/github',
    
  ]
};

module.exports = config;

// const config = {
//   branches: ['main'],
//   plugins: [
//     '@semantic-release/commit-analyzer',
//     [
//       '@semantic-release/release-notes-generator',
//       {
//         preset: 'angular',
//         presetConfig: {
//           types: [
//             { type: 'docs', section: 'Docs' },
//             { type: 'refactor', section: 'Refactor' },
//             { type: 'test', section: 'Test' },
//           ],
//         },
//       },
//     ],
//     [
//       '@semantic-release/git',
//       {
//         assets: ['dist/*.js', 'dist/*.js.map'],
//         message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
//       },
//     ],
//     '@semantic-release/github',
//   ],
// };

// module.exports = config;