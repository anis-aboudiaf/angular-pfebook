import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule
  ]
})
export class ArticleModule { }
