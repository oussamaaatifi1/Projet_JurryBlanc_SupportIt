import { NgModule, ɵRender3NgModuleRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { AuthGuard } from './auth.guard';
import { UserDashboardComponentComponent } from './dash/user-dashboard-component/user-dashboard-component.component';
import { AdminComponentComponent } from './dash/admin-component/admin-component.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { TechnicienDashboardComponent } from './dash/technicien-dashboard/technicien-dashboard.component';
import { EquipementComponent } from './admin/Equipements/equipement/equipement.component';
import { PannesComponent } from './admin/Paanes/pannes/pannes.component';
import { AddEquipmentComponent } from './admin/Equipements/add-equipment/add-equipment.component';
import { EditEquipmentComponent } from './admin/Equipements/edit-equipment/edit-equipment.component';
import { AddPannesComponent } from './admin/Paanes/add-pannes/add-pannes.component';
// import { adminGuard } from './Guard/admin-guard.guard';
// import { userGuard } from './Guard/user-guard.guard';
// import { technicienGuard } from './Guard/technicien-guard.guard';
import { Role } from './Model/enum/Role';
import { AdminGuard } from './Guard/admin-guard.guard';
import { UpdateEquipementComponent } from './Equipements/update-equipement/update-equipement.component';



const routes: Routes = [
  { path: 'admin/dashboard', component: AdminComponentComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'technician/dashboard', component: TechnicienDashboardComponent, canActivate: [AuthGuard], data: { roles: ['TECHNICIEN'] } },
  { path: 'user/dashboard', component: UserDashboardComponentComponent, canActivate: [AuthGuard], data: { roles: ['USER'] } },

  { path: 'login', component: LoginComponent },
  { path: 'register/register', component: SignupComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' },
  { path: 'register', component: SignupComponent, canActivate: [AdminGuard] },
  { path: 'register/tech', component: SignupComponent, canActivate: [AdminGuard] },
  {path : 'equipements' , component : EquipementComponent,canActivate: [AdminGuard]},
  { path: 'equipements/add', component: AddEquipmentComponent,canActivate: [AdminGuard] },
  { path: 'equipements/edit/:id', component: EditEquipmentComponent,canActivate: [AdminGuard] },
  {path : 'pannes' , component : PannesComponent,canActivate: [AdminGuard]},
  { path: 'pannes/add', component: AddPannesComponent ,canActivate: [AdminGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
