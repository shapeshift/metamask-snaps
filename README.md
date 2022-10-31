# @shapeshiftoss/metamask-snaps

![](https://github.com/shapeshift/metamask-snaps/workflows/ci/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![](https://img.shields.io/badge/yarn-%3E%3D3.2.2-orange.svg?style=flat-square&label=Yarn&logo=yarn)
![](https://img.shields.io/badge/Node.js-%3E%3D16.16-orange.svg?style=flat-square&label=Node.js&logo=Node.js)
![Discord](https://img.shields.io/discord/554694662431178782?color=blue&label=Discord&logo=discord)

A Snap plugin for MetaMask providing multi-chain signing support.
Currently supported networks are:

- Bitcoin
- Cosmos
- Ethereum

## Project Structure

```
.
├── packages
│   ├── adapter         // Intermediate package used to interact with the snap in external applications
│   │   ├── __mocks__
│   │   ├── dist
│   │   └── src
│   ├── sandbox         //  Demo application used to interact with the snap
│   │   ├── public
│   │   └── src
│   ├── snap            //  ShapeShift multi-chain snap code
│   │   ├── dist
│   │   ├── images
│   │   ├── src
│   │   └── test
│   └── types           //  Types used in adapter, sandbox, and snap
│       ├── dist
│       └── src
└── scripts
```

## Contributing

### Setup

- (optional) Make sure you're using the right Node.js version.

```shell
nvm use
```

- Install dependencies.

```shell
# This is short for `yarn install`; be sure to use `yarn install --frozen-lockfile` instead if you're setting up a CI pipeline or trying to duplicate a historical build.
yarn
```

### Development

To run the snap locally use:

```shell
cd packages/snap
yarn build && yarn serve
```

A sandbox application is included to assist in snap development. To start the sandbox:

```shell
cd packages/sandbox
yarn dev
```

Open [http://www.localhost:3000](http://www.localhost:3000) to view the sandbox in the browser.

### Testing and Linting

Run `yarn test` to run the tests once.

Run `yarn lint` to run the linter, or run `yarn lint:fix` to run the linter and fix any automatically fixable issues.
