import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { MatFormField, MatLabel } from '@angular/material/form-field'; // Add MatLabel import
import { MatInput } from '@angular/material/input';
import {SubscriptionPlanComponent} from './components/subscription-plan/subscription-plan.component';
import {PaymentComponent} from './components/payment/payment.component';
import {MatLine} from '@angular/material/core';
import {MaterialService} from './services/material.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton,
    NgOptimizedImage,
    MatStepperModule,
    ClientDetailsComponent,
    MatFormField,
    MatLabel, // Add MatLabel to imports
    MatInput,
    SubscriptionPlanComponent,
    PaymentComponent,
    MatLine,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected readonly encodeURI = encodeURI;
  title = 'smartAdds';

  constructor(public materialServices: MaterialService) {}

  nextFunction() {
    return  this.materialServices.getCompleted();
  }

}
