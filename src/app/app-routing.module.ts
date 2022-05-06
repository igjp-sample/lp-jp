import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'test1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'test1', component: Test1Component, data: { text: 'test1' } },
  { path: 'test2', component: Test2Component, data: { text: 'test2' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
