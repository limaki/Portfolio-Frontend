import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { PersonComponent } from './components/person/person.component';
import { SectionComponent } from './components/section/section.component';
import { IndexComponent } from './pages/index/index.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { ServicesComponent } from './pages/services/services.component';
import { TecnologysComponent } from './pages/tecnologys/tecnologys.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { CalculadorComponent } from './components/calculador/calculador.component';
import {HttpClientModule } from '@angular/common/http';
import { ResumenModule } from './pages/resumen/resumen.module';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    MainComponent,
    PersonComponent,
    SectionComponent,
    IndexComponent,
    ResumenComponent,
    ServicesComponent,
    TecnologysComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculadorComponent,
    ProyectsComponent,
    LoginComponent,
    ContactanosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ResumenModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
