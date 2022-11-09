const metros = parseInt(prompt('Ingrese la distancia en metros',''));

function viaje() {
    if(Number.isNaN(metros)){
            document.write('La distancia ingresada no es válida') 
        }else if (metros>0 && metros <= 1000) {
            document.write('Te recomiendo ir caminando')
        } else if(metros>1000 && metros <= 10000){
            document.write('Te recomiendo ir en bicicleta')
        }
        else if(metros>10000 && metros <= 30000){
            document.write('Te recomiendo ir en colectivo')
        }
        else if(metros>30000 && metros <= 100000){
            document.write('Te recomiendo ir en auto') 
        }
        else{
            document.write('Te recomiendo ir en avion')
        }
    }
    
viaje();
    