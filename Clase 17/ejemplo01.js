const items = document.getElementsByClassName('item');

function cambiarVisibilidad(){
    const item = items[2];
    if(item.style.visibility == 0){
        item.style.visibility = 'hidden' 
    }
    else{
        item.style.visibility = ''
    }
}

setInterval(cambiarVisibilidad,500) //500 es medio segundo