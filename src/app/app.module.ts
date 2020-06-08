import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';

import {Routing, AppRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos
import { ModuloEmailModule } from './moduloemail/moduloemail.module'

//Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParqueComponent } from './components/parques/parques.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { keepersComponent } from './components/keepers/keepers.component';
import { NotFoundComponent } from './components/notFound/NotFound.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';


//Servicios
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent, TiendaComponent, ParqueComponent, EmpleadosComponent,
    HomeComponent, ContactComponent, AnimalsComponent, keepersComponent, NotFoundComponent,
    RegisterComponent, LoginComponent, UserEditComponent, AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Routing,
    AppRoutingProviders, 
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
