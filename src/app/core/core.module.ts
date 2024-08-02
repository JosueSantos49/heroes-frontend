import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MessagesComponent } from './components/messages/messages.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { RouterModule } from '@angular/router';

const CORE_COMPONENTS = [
  MessagesComponent,
  PageNotFoundComponent,
  ToolbarComponent,
];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: [CORE_COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [CORE_COMPONENTS, MODULES],
})
export class CoreModule {
  //Verificação para nao permitir usar o module em outro lugar
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'O CoreModule já foi carregado. Importe este módulo no AppModule.'
      );
    }
  }
}
