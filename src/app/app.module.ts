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
import { DebounceTimeComponent } from './observables/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './observables/distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './observables/filter/filter.component';
import { TakeComponent } from './observables/take/take.component';
import { TakeUntilComponent } from './observables/take-until/take-until.component';
import { BufferTimeComponent } from './observables/buffer-time/buffer-time.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { MapComponent } from './observables/map/map.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';

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
    ZipComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    BufferTimeComponent,
    ConcatMapComponent,
    MapComponent,
    MergeMapComponent
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
