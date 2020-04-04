import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';

const routes: Routes = [
  { path: 'item', component: CreateItemComponent }
]

@NgModule({
  declarations: [CreateItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateModule { }
