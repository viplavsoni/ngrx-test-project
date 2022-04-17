import { state } from '@angular/animations';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { Projects } from 'src/app/model/projects.model';
import { ProjectAction } from '../action-types';

export const projectModuleFeatureKey = 'projectModule';

export interface ProjectState {
  project: Projects
}

export const initialProjectState: ProjectState = {
  project: new Projects
}

export const proReducer = createReducer(
  initialProjectState,

  on(ProjectAction.project, (state, action) => {
    console.log("logging into the reducer");
    return {
      project: action.projects
    }
  })
)
