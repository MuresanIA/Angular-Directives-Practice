import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighLightDirective } from './highlight/highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
