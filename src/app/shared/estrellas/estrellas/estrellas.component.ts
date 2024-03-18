import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, input, output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnChanges {
  faStar = faStar;
  estrellasCalificacion: any[] = [];

  @Input() calificacion: number = 0;
  @Output() starsClick = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.estrellasCalificacion= [];
    for( var i= 1; i<= this.calificacion; i++){
      this.estrellasCalificacion.push(1)
    }
  }

  onClick( stars: number ): void{
    this.starsClick.emit( "Calificación:" +stars );
  }

}
