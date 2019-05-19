import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouteModule } from './route/route.module';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Form1Component } from './components/form1/form1.component';
import { CoProbabilidadComponent } from './components/co-probabilidad/co-probabilidad.component';
import { MultiProbabilidadComponent } from './components/multi-probabilidad/multi-probabilidad.component';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent,
    CarouselComponent,
    Form1Component,
    FooterComponent,
    CoProbabilidadComponent,
    MultiProbabilidadComponent,
    ComponentsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
