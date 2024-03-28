import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnChanges {
  faStar = faStar;
  starsList: number[] = [];

  @Input() calificacion: number = 0;
  @Output() starsClick = new EventEmitter<number>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.starsList = [];
    for (let i = 1; i <= 5; i++) {
      this.starsList.push(i <= this.calificacion ? 1 : 0);
    }
  }

  onClick(stars: number): void {
    this.starsClick.emit(stars);
  }
}

