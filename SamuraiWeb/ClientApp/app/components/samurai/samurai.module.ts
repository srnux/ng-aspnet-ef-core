import { NgModule } from '@angular/core';

//import { BrowserModule }  from '@angular/platform-browser';
import {  ReactiveFormsModule }  from '@angular/forms';
//import { HttpModule }    from '@angular/http';

//import { AppRoutingModule }     from '../../app-routing.module';

import '../../rxjs-extensions';

//import 'hammerjs';

import { MaterialModule } from '@angular/material';

import { SamuraiComponent }          from './samurai.component';
import { SamuraiService }          from './samurai.service';
import { SamuraiFormComponent } from './samurai-form.component';

import { UniversalModule } from 'angular2-universal'; 
@NgModule({
    imports: [
      
    //BrowserModule,
        MaterialModule,
    ReactiveFormsModule,
    //HttpModule,
    //AppRoutingModule,
    UniversalModule // load the universal module last - https://github.com/angular/universal/issues/536#issuecomment-247762794

    
  ],
  declarations: [
    SamuraiComponent,
    SamuraiFormComponent
  ],
  providers: [ SamuraiService ],
  exports:[
    SamuraiComponent
  ]
})

export class SamuraiModule { }
