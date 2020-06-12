import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViesPdfViewerRoutingModule } from './vies-pdf-viewer-routing.module';
import { SafePipe } from 'src/app/filters/safe.pipe';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ViesPdfViewerComponent } from './vies-pdf-viewer.component';

@NgModule({
  declarations: [
    SafePipe,
    ViesPdfViewerComponent
  ],
  imports: [
    CommonModule,
    ViesPdfViewerRoutingModule,
    DirectivesModule.forRoot(),
  ]
})
export class ViesPdfViewerModule { }
