import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  myPortfolio : any;

constructor(private datosPortfolio:PortfolioService){ }

  

  
ngOnInit(): void{
  this.datosPortfolio.obtenerDatos().subscribe(data =>{

    this.myPortfolio = data;
  });
}

}
