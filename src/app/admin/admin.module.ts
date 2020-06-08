import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';

//Componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

//Servicios
import { AdminGuard } from '../services/admin.guard';
import { UserService } from '../services/user.service';

import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
    declarations: [
        MainComponent, 
        ListComponent,
        EditComponent,
        AddComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule, 
        AdminRoutingModule
    ],
    exports: [
        MainComponent, 
        ListComponent,
        EditComponent,
        AddComponent
    ],
    providers: [
        AdminGuard,
        UserService,
    ]
})

export class AdminModule {}