import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SortGridComponent } from './sort-grid/sort-grid.component';

import { ProjectService } from './project.service';
import { EmailService } from './email.service';

import { MapToIterablePipe } from './map-to-iterable.pipe';

import { routing } from './app.routes';
import { StringFormatPipe } from './string-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    PortfolioPageComponent,
    MapToIterablePipe,
    SortGridComponent,
    StringFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    routing
  ],
  providers: [ProjectService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
