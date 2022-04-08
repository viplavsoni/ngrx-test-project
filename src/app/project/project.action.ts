import { createAction, props } from "@ngrx/store";
import { Projects } from "../model/projects.model";

export const project = createAction(
  "[Project Page] Project Detail",
  props< {projects : Projects}>()
)

export const removeProject = createAction(
  "[Project remove] Project Delete"
)
