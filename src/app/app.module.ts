import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { FilterComponent } from './operators/filter/filter.component';
import { ContactAllComponent } from './operators/contact-all/contact-all.component';
import { MergeAllComponent } from './operators/merge-all/merge-all.component';
import { SwitchAllComponent } from './operators/switch-all/switch-all.component';
import { FromOfComponent } from './operators/from-of/from-of.component';
import { PipeComponent } from './operators/pipe/pipe.component';
import { ReduceComponent } from './operators/reduce/reduce.component';
import { TakeUntilWhileComponent } from './operators/take-until-while/take-until-while.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { WithLatestFromComponent } from './operators/with-latest-from/with-latest-from.component';
import { SubjectComponent } from './subject/subject/subject.component';
import { SubjectBehaviourComponent } from './subject/subject-behaviour/subject-behaviour.component';
import { SubjectReplayComponent } from './subject/subject-replay/subject-replay.component';
import { SubjectAsyncComponent } from './subject/subject-async/subject-async.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    FilterComponent,
    ContactAllComponent,
    MergeAllComponent,
    SwitchAllComponent,
    FromOfComponent,
    PipeComponent,
    ReduceComponent,
    TakeUntilWhileComponent,
    SwitchMapComponent,
    MergeMapComponent,
    WithLatestFromComponent,
    SubjectComponent,
    SubjectBehaviourComponent,
    SubjectReplayComponent,
    SubjectAsyncComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
