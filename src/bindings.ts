import { AsyncContainerModule, interfaces } from 'inversify';

import {
  IApp,
  IArgParser,
  INixService,
  IRenderService,
  ITestFinder,
  ITestRunner
} from './interfaces.js';
import {
  ArgParser,
  NixService,
  RenderService,
  TestFinder,
  TestRunner
} from './components/index.js';
import { App } from './App.js';

export const bindings = new AsyncContainerModule(
  async (bind: interfaces.Bind) => {
    bind(IArgParser).to(ArgParser);
    bind(ITestFinder).to(TestFinder);
    bind(ITestRunner).to(TestRunner);
    bind(IRenderService).to(RenderService);
    bind(INixService).to(NixService);
    bind(IApp).to(App);
  }
)
