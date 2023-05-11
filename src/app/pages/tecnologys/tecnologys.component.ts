import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologys',
  templateUrl: './tecnologys.component.html',
  styleUrls: ['./tecnologys.component.css']
})
export class TecnologysComponent {

  Delete():void{
    
    let initialEliminated = document.querySelector<HTMLElement>('#Text-initial')!;

    initialEliminated.innerHTML = '...';      // En deshuso hasta argentina programa
  }

}
