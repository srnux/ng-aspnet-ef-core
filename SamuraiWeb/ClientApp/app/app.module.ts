import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { SamuraiComponent } from './components/samurai/samurai.component'
//import { SamuraiFormComponent } from './components/samurai/samurai-form.component'

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SamuraiModule} from './components/samurai/samurai.module'

import './rxjs-extensions';

import { MaterialModule } from '@angular/material';
//import 'hammerjs';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent, //SamuraiComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        AppRoutingModule,
        //FormsModule, ReactiveFormsModule,
        MaterialModule,
        SamuraiModule //load the samurai module with it's own components
    ]
})
export class AppModule {
}
