import {NgModule} from '@angular/core';

import {ComponentModule} from './components/component.module';
import {DirectiveModule} from './directives/directive.module';
import {PipeModule} from './pipes/pipe.module';
import {MaterialModule} from './modules/material.module';

const SHARED = [
  ComponentModule,
  DirectiveModule,
  PipeModule,
  MaterialModule
];

@NgModule({
  imports: SHARED,
  exports: SHARED
})
export class SharedModule {
}
