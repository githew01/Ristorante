import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: { name: string, title: string, desp: string, highLight: string }[] = [
    {
      name: 'Fichipizza',
      title: undefined,
      desp: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.',
      highLight: 'Our Unique Culinary Creations'
    },
    {
      name: 'Weekend Grand Buffet',
      title: undefined,
      desp: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person.',
      highLight: 'This Month\'s Promotions'
    },
    {
      name: 'Tommy McHugh',
      title: 'Executive Chef',
      desp: 'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Mediterranean-Italian experiences.',
      highLight: 'Meet our Culinary Specialists'
    }
  ];

  menus: { name: string, price: string, popularity: number, isNew: boolean }[] = [
    {
      name: 'German sausage and chips',
      price: '$15.50',
      popularity: 5,
      isNew: false
    },
    {
      name: 'Grilled fish and potatos',
      price: '$15.25',
      popularity: 4,
      isNew: false
    },
    {
      name: 'Italian cheese & tomato pizza',
      price: '$14.50',
      popularity: 3,
      isNew: false
    },
    {
      name: 'Thai chicken and rice',
      price: '$15.60',
      popularity: 4,
      isNew: true
    },
    {
      name: 'Vegetable pasta',
      price: '$13.50',
      popularity: 3,
      isNew: false
    },
    {
      name: 'Roase chichen and potato',
      price: '$14.65',
      popularity: 5,
      isNew: false
    },
    {
      name: 'Tomato Soup',
      price: '$8.50',
      popularity: 3,
      isNew: false
    },
    {
      name: 'French onion soup',
      price: '$9.50',
      popularity: 5,
      isNew: true
    },
    {
      name: 'Tomato salad',
      price: '$8.50',
      popularity: 4,
      isNew: true
    },
    {
      name: 'Chichen salad',
      price: '$10.50',
      popularity: 5,
      isNew: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
