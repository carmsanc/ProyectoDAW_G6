import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';


import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { StepperComponent } from 'app/components/stepper/stepper.component';
import { MatStepperModule } from '@angular/material';
import { GoogleChartsModule } from 'angular-google-charts';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  
  
} from '@angular/material';
import { EstadisticasComponent } from 'app/estadisticas/estadisticas.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatStepperModule,
    GoogleChartsModule,
  ],
  declarations: [
    EstadisticasComponent,
    
    TableListComponent,
    TypographyComponent,
    StepperComponent
    
    
    
  ]
})

export class AdminLayoutModule {}
