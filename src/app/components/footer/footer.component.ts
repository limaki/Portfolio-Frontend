import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  myPortfolio : any;

  constructor(private datosPortfolio:PortfolioService){ }


ngOnInit(): void{
  this.datosPortfolio.obtenerDatos().subscribe(data =>{

    this.myPortfolio = data;
  });

}


AgreegeFooter(value : string){this.myPortfolio.Resumen.footerTextFirst = value};


AgreegeFooterTwo(value : string){this.myPortfolio.Resumen.footerTextThreed = value};




//style background


AgreegeFooterColor(value : string){this.myPortfolio.Resumen.backgroundFooter += value};



//quitar footer


DeleteWordsFooter(){

this.myPortfolio.Resumen.footerTextSecond = '';

this.myPortfolio.Resumen.footerTextFourth = '';


}

}
