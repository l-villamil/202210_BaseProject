import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandaComponent } from './banda.component';
import { BandaDetailComponent } from './banda-Detail/banda-Detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandaComponent,BandaDetailComponent],
  exports: [BandaComponent]
})
export class BandaModule { }
