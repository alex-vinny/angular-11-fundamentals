import { Component } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userName:string = ''
    password:string = ''
    mouseoverLogin:boolean=false
    constructor(private authService:AuthService, private router:Router) {    
    }

    login(formValues: any) {
        console.log(formValues)
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }

    showRequired(control: AbstractControl):boolean {
        return control?.invalid
            && (control?.touched || this.mouseoverLogin)
    }
}