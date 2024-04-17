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

* if your commit title is feat: and your commit description is BREAKING CHANGE: 
=> it will be a major release
* if your commit title is feat: => it will be a minor release, and title will be in the release note
* if your commit title is fix: => it will be a patch release, and title will be in the release note
* if your commit title is chore:, refactor:, docs:, test:, docs: => it will be a patch release, but the title won't in the release note.
