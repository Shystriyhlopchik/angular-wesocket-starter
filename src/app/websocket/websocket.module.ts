import {CommonModule} from '@angular/common';
import {WebsocketService} from './websocket.service';
import {WebSocketConfig} from './websocket.interfaces';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { config } from './websocket.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WebsocketService
  ]
})
export class WebsocketModule {
  public static config(wsConfig: WebSocketConfig): ModuleWithProviders<any> {
    return {
      ngModule: WebsocketModule,
      providers: [{ provide: config, useValue: wsConfig }]
    };
  }
}
