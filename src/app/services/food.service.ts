import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Celery',
        price: 12,
        image: 'assets/images/foods/celery.png',
        description:
          'Lorem Ipsum Celery Molaarngs',
      },
      {
        id: 2,
        title: 'Carrots',
        price: 21,
        image: 'assets/images/foods/carrots.png',
        description:
          'Carrots, matigas pa sa ulo mo.',
      },
      {
        id: 3,
        title: 'Tuna',
        price: 16,
        image: 'assets/images/foods/Tuna.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 4,
        title: 'Bangus',
        price: 20,
        image: 'assets/images/foods/Bangus.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 5,
        title: 'Corned Beef',
        price: 10,
        image: 'assets/images/foods/CornedBeef.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 6,
        title: 'Sardines',
        price: 13,
        image: 'assets/images/foods/Sardines.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      }
      
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
