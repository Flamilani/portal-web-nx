import { ProductsModule } from '@estudo-nx/modules/products';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutModule } from '@estudo-nx/layout';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, NavComponent, HomeComponent, RouterModule, LayoutModule, ProductsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
