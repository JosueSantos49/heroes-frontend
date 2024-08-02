import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MessagesComponent } from './components/messages/messages.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';

const CORE_COMPONENTS = [MessagesComponent];
const MODULES = [FlexLayoutModule, MaterialModule];

@NgModule({
  declarations: [CORE_COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [MODULES, CORE_COMPONENTS],
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
