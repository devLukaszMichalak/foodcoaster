import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeStackComponent } from './card-stack/recipe-stack.component';
import { OptionsComponent } from './card-stack/ui/options/options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeStackComponent, OptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
