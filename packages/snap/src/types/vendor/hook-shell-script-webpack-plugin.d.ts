/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/unambiguous
declare module 'hook-shell-script-webpack-plugin' {
  import type { Compiler } from 'webpack'

  export interface Options {
    afterEmit: string[]
  }

  export default class HookShellScriptWebpackPlugin {
    constructor(options: Options)

    apply(compiler: Compiler): void
  }
}
