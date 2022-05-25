import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {

  details = [
    {
      img: '/assets/images/connected.jpg',
      text: 'Stay Connected',
      desc: 'Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
    },
    {
      img: '/assets/images/audio.jpg',
      text: 'Immersive Sound',
      desc: 'A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.'
    },
    {
      img: '/assets/images/game.jpg',
      text: 'Room for Everything',
      desc: 'With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
