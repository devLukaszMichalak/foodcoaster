import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipeCardComponent } from './ui/recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-stack',
  standalone: true,
  imports: [
    RecipeCardComponent
  ],
  templateUrl: './recipe-stack.component.html',
  styleUrl: './recipe-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeStackComponent {

}
