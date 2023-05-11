import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  myPortfolio : any;

constructor(private datosPortfolio:PortfolioService){ }

  

  
ngOnInit(): void{
  this.datosPortfolio.obtenerDatos().subscribe(data =>{

    this.myPortfolio = data;
  });
}

Delete() : void{

  let TextEliminated = document.querySelector<HTMLElement>('#Text-initial')!;

  TextEliminated.innerHTML= '...'    //Inactivo hasta argentina programa
}

}
