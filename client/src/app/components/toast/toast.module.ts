import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastService } from './toast.service';
import { Toast } from './toast';

const Components = [ Toast ];

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [ ...Components, RouterModule ],
  providers: [ ToastService ],
  declarations: [ ...Components ]
})
export class ToastModule { }
