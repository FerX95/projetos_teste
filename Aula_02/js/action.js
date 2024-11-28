function gera_tabuada(){

    var numero = parseInt(document.getElementById("numero").value);
    var text = "";
    var div = document.getElementById("resp");

    for(var x=1; x<= 10; x++){
        var mult = numero * x;
        text = "<span>"+numero+" x "+x+" = "+mult+"</span>";    
        div.innerHTML += text;
    }

}