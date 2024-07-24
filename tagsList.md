# Mocha Test Tags Reference

## Introduction
This document provides a list of tags used in our Mocha tests. Tags help categorize and manage test cases. Use this document to understand the purpose of each tag and how to apply them.

## Tags List
| Tag        | Description                                       |
|------------|---------------------------------------------------|
| `@smoke`    | Used for smoke tests to verify basic functionality. |
| `@regression` | Applied to tests that check for regressions in the software. |
| `@performance` | Indicates tests related to performance benchmarks. |
| `@critical` | Signifies critical tests that must pass for the release. |
| `@feature`  | Used to group tests related to specific features. |

## How to Use Tags
- Tags can be added to test files or individual tests.
- Use tags to run specific subsets of tests using Mocha’s `--grep` option.

## Run them
TAG=@login_valid npm run test:tags     -package.json("test:tags": "npx wdio run ./wdio.conf.js --mochaOpts.grep=$TAG")
For percy: TAG=@percy_login npm run percy
npx wdio run ./wdio.conf.js --mochaOpts.grep='@login_valid|@user_creation|@admin|@smoke'
npx wdio run ./wdio.conf.js --mochaOpts.grep=@login_valid


run only percy
TAG=@percy_login npm run percy

Run 