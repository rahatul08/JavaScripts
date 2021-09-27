    
let x = 0
let imgData;
function myFunction(){
    for(i=1; i<2; i++){
        x +=i;
        
    }
    document.getElementById('demo').innerHTML=x;

    switch(x ){
        case 0:
    imgData = 'photo2.jpg';
    break;
  case 1:
    imgData = 'photo3.jpg';
    break;
  case 2:
    imgData = "photo4.jpg";
    break;
  case 3:
    imgData = "photo5.jpg";
    break;
  case 4:
    imgData = "photo6.jpg";
    break;
  case 5:
    imgData = "photo7.jpg";
    break;
  case  6:
    imgData = "photo8.jpg";   


    case  7:
        imgData = "photo9.jpg";  
    case  8:
        imgData = "photo10.jpg";  
    case  9:
        imgData = "photo11.jpg";  
    case  10:
         imgData = "photo12.jpg";          
    }
  return  document.getElementById('image').src =imgData;
}


console.log(myFunction())