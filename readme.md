# ink-cjs

This is a fork of [ink](https://github.com/vadimdemedes/ink) to support bundling as CommonJS

## Changes

- Change package name to `ink-cjs` to publish to NPM

- Removes top-level `await` usage

  Top-level await is invalid in CommonJS so we must remove it

- Replace `yoga-wasm-web` with `@react-pdf/yoga`

  `yoga-wasm-web` uses top-level await and does not work with CommonJS
