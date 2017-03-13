import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
//import { BrowserModule }  from '@angular/platform-browser';
//import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
//import { HttpModule }    from '@angular/http';

//import { AppRoutingModule }     from '../../app-routing.module';

import '../../rxjs-extensions';

//import 'hammerjs';

import { MaterialModule } from '@angular/material';

import { SamuraiComponent }          from './samurai.component';
import { SamuraiService }          from './samurai.service';
//import { SamuraiFormComponent } from './samurai-form.component';

@NgModule({
    imports: [
      UniversalModule,
    //BrowserModule,
    //FormsModule,
    //ReactiveFormsModule,
    //HttpModule,
    //AppRoutingModule,
    MaterialModule
  ],
  declarations: [
    SamuraiComponent,
    //SamuraiFormComponent
  ],
  providers: [ SamuraiService ],
  exports:[
    SamuraiComponent
  ]
})

export class SamuraiModule { }
