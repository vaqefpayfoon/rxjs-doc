import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { UseRxjsApiComponent } from './use-rxjs-api/use-rxjs-api.component';
import { FirstLessonComponent } from './first-lesson/first-lesson.component';
import { SecondLessonComponent } from './second-lesson/second-lesson.component';
import { ThirdLessonComponent } from './third-lesson/third-lesson.component';
import { FromEventLessonComponent } from './from-event-lesson/from-event-lesson.component';
import { OfLessonComponent } from './of-lesson/of-lesson.component';
import { FromLessonComponent } from './from-lesson/from-lesson.component';
import { IntervalLessonComponent } from './interval-lesson/interval-lesson.component';
import { MapLessonComponent } from './map-lesson/map-lesson.component';
import { FilterLessonComponent } from './filter-lesson/filter-lesson.component';
import { TakeReducerLessonComponent } from './take-reducer-lesson/take-reducer-lesson.component';
import { MapToLessonComponent } from './map-to-lesson/map-to-lesson.component';
import { TapLessonComponent } from './tap-lesson/tap-lesson.component';
import { TakeWhileLessonComponent } from './take-while-lesson/take-while-lesson.component';
import { TakeUntilLessonComponent } from './take-until-lesson/take-until-lesson.component';
import { DistinctUntilChangedLessonComponent } from './distinct-until-changed-lesson/distinct-until-changed-lesson.component';
import { MergeAllLessonComponent } from './merge-all-lesson/merge-all-lesson.component';
import { MergeMapLessonComponent } from './merge-map-lesson/merge-map-lesson.component';
import { SubjectLessonComponent } from './subject-lesson/subject-lesson.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/subjectlesson', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'useApi', component: UseRxjsApiComponent },
  { path: 'first', component: FirstLessonComponent },
  { path: 'second', component: SecondLessonComponent },
  { path: 'third', component: ThirdLessonComponent },
  { path: 'fromEvent', component: FromEventLessonComponent },
  { path: 'of', component: OfLessonComponent },
  { path: 'from', component: FromLessonComponent },
  { path: 'interval', component: IntervalLessonComponent },
  { path: 'map', component: MapLessonComponent },
  { path: 'filter', component: FilterLessonComponent },
  { path: 'take-reducer', component: TakeReducerLessonComponent },
  { path: 'map-to', component: MapToLessonComponent },
  { path: 'tap', component: TapLessonComponent },
  { path: 'takeWhile', component: TakeWhileLessonComponent },
  { path: 'takeUntil', component: TakeUntilLessonComponent },
  { path: 'distictUntilChanged', component: DistinctUntilChangedLessonComponent },
  { path: 'mergeAll', component: MergeAllLessonComponent },
  { path: 'mergeMap', component: MergeMapLessonComponent },
  { path: 'subjectlesson', component: SubjectLessonComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubjectComponent,
    UseRxjsApiComponent,
    FirstLessonComponent,
    SecondLessonComponent,
    ThirdLessonComponent,
    FromEventLessonComponent,
    OfLessonComponent,
    FromLessonComponent,
    IntervalLessonComponent,
    MapLessonComponent,
    FilterLessonComponent,
    TakeReducerLessonComponent,
    MapToLessonComponent,
    TapLessonComponent,
    TakeWhileLessonComponent,
    TakeUntilLessonComponent,
    DistinctUntilChangedLessonComponent,
    MergeAllLessonComponent,
    MergeMapLessonComponent,
    SubjectLessonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
