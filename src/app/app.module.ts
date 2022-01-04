import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { serverComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { MultipleserversComponent } from './multipleservers/multipleservers.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,serverComponent, MultipleserversComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
