import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViesPdfViewerComponent } from './vies-pdf-viewer.component';


const routes: Routes = [
  {
    path: '',
    component: ViesPdfViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViesPdfViewerRoutingModule { }
