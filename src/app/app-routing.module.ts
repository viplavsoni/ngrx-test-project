import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  { path: 'test', loadChildren: () =>
  import('./test-component/test-component.module').then(
    mod => mod.TestComponentModule
  ) },
  { path: 'project', 
  loadChildren: () =>
  import('./project/project.module').then(
    mod => mod.ProjectModule
  ) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
