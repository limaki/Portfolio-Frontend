import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
constructor(private datosPortfolio:PortfolioService){ }


 myPortfolio : any;



  euroopen(){


   let textePipe = document.querySelector<HTMLElement>('#textI')!;

   textePipe.style.display = 'block';

  

  }
  
  

  



 

  
  
    
  
    
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
  
      this.myPortfolio = data;
    });
  }

  Delete(){
    let textBackground = document.querySelector<HTMLElement>('#Text-Initial')!; 
    textBackground.innerHTML = '';


    let rellenoFirst = document.querySelector<HTMLElement>('#relleno-imageFirst')!;

    rellenoFirst.style.display = 'block';

    let buttoFirst = document.querySelector<HTMLElement>('#buttoFirst')!;

    buttoFirst.style.display = 'none';

    

    let backgroundOcult = document.querySelector<HTMLElement>('.background-initial')!;

    backgroundOcult.style.background = 'none';
    

    let backgroundAgreege = document.querySelector<HTMLElement>('.background-initial-one')!;

    backgroundOcult.className += ' background-initial-one';

    
  }

  DeletePhoto(){

    let button = document.querySelector<HTMLElement>('#butto')!;

     button.style.display = 'none';

    //  let buttonEdit = document.querySelector<HTMLElement>('#button-edit')!;

    //  buttonEdit.style.display = 'none !important';

    let suAmor = document.querySelector<HTMLElement>('#suAmor')!;

    suAmor.style.display = 'none';

     

    let amor = document.querySelector<HTMLElement>('#amor')!;

    amor.style.display = 'block';


    let relleno = document.querySelector<HTMLElement>('#relleno-image')!;

    relleno.style.display = 'block';

    relleno.style.height = '64px';

    // let backgrounde = document.querySelector<HTMLElement>('.section-text')!;

    // backgrounde.style.background = 'none !important';

    
  }

  AgregePhoto(){

    this.myPortfolio.imagePerson
  }
}
