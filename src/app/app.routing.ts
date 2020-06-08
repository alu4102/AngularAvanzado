import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

//Componentes
import { TiendaComponent } from './components/tienda/tienda.component';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { keepersComponent } from './components/keepers/keepers.component';
import { NotFoundComponent } from './components/notFound/NotFound.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';


const appRoutes: Routes = [

    //{path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'animals', component: AnimalsComponent},
    {path: 'keepers', component: keepersComponent},
    {path: 'shop', component: TiendaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'mis-datos', component: UserEditComponent},
    {path: 'animal/:id', component: AnimalDetailComponent},
    {path: '**', component: NotFoundComponent},

];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

