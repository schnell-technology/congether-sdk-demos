import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import * as congether from '@schnell.technology/congether-sdk-angular6';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    congether.CongetherSdkLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
