import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersoPipe } from './perso.pipe';
import { CompteComponent } from './compte/compte.component';
import { MvtPipe } from './mvt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersoPipe,
    CompteComponent,
    MvtPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
