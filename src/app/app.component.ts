import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeStackComponent } from './card-stack/recipe-stack.component';
import { NgxNightwind } from 'ngx-nightwind';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeStackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private ngxNightwind: NgxNightwind) {
    // this.ngxNightwind.enableLight()
    this.ngxNightwind.enableDark();
  }
  
}
