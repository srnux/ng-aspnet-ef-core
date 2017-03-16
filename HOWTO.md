How to include SCSS in components
https://github.com/AngularClass/angular2-webpack-starter.wiki.git
Clone in Desktop
Command line inside project folder where your existing package.json is: npm install node-sass sass-loader raw-loader --save-dev

In webpack.common.js, search for "rules:" and add this object to the end of the rules array (don't forget to add a comma to the end of the previous object):

{
  test: /\.scss$/,
  exclude: /node_modules/,
  loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
}
Then in your component:

@Component({
  styleUrls: ['./filename.scss'],
})
If you want global CSS support then on the top level component (likely app.component.ts) remove encapsulation and include the SCSS:

import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./bootstrap.scss'],
  encapsulation: ViewEncapsulation.None,
  template: ``
})
class App {}