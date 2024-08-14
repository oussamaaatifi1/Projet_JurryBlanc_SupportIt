import { Role } from "./enum/Role";

export class Utilisateurs {
    id: number = 0;
    nom : string ='';
    email : string ='';
    password :string ='';
    role! : Role;
}