import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {

  myPortfolio : any;

  constructor(private datosPortfolio:PortfolioService){ }
  
    
  
    
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
  
      this.myPortfolio = data;
    });
  }



  



  // tittleProyectFour = ''

  // textProyectFour = ''

    addProyect(): void{

this.CloseProyectFour = true;

      let newProyectOneB = document.querySelector<HTMLElement>('#agreegeProyectClose')!;

      newProyectOneB.style.display = 'none';



      let newProyectTwoB = document.querySelector<HTMLElement>('#agreegeProyectCloseTwo')!;

       newProyectTwoB.style.display = 'block';

      
     

      let PresionText = document.querySelector<HTMLElement>('#PressionThreeText')!;

      PresionText.style.display = 'none';

      

    }










    // proyectTwo = ''

    // proyectTextTwo = ''






     addProyectTwo(): void{


      this.CloseProyectFive = true;


    let newProyectTwoB = document.querySelector<HTMLElement>('#agreegeProyectCloseTwo')!;

     newProyectTwoB.style.display = 'none';


     let newProyectThreeB = document.querySelector<HTMLElement>('#agreegeProyectCloseThree')!;

     newProyectThreeB.style.display = 'block';

      
     

       let PresionText = document.querySelector<HTMLElement>('#PressionThreeText')!;

       PresionText.style.display = 'none';
     }






    //  proyectThree = '';
    //  proyectTextThree = '';



     addProyectThree(): void{


      this.CloseProyectSix = true;


    let newProyectThreeB = document.querySelector<HTMLElement>('#agreegeProyectCloseThree')!;

     newProyectThreeB.style.display = 'none';


      
     

       let PresionText = document.querySelector<HTMLElement>('#PressionThreeText')!;

       PresionText.style.display = 'none';
     }





/*AddModal*/



  addTwo(boxOne:string) {

      { this.myPortfolio.Resumen.tittleProyectFour = boxOne};
    }

     addThree(boxOne2:string) {

      { this.myPortfolio.Resumen.textProyectFour = boxOne2};

    }



     addTwo2(boxTwo2:string) {

       { this.myPortfolio.Resumen.tittleProyectFive = boxTwo2};
     }

      addThree2(boxTwo2:string) {

       { this.myPortfolio.Resumen.textProyectFive = boxTwo2};

     }




     addTwo3(boxThree:string) {

       { this.myPortfolio.Resumen.tittleProyectSix = boxThree};
     }

      addThree3(boxThree2:string) {

       { this.myPortfolio.Resumen.textProyectSix = boxThree2};

     }



















/*Close boton*/





    CloseProyect = true;
    CloseProyectTwo = true;
    CloseProyectThree = true;
    CloseProyectFour = false;
    CloseProyectFive = false;
    CloseProyectSix = false;




   ButtonCloseProyect(){this.CloseProyect = false;}
   ButtonCloseProyectTwo(){this.CloseProyectTwo = false;}
   ButtonCloseProyectThree(){this.CloseProyectThree = false;}
   ButtonCloseProyectFour(){this.CloseProyectFour = false;}
   ButtonCloseProyectFive(){this.CloseProyectFive = false;}
   ButtonCloseProyectSix(){this.CloseProyectSix = false;}


}
