import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroAddComponent } from './hero-add/hero-add.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroAddComponent
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
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
