import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';



import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { StartupserviceService } from './startupservice.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [StartupserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
