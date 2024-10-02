let display = document.getElementById('display');

function addValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function deleteChar(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch (error){
        display.value = 'Error';
    }
}

//Scientific Functions

function sin(x){
    return Math.sin(x*Math.PI/180);
}

function cos(x){
    return Math.cos(x*Math.PI/180);
}

function tan(x){
    return Math.tan(x*Math.PI/180);
}

function log(x){
    return Math.log(x);
}

function sqrt(x){
    return Math.sqrt(x);
}
