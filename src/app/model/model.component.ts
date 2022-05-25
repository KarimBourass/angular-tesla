import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  model = {
    "id": 0,
    "title": "Model 3",
    "description": "Order Online for Touchless Delivery",
    "image": "model-3.jpg",
    "range": "400",
    "time": "2.99",
    "topSpeed": "180",
    "peakPower": "900"
    ,
    "class": 'b'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
