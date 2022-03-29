import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service'

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm : FormGroup
  firstName: FormControl
  lastName: FormControl
  
  constructor(private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private router:Router) {
    this.firstName = new FormControl()
    this.lastName = new FormControl()
    this.profileForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(
      this.authService.currentUser?.lastName, Validators.required)
    
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(formValues : any) {
    if (this.profileForm.valid) {    
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.toastr.success('Profile Saved')
    }
  }

  validateFirstName() :boolean {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() : boolean {
    return this.lastName.valid || this.lastName.untouched
  }
}