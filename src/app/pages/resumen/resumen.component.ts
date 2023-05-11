import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {

  myPortfolio : any;

constructor(private datosPortfolio:PortfolioService){ }

  

  
ngOnInit(): void{
  this.datosPortfolio.obtenerDatos().subscribe(data =>{

    this.myPortfolio = data;
  });
}

ModifBanerResume( value : string){

     this.myPortfolio.Resumen.resumenInitial = value;

     let imageTextBanner = document.querySelector<HTMLElement>('.section-text__class_strong')!;

     imageTextBanner.style.color = 'white';
   }
  




   DeleteTwoTextDescribing():void{

    this.myPortfolio.Resumen.textDescribing = '';
    this.myPortfolio.Resumen.textDescribingTwo = '';
  }

  EditTwoTextDescribing():void{

this.myPortfolio.Resumen.textDescribingTwo = '';

this.myPortfolio.Resumen.textDescribing = 'La bolsa de papas fritas trae más aire que alimento, lo mismo pasa con muchas cabezas';

 let imput = document.querySelector<HTMLElement>('.edit-text')!;
  imput.style.display = 'block';



  let TextDescription = document.querySelector<HTMLElement>('#TextDescription')!;

  TextDescription.style.display = 'block';

  let DescriptionButtonText = document.querySelector<HTMLElement>('#DescriptionButtonText')!;

  DescriptionButtonText.style.display = 'none';

  }
  // let TextUrlImage = document.querySelector<HTMLElement>('#UrlImage')!;

  // TextUrlImage.style.display = 'block';


  update(value: string) { this.myPortfolio.Resumen.textDescribing = value;};

  DeleteInputTextDescribe(): void{


    let DeleteImputButton = document.querySelector<HTMLElement>('#ButtonDeleteInput')!;

    DeleteImputButton.style.display = 'none';

    let TextDescriptioninput = document.querySelector<HTMLElement>('#TextDescription')!;

    TextDescriptioninput.style.display = 'none';

    
    let DescriptionButtonText = document.querySelector<HTMLElement>('#DescriptionButtonText')!;

    DescriptionButtonText.style.display = 'block';

    
}


DeleteTwoImgDescribing():void{

  let imageBluePerson = document.querySelector<HTMLElement>('#imageBluePerson')!;

  imageBluePerson.style.display = 'none';

  let imageDescriptionNotBluePerson = document.querySelector<HTMLElement>('#imageDescription')!;

  imageDescriptionNotBluePerson.style.display = 'none';
}

EditTwoImgDescribing(){

  let imageBluePerson = document.querySelector<HTMLElement>('#imageBluePerson')!;

  imageBluePerson.style.display = 'none';


  let imageDescription = document.querySelector<HTMLElement>('#imageDescription')!;

  imageDescription.style.display = 'block';

  let ButtonAndInputTwoDescribing = document.querySelector<HTMLElement>('#ButtonAndInputTwo')!;

  ButtonAndInputTwoDescribing.style.display = 'block';



  let DescriptionButtonImg = document.querySelector<HTMLElement>('#DescriptionButtonImg')!;

  DescriptionButtonImg.style.display = 'none';

  let UrlImageDescribe = document.querySelector<HTMLElement>('#UrlImage')!;

  UrlImageDescribe.style.display = 'block';


}

DeleteInputImgDescribe(){

  let ButtonAndInputTwoDescribing = document.querySelector<HTMLElement>('#ButtonAndInputTwo')!;

  ButtonAndInputTwoDescribing.style.display = 'none';

  let UrlImageDescribe = document.querySelector<HTMLElement>('#UrlImage')!;

  UrlImageDescribe.style.display = 'none';

  let DescriptionButtonImg = document.querySelector<HTMLElement>('#DescriptionButtonImg')!;

  DescriptionButtonImg.style.display = 'block';


}











    /*SKILLS*/


    /*Button Modal Skills*/
    
    ButtonModalSkills = true;
ButtonModalSkills2 = false;
ButtonModalSkills3 = false;
ButtonModalSkills4 = false;




/*Text Skills*/


    agreegePorcentaj(value : string) {
      
      this.myPortfolio.Resumen.SkillsThreeEdit = value + ':';
      
      
      let textSkillsOpen = document.querySelector<HTMLElement>('#TextSkillsOpen')!;

      textSkillsOpen.style.display = 'block';
     
      
};

agreegePorcentajSkills(value : string){
  this.myPortfolio.Resumen.SkillsPorcentajThreeEdit = '0.'
this.myPortfolio.Resumen.SkillsPorcentajThreeEdit += value; 
this.ButtonModalSkills = false;
this.ButtonModalSkills2 = true;



}






/*BarProgress*/



ButtonOcult = true;

BotonOpenSkills(){


 let barThreeEditBar = document.querySelector<HTMLElement>('#barProgressThreeEditbar')!;

 barThreeEditBar.style.display = 'block';

 this.ButtonOcult = false;

}

BotonOpenSkills2(){

  let barThreeEditBar2 = document.querySelector<HTMLElement>('#barProgressThreeEditbar2')!;

  barThreeEditBar2.style.display = 'block';

  this.ButtonOcult = false;

}

BotonOpenSkills3(){

  let barThreeEditBar3 = document.querySelector<HTMLElement>('#barProgressThreeEditbar3')!;

  barThreeEditBar3.style.display = 'block';

  this.ButtonOcult = false;


}
BotonOpenSkills4(){
  
  let barThreeEditBar4 = document.querySelector<HTMLElement>('#barProgressThreeEditbar4')!;

  barThreeEditBar4.style.display = 'block';

  this.ButtonOcult = false;

}





/*Text Skills 2*/


agreegePorcentajTwo(value : string) {
      
  this.myPortfolio.Resumen.SkillsFourEdit = value + ':';
  
  
  let textSkillsOpen = document.querySelector<HTMLElement>('#TextSkillsOpenTwo')!;

  textSkillsOpen.style.display = 'block';
 
  
};

agreegePorcentajSkillsTwo(value : string){
this.myPortfolio.Resumen.SkillsPorcentajFourEdit = ''
this.myPortfolio.Resumen.SkillsPorcentajFourEdit = value; 
this.ButtonModalSkills2 = false;
this.ButtonModalSkills3 = true;

}




/*BarProgress*/



ButtonOcultTwo = true;

BotonOpenSkillsTwo(){


let barThreeEditBar = document.querySelector<HTMLElement>('#barProgressThreeEditbarTwo')!;

barThreeEditBar.style.display = 'block';
this.ButtonOcultTwo = false;

}

BotonOpenSkills2Two(){

let barThreeEditBar2 = document.querySelector<HTMLElement>('#barProgressThreeEditbar2Two')!;

barThreeEditBar2.style.display = 'block';

this.ButtonOcultTwo = false;

}

BotonOpenSkills3Two(){

let barThreeEditBar3 = document.querySelector<HTMLElement>('#barProgressThreeEditbar3Two')!;

barThreeEditBar3.style.display = 'block';

this.ButtonOcultTwo = false;


}
BotonOpenSkills4Two(){

let barThreeEditBar4 = document.querySelector<HTMLElement>('#barProgressThreeEditbar4Two')!;

barThreeEditBar4.style.display = 'block';

this.ButtonOcultTwo = false;

}



/*Text Skills 3*/




agreegePorcentajThree(value : string) {
      
  this.myPortfolio.Resumen.SkillsFiveEdit = value + ':';
  
  
  let textSkillsOpen = document.querySelector<HTMLElement>('#TextSkillsOpenThree')!;

  textSkillsOpen.style.display = 'block';
 
  
};

agreegePorcentajSkillsThree(value : string){
this.myPortfolio.Resumen.SkillsPorcentajFiveEdit = ''
this.myPortfolio.Resumen.SkillsPorcentajFiveEdit += value; 
this.ButtonModalSkills3 = false;
this.ButtonModalSkills4 = true;


}






/*Bar progress 3*/



ButtonOcultThree = true;


BotonOpenSkillsThree(){
  this.ButtonOcultThree = false;

  let BarProgressThree = document.querySelector<HTMLElement>('#barProgressThreeEditbarThree')!;
  BarProgressThree.style.display = 'block';
}
BotonOpenSkills2Three(){
  this.ButtonOcultThree = false;

  let BarProgressThree2 = document.querySelector<HTMLElement>('#barProgressThreeEditbar2Three')!;
  BarProgressThree2.style.display = 'block';
}
BotonOpenSkills3Three(){
  this.ButtonOcultThree = false;

  let BarProgressThree3 = document.querySelector<HTMLElement>('#barProgressThreeEditbar3Three')!;
  BarProgressThree3.style.display = 'block';
}
BotonOpenSkills4Three(){
  this.ButtonOcultThree = false;

  let BarProgressThree4 = document.querySelector<HTMLElement>('#barProgressThreeEditbar4Three')!;
  BarProgressThree4.style.display = 'block';
}





/*Text Skills 4*/






agreegePorcentajFour(value : string) {
      
  this.myPortfolio.Resumen.SkillsSixEdit = value + ':';
  
  
  let textSkillsOpen = document.querySelector<HTMLElement>('#TextSkillsOpenFour')!;

  textSkillsOpen.style.display = 'block';
 
  
};

agreegePorcentajSkillsFour(value : string){
this.myPortfolio.Resumen.SkillsPorcentajSixEdit = ''
this.myPortfolio.Resumen.SkillsPorcentajSixEdit += value; 
this.ButtonModalSkills4 = false;


}





/*Bar progress 4*/



ButtonOcultFour = true;


BotonOpenSkillsFour(){
  this.ButtonOcultFour = false;

  let BarProgressFour = document.querySelector<HTMLElement>('#barProgressThreeEditbarFour')!;
  BarProgressFour.style.display = 'block';
}
BotonOpenSkills2Four(){
  this.ButtonOcultFour = false;

  let BarProgressThree2 = document.querySelector<HTMLElement>('#barProgressThreeEditbar2Four')!;
  BarProgressThree2.style.display = 'block';
}
BotonOpenSkills3Four(){
  this.ButtonOcultFour = false;

  let BarProgressFour3 = document.querySelector<HTMLElement>('#barProgressThreeEditbar3Four')!;
  BarProgressFour3.style.display = 'block';
}
BotonOpenSkills4Four(){
  this.ButtonOcultFour = false;

  let BarProgressFour4 = document.querySelector<HTMLElement>('#barProgressThreeEditbar4Four')!;
  BarProgressFour4.style.display = 'block';
}





/* Skills Eliminated*/

EliminatedSkill = true;

EliminatedSkillTwo = true;

EliminatedSkillThree = true;

EliminatedSkillFour = true;

EliminatedSkillFive = true;

EliminatedSkillSix = true;



EliminatedSkilMethod(){this.EliminatedSkill = false;}
EliminatedSkilMethodTwo(){this.EliminatedSkillTwo = false;}
EliminatedSkilMethodThree(){this.EliminatedSkillThree = false;}
EliminatedSkilMethodFour(){this.EliminatedSkillFour = false;}
EliminatedSkilMethodFive(){this.EliminatedSkillFive = false;}
EliminatedSkilMethodSix(){this.EliminatedSkillSix = false;}



openButonCross(){
  
  let crossBotton = document.querySelector<HTMLElement>('#botonCrossThree')!;
  
  crossBotton.style.display = 'block';
  
}
openButonCrossTwo(){
  
  let crossBottonTwo = document.querySelector<HTMLElement>('#botonCrossFour')!;
  
  crossBottonTwo.style.display = 'block';
  
}
openButonCrossThree(){
  
  let crossBottonThree = document.querySelector<HTMLElement>('#botonCrossFive')!;
  
  crossBottonThree.style.display = 'block';
  
}
openButonCrossFour(){
  
  let crossBottonFour = document.querySelector<HTMLElement>('#botonCrossSix')!;
  
  crossBottonFour.style.display = 'block';
  
}





  }


