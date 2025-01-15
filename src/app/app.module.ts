import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services-ofrecidos/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { LoadingPreviewComponent } from './components/loading-preview/loading-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMeComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactMeComponent,
    LoadingPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
