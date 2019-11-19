import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OfComponent } from './observables/of/of.component';
import { FromComponent } from './observables/from/from.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { ConcatComponent } from './observables/concat/concat.component';
import { MergeComponent } from './observables/merge/merge.component';
import { StartWithComponent } from './observables/start-with/start-with.component';
import { WithLatestFromComponent } from './observables/with-latest-from/with-latest-from.component';
import { ZipComponent } from './observables/zip/zip.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    FromComponent,
    FromEventComponent,
    CombineLatestComponent,
    ConcatComponent,
    MergeComponent,
    StartWithComponent,
    WithLatestFromComponent,
    ZipComponent
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
