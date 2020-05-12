

function mensaje(){

    var x = document.getElementById("numero1").value;
    var y = document.getElementById("numero2").value;
    var op = document.getElementById("operacion").value;
    
    switch (op) {
        case '1':document.getElementById("resultado").value=(parseInt(x)+parseInt(y));
            
            break;
    
        default:
            break;
    }


}