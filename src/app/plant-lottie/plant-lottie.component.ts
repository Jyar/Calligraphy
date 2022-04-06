import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-plant-lottie',
  templateUrl: './plant-lottie.component.html',
  styleUrls: ['./plant-lottie.component.css']
})
export class PlantLottieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  plantMoving: AnimationOptions = {
    path: '/assets/lottie/plant-moving.json',
  };

  pencilCup: AnimationOptions = {
    path: '/assets/lottie/pencil-cup.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
