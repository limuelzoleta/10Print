let x = 0;
let y = 0;
let spacing = 40;


function setup(){
    createCanvas( windowWidth , windowHeight - 5  );
    background(0);
}

function draw(){  

    noStroke();
    fill(51);
    rect( x, y, spacing, spacing);

    if( random(1) < random(0.7) ){    
        stroke(51, 255, 255);
        line( x, y, x + spacing, y + spacing);
    } else {  
        stroke(255, 255, 51);
        line( x, y + spacing, x + spacing, y);
    }

    x = x + spacing;

    if(x > width){
        x = 0;
        y += spacing;    
    }

    if( y >= height ){
        y = 0;
    }
   
}

