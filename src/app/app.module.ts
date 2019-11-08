import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OfComponent } from './observables/of/of.component';
import { FromComponent } from './observables/from/from.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { ConcatComponent } from './observables/concat/concat.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    FromComponent,
    FromEventComponent,
    CombineLatestComponent,
    ConcatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
