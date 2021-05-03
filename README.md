# Automated testing with Mocha and Puppeteer

## 1. Setup project

### 1.1 Setup git

[ ] Setup SSH

```bat
    rem create new ssh key
    cd %userprofile%\.ssh && cd ~/.ssh
    ssh-keygen -t rsa -b 4096 -C "[email]"
    enter key name: [username]_[company]
    enter pass phase: ********
    type %userprofile%\.ssh\[username]_[company].pub | clip && cat ~/.ssh [username]_[company].pub | pbcopy

    rem paste into SSH setting in github

    rem check windows credentials

```

[ ] Setup github: [https://github.com/_username_/_repo_.git](https://github.com/_username_/_repo_.git)

[ ] Setup repo in local to async data with github

```bat
    mkdir pptr-mocha && cd pptr-mocha
    git clone _repo_
    git add README.md
    git commit -m "add first commit"
    git branch -M dev
    git push -u origin dev
```

### 1.2 Setup packages

```bat
    rem: create new package.json
    cd pptr-mocha && git init -y

    rem: install packages
    npm install puppeteer mocha chai mocha-steps
    npm install --save-dev babel-cli babel-preset-es2015
```

### 1.3 Config mocha

```js
// .babelrc
{
    "presets": ["es2015"]
}
```

```json
// package.json
"scripts": {
    "test": "./node_modules/mocha/bin/mocha --timeout=30000 ./build/tests/**.js",
    "clean": "rm -rf build",
    "build": "babel --preset es2015 -d /build /src"
},
```

### 1.3 Create percy account

- In page [percy](https://percy.io/) create new account
- Create new pptr project
- Integrate github
- Setup percy variable to window environment

## 2. Start project

## 3. Other

### 3.1 Fix bug

> [Error: EPERM: operation not permitted, unlink 'C:\Users\<username>\AppData\Local\Temp\puppeteer_dev_chrome_profile-ueqolL\CrashpadMetrics-active.pma']

```bat
rd /s /q C:\Users\foo\AppData\Roaming\npm-cache
rd /s /q C:\Users\foo\AppData\Roaming\npm
npm clean cache --force
npm install --no-bin-links --no-optional
```
