const config = {
    branches: ['main'],
    preset: "angular", // if we don't add this line, the release note will only display the commit message with feat, fix, BREAKING CHANGE.
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      ["@semantic-release/git", {
        "assets": ["dist/*.js", "dist/*.js.map"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }],
      '@semantic-release/github'
    ]
  };
  
  module.exports = config;