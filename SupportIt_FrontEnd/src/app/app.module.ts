import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/login/login.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { AdminComponentComponent } from './dash/admin-component/admin-component.component';
import { UserDashboardComponentComponent } from './dash/user-dashboard-component/user-dashboard-component.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TechnicienDashboardComponent } from './dash/technicien-dashboard/technicien-dashboard.component';
import { AuthInterceptor } from './interceptor/authentication.interceptor';
import { EquipementComponent } from './admin/Equipements/equipement/equipement.component';
import { PannesComponent } from './admin/Paanes/pannes/pannes.component';
import { AddEquipmentComponent } from './admin/Equipements/add-equipment/add-equipment.component';
import { FormsModule } from '@angular/forms';
import { EditEquipmentComponent } from './admin/Equipements/edit-equipment/edit-equipment.component';
import { AddPannesComponent } from './admin/Paanes/add-pannes/add-pannes.component';
import { AuthentificationService } from './service/authentification.service';
import { UpdateEquipementComponent } from './admin/Equipements/update-equipement/update-equipement.component';
import { ListUtilisateursComponent } from './admin/Utilisateurs/list-utilisateurs/list-utilisateurs.component';
import { HomeComponent } from './home/home/home.component';
import { EditPannesComponent } from './admin/Paanes/edit-pannes/edit-pannes.component';
import { TechnicienComponent } from './admin/technicien/technicien.component';
import { TableTicketsComponent } from './admin/table-tickets/table-tickets.component';
import { SidbarComponent } from './sidbar/sidbar/sidbar.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ListticketsComponent } from './admin/user/listtickets/listtickets.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponentComponent,
    UserDashboardComponentComponent,
    TechnicienDashboardComponent,
    EquipementComponent,
    PannesComponent,
    AddEquipmentComponent,
    EditEquipmentComponent,
    AddPannesComponent,
    UpdateEquipementComponent,
    ListUtilisateursComponent,
    HomeComponent,
    EditPannesComponent,
    TechnicienComponent,
    TableTicketsComponent,
    SidbarComponent,
    NavbarComponent,
    ListticketsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [AuthentificationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
