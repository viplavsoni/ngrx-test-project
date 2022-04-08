import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ProjectComponent } from './project.component';
import { StoreModule } from '@ngrx/store';
import * as fromProjectModule from './reducers';
import { ProjectRoutingModule } from './project-routing.module';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProjectRoutingModule,
    StoreModule.forFeature('project', fromProjectModule.reducers)
  ],
  exports: [
    ProjectComponent
  ]
})
export class ProjectModule { }
