import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
  ]
})
export class ComponentsModule { }
