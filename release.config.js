const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        presetConfig: {
          types: [
            { type: 'docs', section: 'Docs' },
            { type: 'refactor', section: 'Refactor' },
            { type: 'test', section: 'Test' },
          ],
        },
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['dist/*.js', 'dist/*.js.map'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};

module.exports = config;


// const config = {
//   branches: ['main'],
//   plugins: [
//     '@semantic-release/commit-analyzer',
//     '@semantic-release/release-notes-generator',
//     ["@semantic-release/git", {
//       "assets": ["dist/*.js", "dist/*.js.map"],
//       "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
//     }],
//     '@semantic-release/github'
//   ]
// };

// module.exports = config;