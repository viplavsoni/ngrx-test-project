import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { ProjectAction } from './action-types';
import { project } from './project.action';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  public projectForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    detail: new FormControl('')
  });
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  submit() {
    let projects = this.projectForm.value;
    console.log(projects);
    this.store.dispatch(project({projects}));
    ProjectAction.removeProject();
  }

}
