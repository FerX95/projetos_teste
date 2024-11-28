function soma(){

    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var div = document.getElementById("resp");

    var resp = n1+n2;

    // Formatando uma string 

    // Método 1
    // div.innerHTML = "<p>"+n1+" + "+n2+" = "+resp+"</p>";
    
    // Método 2
    div.innerHTML = `<p> ${n1} + ${n2} = ${resp} </p>`;

}