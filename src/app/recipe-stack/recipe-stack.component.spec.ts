import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStackComponent } from './recipe-stack.component';

describe('RecipeStackComponent', () => {
  let component: RecipeStackComponent;
  let fixture: ComponentFixture<RecipeStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeStackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
