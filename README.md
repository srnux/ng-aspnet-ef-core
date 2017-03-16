# ng-aspnet-ef-core

ASP.NET Core 1.1.1

EntityFramework Core 1.1.1

Angular 2.4.5

Typescript 2.2

Webpack 2.2.0

Angular Universal

################################################

Domain model and DA projects based on Julie Lerman (@julielerman) Pluralsight EF videos.

Created with Visual Studio 2017.

#################################################

Material2 problems with Universal 
Exception: Call to Node module failed with error: ReferenceError: window is not defined
at new ScrollDispatcher
on buttons in navmenu
https://github.com/angular/material2/issues/308

window, document, navigator, and other browser types - do not exist on the server
https://github.com/angular/universal

ASP.NET Core Angular Universal
https://github.com/MarkPieszak/aspnetcore-angular2-universal
To disable SSR, go to Views/Home/Index.cshtml and remove asp-prerender-module="ClientApp/dist/main-server" from the <app> tag in the cshtml file.
