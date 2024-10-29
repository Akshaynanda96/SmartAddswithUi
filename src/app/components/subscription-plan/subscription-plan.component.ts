import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatStepperNext, MatStepperPrevious} from '@angular/material/stepper';

@Component({
  selector: 'app-subscription-plan',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardImage,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatButton,
    MatCardHeader,
    MatCard,
    NgOptimizedImage,
    MatButtonToggleGroup,
    MatButtonToggle,
    NgForOf,
    MatStepperPrevious,
    MatStepperNext
  ],
  templateUrl: './subscription-plan.component.html',
  styleUrl: './subscription-plan.component.css'
})
export class SubscriptionPlanComponent {

  selectedPeriod: string = 'monthly';

  plans = [
    {
      name: 'Basic',
      subtitle: 'For Individuals',
      price: '$10',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ]
    },
    {
      name: 'Prime',
      subtitle: 'For Small Teams',
      price: '$30',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
      ]
    },
    {
      name: 'Enterprise',
      subtitle: 'For Large Organizations',
      price: '$100',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ]
    },
  ];

}
