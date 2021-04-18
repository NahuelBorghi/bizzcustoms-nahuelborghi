const primario= "#414E89", secundario= "#4FAEE1", oscuro= "#212121", secundarioAlpha = "#4fAEE199", primarioAlpha = "#414E89BB";

$("#search").on("submit",busqueda);
tema();

function tema(){
    var tag=localStorage.getItem('tag');/*1=claro 0=oscuro */
    
    if (tag==1){
        temaClaro();
    }else if(tag==0){
        temaOscuro();
    }else{
        temaClaro();
    }
}

function temaOscuro(){
    localStorage.setItem('tag',0);
    let tag = localStorage.getItem('tag');
    document.getElementById("tema").innerHTML = "Tema Claro";
    document.getElementById("tema").removeEventListener("click", temaOscuro);
    document.getElementById("tema").addEventListener("click",temaClaro);
    document.getElementById("tema").style.backgroundColor = secundario; 
    document.getElementById("tema").style.borderColor = secundario;
    document.getElementById("tema").style.boxShadow = "0 0 10px" + secundario;
    document.body.style.backgroundColor = oscuro;
    document.body.style.color = "white";
    let estilo = document.getElementsByTagName("nav")[0];
    estilo.style.backgroundColor = secundario;
    estilo = document.getElementsByTagName("footer")[0];
    estilo.style.backgroundColor = secundario;
    estilo.style.color = "black";
    estilo = document.getElementById("buscar");
    estilo.style.borderColor = primario;
    estilo.style.boxShadow = "0 0 10px" + primario;
    estilo = document.getElementsByClassName("carrito")[0];
    estilo.style.backgroundColor = secundario;
    estilo.style.borderColor = secundario;
    estilo.style.boxShadow = "0 0 10px" + secundario;
    active (tag);
    itemPagina(tag);
    aside(tag);
    article(tag);
    filtros (tag);
    contacto(tag);
}

function temaClaro(){
    localStorage.setItem('tag',1);
    let tag = localStorage.getItem('tag');
    document.getElementById("tema").innerHTML = "Tema Oscuro";
    document.getElementById("tema").removeEventListener("click", temaClaro);
    document.getElementById("tema").addEventListener("click",temaOscuro);
    document.getElementById("tema").style.backgroundColor = primario;
    document.getElementById("tema").style.borderColor = primario;
    document.getElementById("tema").style.boxShadow = "0 0 10px" + primario ;
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    let estilo = document.getElementsByTagName("nav")[0];
    estilo.style.backgroundColor = primario;
    estilo = document.getElementsByTagName("footer")[0];
    estilo.style.backgroundColor = primario;
    estilo.style.color = "white";
    estilo = document.getElementById("buscar");
    estilo.style.borderColor = secundario;
    estilo.style.boxShadow = "0 0 10px" + secundario;
    estilo = document.getElementsByClassName("carrito")[0];
    estilo.style.backgroundColor = primario;
    estilo.style.borderColor = primario;
    estilo.style.boxShadow = "0 0 10px" + primario;
    active (tag);
    itemPagina (tag);
    aside (tag);
    article (tag);
    filtros (tag);
    contacto(tag);
}

// 0= claro 1=oscuro

function aside (tag) {
    let estilo;
    for (var i = 0; i < 25; i++){
        estilo = document.getElementsByClassName("asideLeft")[i];
        if (estilo == undefined){
            break;
        }
        if (tag == 0){
            estilo.style.color = "white";
            estilo.style.borderColor = secundario;
            document.getElementById("tipos").style.color = secundario;
        }else if (tag == 1){
            estilo.style.color = "black";
            estilo.style.borderColor = primario;
            document.getElementById("tipos").style.color = primario;
        }
    }
}

function active (tag) {
    let estilo;
    for (var i = 0; i < 25; i++){
        estilo = document.getElementsByClassName("active")[i];
        if (estilo == undefined){
            break;
        }
        if (tag == 0){
            estilo.style.backgroundColor = primarioAlpha;
    estilo.style.boxShadow = "0 0 10px" + primario;
        }else if (tag == 1){
            estilo.style.backgroundColor = secundarioAlpha;
            estilo.style.boxShadow = "0 0 10px" + secundario;
        }
    }
}

function filtros (tag) {
    let estilo;
    for (var i = 0; i < 25; i++){
        estilo = document.getElementsByClassName("filtros")[i];
        if (estilo == undefined){
            break;
        }
        if (tag == 0){
            estilo.style.color = secundario;
        }else if (tag == 1){
            estilo.style.color = primario;
        }
    }
}

function contacto (tag) {
    let estilo;
    for (var i = 0; i < 25; i++){
        estilo = document.getElementsByClassName("contacto")[i];
        if (estilo == undefined){
            break;
        }
        if (tag == 0){
            estilo.style.color = secundario;
            estilo = document.getElementsByClassName("redes")[i];
            estilo.style.borderColor = secundario;
            estilo.style.boxShadow = "0 0 10px" + secundario;
            estilo = document.getElementsByClassName("mail")[i];
            estilo.style.borderColor = secundario;
            estilo.style.boxShadow = "0 0 10px" + secundario;
        }else if (tag == 1){
            estilo.style.color = primario;
            estilo = document.getElementsByClassName("redes")[i];
            estilo.style.borderColor = primario;
            estilo.style.boxShadow = "0 0 10px" + primario;
            estilo = document.getElementsByClassName("mail")[i];
            estilo.style.borderColor = primario;
            estilo.style.boxShadow = "0 0 10px" + primario;
        }
    }
}

function itemPagina (tag) {
    let estilo;
    for (var i = 0; i < 25; i++){
        estilo = document.getElementsByClassName("itemPagina")[i];
        if (estilo == undefined){
            break;
        }
        if (tag == 0){
            estilo.style.boxShadow = "0 0.2rem 0.5rem var(--primario)";
            estilo.style.borderColor = secundario;
            estilo.style.boxShadow = "0 0 10px" + secundario;
        }else if (tag == 1){
            estilo.style.boxShadow = "0 0.2rem 0.5rem var(--secundario)";
            estilo.style.borderColor = primario;
            estilo.style.boxShadow = "0 0 10px" + primario;
        }
    }
}

function article (tag){
    let estilo;
    for (var i = 0; i < 25; i++){
        estilo = document.getElementsByClassName("article")[i];
        if (estilo == undefined){
            break;
        }
        if (tag == 0){
            estilo.style.boxShadow = "0 0.2rem 0.5rem var(--primario)";
            estilo.style.borderColor = secundario;
            estilo.style.boxShadow = "0 0 10px" + secundario;
        }else if (tag == 1){
            estilo.style.boxShadow = "0 0.2rem 0.5rem var(--secundario)";
            estilo.style.borderColor = primario;
            estilo.style.boxShadow = "0 0 10px" + primario;
        }
    }
}
function busqueda(){
    alert('buscaste "'+$('#buscar').val()+'"');
    return false;}
