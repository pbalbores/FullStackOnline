import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { JuegoTronosComponent } from './juego-tronos/juego-tronos.component';
import { SubrayadoDirective } from './subrayado.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    JuegoTronosComponent,
    SubrayadoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
