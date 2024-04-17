# semantic-release-test
This is a test project for semantic-release, it will automatically generate release note and tag on github.

1. install semantic-release and other plugins
```
npm i semantic-release @semantic-release/git @semantic-release/github @semantic-release/commit-analyzer -D
```

2. create .releaserc on root
* i set branch to main, you can set to master
* i set docs, refactor, style, test as patch release and chore as minor release, you can change what you want
3. add release.yml under .github/workflows


4. commit your code

* if your commit message is feat: and your commit description is BREAKING CHANGE: 
=> it will be a major release
* if your commit message is fix: => it will be a minor release, and message will be in the release note
* if your commit message is feat: => it will be a patch release, and message will be in the release note
* if your commit message is chore:, refactor:, docs:, test: => it will be a patch release, and message won't in the release note.
