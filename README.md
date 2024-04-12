# semantic-release-test
1. install semantic-release and other plugins
```
npm i semantic-release @semantic-release/git @semantic-release/github -D
```

2. create release.config.js on root

3. add release.yml under .github/workflows


4. commit your code

* if you commit message is feat: and your commit description is BREAKING CHANGE: 
=> it will be a major release
* if your commit message is feat: => it will be a patch release
* if your commit message  fix: => it will be a minor release
* if your commit message is chore:, refactor:, docs:, test: => it won't trigger a release version(I think there are some methods to trigger a release version, but I don't know yet.)