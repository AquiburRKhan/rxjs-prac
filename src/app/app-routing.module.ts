import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfComponent } from './observables/of/of.component';
import { ZipComponent } from './observables/zip/zip.component';
import { MapComponent } from './observables/map/map.component';
import { TapComponent } from './observables/tap/tap.component';
import { FromComponent } from './observables/from/from.component';
import { TakeComponent } from './observables/take/take.component';
import { ScanComponent } from './observables/scan/scan.component';
import { ShareComponent } from './observables/share/share.component';
import { MergeComponent } from './observables/merge/merge.component';
import { FilterComponent } from './observables/filter/filter.component';
import { ConcatComponent } from './observables/concat/concat.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { StartWithComponent } from './observables/start-with/start-with.component';
import { TakeUntilComponent } from './observables/take-until/take-until.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { BufferTimeComponent } from './observables/buffer-time/buffer-time.component';
import { DebounceTimeComponent } from './observables/debounce-time/debounce-time.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { WithLatestFromComponent } from './observables/with-latest-from/with-latest-from.component';
import { DistinctUntilChangedComponent } from './observables/distinct-until-changed/distinct-until-changed.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'of'
  }, {
    path: 'of',
    component: OfComponent
  }, {
    path: 'from',
    component: FromComponent
  }, {
    path: 'from-event',
    component: FromEventComponent
  }, {
    path: 'combine-latest',
    component: CombineLatestComponent
  }, {
    path: 'concat',
    component: ConcatComponent
  }, {
    path: 'merge',
    component: MergeComponent
  }, {
    path: 'start-with',
    component: StartWithComponent
  }, {
    path: 'with-latest-from',
    component: WithLatestFromComponent
  }, {
    path: 'zip',
    component: ZipComponent
  }, {
    path: 'debounce-time',
    component: DebounceTimeComponent
  }, {
    path: 'distinct-until-changed',
    component: DistinctUntilChangedComponent
  }, {
    path: 'filter',
    component: FilterComponent
  }, {
    path: 'take',
    component: TakeComponent
  }, {
    path: 'take-until',
    component: TakeUntilComponent
  }, {
    path: 'buffer-time',
    component: BufferTimeComponent
  }, {
    path: 'map',
    component: MapComponent
  }, {
    path: 'merge-map',
    component: MergeMapComponent
  }, {
    path: 'concat-map',
    component: ConcatMapComponent
  }, {
    path: 'switch-map',
    component: SwitchMapComponent
  }, {
    path: 'scan',
    component: ScanComponent
  }, {
    path: 'tap',
    component: TapComponent
  }, {
    path: 'share',
    component: ShareComponent
  }]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
