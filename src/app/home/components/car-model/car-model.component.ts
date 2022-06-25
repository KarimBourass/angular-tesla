import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent implements OnInit {


  models: any[] = [
    {
      "id": 0,
      "title": "Model 3",
      "description": "Order Online for Touchless Delivery",
      "image": "model-3.jpg",
      "range": "400",
      "time": "2.99",
      "topSpeed": "180",
      "peakPower": "900",
      "class": 'b'
    },
    {
      "id": 1,
      "title": "Model S",
      "description": "Order Online for Touchless Delivery",
      "image": "model-s.jpg",
      "range": "390",
      "time": "1.99",
      "topSpeed": "200",
      "peakPower": "1,020",
      "class": 'a'
    },
    {
      "id": 2,
      "title": "Model X",
      "description": "Order Online for Touchless Delivery",
      "image": "model-x.jpg",
      "range": "350",
      "time": "1.55",
      "topSpeed": "150",
      "peakPower": "1,130",
      "class": 'c'
    },
    {
      "id": 3,
      "title": "Model Y",
      "description": "Order Online for Touchless Delivery",
      "image": "model-y.jpg",
      "range": "410",
      "time": "2.05",
      "topSpeed": "190",
      "peakPower": "1,040",
      "class": 'd'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
