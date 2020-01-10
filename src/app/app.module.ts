import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeBannerComponent,
    AboutusComponent,
    ServicesComponent,
    ProcessComponent,
    ContactusComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
