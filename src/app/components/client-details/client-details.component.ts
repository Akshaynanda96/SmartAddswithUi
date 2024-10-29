import { Component } from '@angular/core';
import {MatDateRangeInput} from '@angular/material/datepicker';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatStepperNext} from '@angular/material/stepper';
import {CommonModule} from '@angular/common';
import {MaterialService} from '../../services/material.service';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [
    MatDateRangeInput,
    ReactiveFormsModule,
    CommonModule,
    MatStepperNext,

  ],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css'
})
export class ClientDetailsComponent {
  constructor(private materialServices : MaterialService) {
  }
  email = new FormControl('', [ Validators.required, Validators.email ])
  BusinessShopName = new FormControl('', [ Validators.required ])
  BusinessType = new FormControl('', [ Validators.required ])
  Contact = new FormControl('', [ Validators.required, Validators.maxLength(10) ])
  Website = new FormControl('', [Validators.required])
  RegistrationNumber = new FormControl('', [Validators.required])
  State = new FormControl('', [Validators.required])
  City = new FormControl('', [Validators.required])
  Address = new FormControl('', [Validators.required])
  Pincode = new FormControl('', [Validators.required])

  coustmerForm: FormGroup = new FormGroup({
    email : this.email,
    BusinessShopName : this.BusinessShopName,
    BusinessType : this.BusinessType,
    Contact : this.Contact,
    Website : this.Website,
    RegistrationNumber : this.RegistrationNumber,
    State : this.State,
    City : this.City,
    Address : this.Address,
    Pincode : this.Pincode,
  });

  customerData(){
    let completed:boolean = this.coustmerForm.valid
    this.materialServices.component(completed)
    console.log(completed)
  }

}
