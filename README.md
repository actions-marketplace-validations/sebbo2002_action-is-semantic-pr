# @sebbo2002/is-semantic-pr

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

It happens to me very often that I merge a pull request that does not contain any semantic commits and therefore no 
release is generated. This bot is supposed to help me by looking at the commits of the PR, determining the release type 
using `@semantic-release/commit-analyzer` and then leaving an [annotation](https://github.com/actions/toolkit/tree/main/packages/core#annotations) 
in the PR what kind of release would be triggered. If no release is generated during the merge, an appropriate warning 
is left.


## ⚡️ Quick Start

```
uses: sebbo2002/action-is-semantic-pr
with:
  token: ${{ secrets.GITHUB_TOKEN }}
```


## 🙆🏼‍♂️ Copyright and license

Copyright (c) Sebastian Pekarek under the [MIT license](LICENSE).
