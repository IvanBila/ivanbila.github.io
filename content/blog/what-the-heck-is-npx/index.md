---
title: Node please execute
date: "2019-10-05"
description: ""
draft: true
---

npx available starting npm version 5.2.x

## Problem definition and setting the why

1. Installing packages globally
2. Adding aliases
3. Using npm scripts
4. Using absolute path

## Table of contents

- Use npx to run locally installed node modules
- Use npx to temporarily install and invoke a package from npm
- Use npx to rest different versions of node modules
- Use npx to run commands with different versions of Node.js
- Execute npx commands with npm env variables
- Use npx to execute a code from a branch
- Use npx to execute a code from a github gist

## NOTES

npx allows you to play around with a new package from npm registry without having to install it

```shell
npm install eslint --dev
```

or

```shell
npm i eslint -D
```

when we run eslint --init, it doesnt find it, because it is looking for a global install, one would be to use
the projects absolute path `./node_module/bin/eslint` which works, but we can go ahead and simplify it more
and add it to our list of aliases so we can use it in every project

aliases file

```shell
alias eslint='./node_modules/bin/eslint'
```

We can optimize this flow by promoting it and adding it to our scripts in the `package.json` file

"eslint": "eslint"

finds the locally installed eslint
\$(npm bin)/eslint

but all of this could be better, this is where npx comes to play

One of the many things npx can do, is to allow you to invoke locally installed
node modules from the terminal
if we feel good about any of the commands we can promote it to be an npm script

`npm run` shows a list of scripts that can be run

npm ls create-react-app --global -> check if a dependency is installed globally or not
we can use npx to temporarily install a package a execute it

```shell
npx create-react-app todo-app
```

node_modules can use quite a lot of space, using some dependencies this way can be handy if you'd rather
{image of black hole} not install programs globally, or you use them frequently that'd rather use the latest
version when you need them, also can be handy if you want to play with some tools before commiting to them

```shell
npx devpun -t react
```

```shell
npx devpun -t react | npx cowsay -f vader | npx lolcatjs
```

using npx we're able to play around and experience node modules without having to install them

```shell
npm v create-react-app versions
```

```shell
npm v create-react-app
```

```shell
npx create-react-app@next todo-app
```

```shell
npm view eslint
```

```shell
npx eslint@next ./
```

if eslint@next requires some extra packages we can use npx to specify those:
-c -> execute a command
-p -> specify a dependency

```shell
npx -p eslint@next -p eslint-config-google -c "eslint ./"
```

npx will install next version of eslint along with config google

### Using npx to run different versions of node

```shell
npx -p node@8.2.1 -- node index.js
```

## Execute npx commands with npm enviroment variables

show npm env variables that are available when we run npm scripts

```shell
npm run env
```

npm run env | grep npm\_

how to leverage those variables using npx?

first install babel using bash brace expansion

```shell
npm install babel{-cli,-preset-env,-plugin-transform-object-rest-spread} -D -s
```

npx babel index.js -d lib/
npx babel index.js -d lib/\$npm_package_version

npx -c 'babel index.js -d lib/\$npm_package_version'

-c -> executes our command in an npm scripts like env, meaning that it will have access to all
env variables in npm run env

## Execute code from a remote branch

npm repo -> navigates to the dependencies' github repo...

npx user/library-repo#branch

will temporarily download the branch and run it locally

## Execute code that is on a github gist

gist

```javascript
#!/usr/bin/env node

console.log("something comes here")
```

package.json

```json
{
  "name": "some project",
  "version": "1.2.1",
  "bin": "./index.js"
}
```

npx gist-url

trust the source of your gist urls
