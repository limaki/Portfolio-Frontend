import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { ServicesComponent } from './pages/services/services.component';
import { TecnologysComponent } from './pages/tecnologys/tecnologys.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'resumen', component: ResumenComponent},
  {path: 'tecnologys', component: TecnologysComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: '**', component: PagenotfoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
