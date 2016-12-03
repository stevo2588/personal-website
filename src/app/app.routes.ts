import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { SortGridComponent } from './sort-grid/sort-grid.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent, children: [
    {path: 'portfolio-grid', component: SortGridComponent, outlet: 'portfoliopage'},
    {path: ':name', component: PortfolioPageComponent, outlet: 'portfoliopage'}
  ] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
