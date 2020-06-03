import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureComponent } from './feature.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      { path: '', redirectTo: 'content' },
      {
        path: 'content',
        component: ContentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
