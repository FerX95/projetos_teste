function somar(){

    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);

    var div = document.getElementById("resp")

    div.innerHTML = `${n1} + ${n2} = ${n1+n2}`;

}