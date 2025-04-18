import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { UitoolsComponent } from './uitools/uitools.component';
import { Test1Component } from './test1/test1.component';

export const routes: Routes = [
  { path: '', component: UitoolsComponent, data: { text: 'uitools' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'uitools', component: UitoolsComponent, data: { text: 'uitools' } },
  { path: 'test1', component: Test1Component, data: { text: 'test1' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
