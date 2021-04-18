

$('#fondo').hide();
$('#right').hide();
$('.article').on('click', productoDesplegable);
function productoDesplegable(){
    obtenerDetalles(this.value);
    mostrarDetalles();
}
function crearDetalles(producto){
    let contenedor = document.getElementById("right");

}
function obtenerDetalles(id){
    var url = "../assets/pruebas/productos.json"
    var peticion = new XMLHttpRequest()
    peticion.onreadystatechange= function (){
        if(this.readyState==4 && this.status ==200){
            let productos=JSON.parse(this.response);
            //let UltimoIdPagina = localStorage.getItem("ultimoIdPagina");
            let producto=buscarProducto(productos,id);
            crearDetalles(producto)
        }
        tema();
    };
    peticion.open("GET", url, true);
    peticion.send();
}
function buscarProducto (){

}
function mostrarDetalles(){
    $('#fondo').toggle(0);
    $('#right').toggle(700);
    $('#fondo').on('click',()=>{
        $('#fondo').hide(0);
        $('#right').hide(500,borrarDetalles());
        
    });
}

function borrarDetalles(){
    let contenedor = document.getElementById("right");
    contenedor.innerHTML= ``;
}
/* tengo que poner el id de producto en alguna parte para poder comparar con el producto al que
le hago click. si le hago click al mismo producto solo se debe ejecutar un toggle pero si le 
hago click a un producto distinto, tengo que ejecutar un toggle, el cambio de los datos en el 
contenedor y otra vez toggle o lo mismo pero en vez de toggle puedo usar hide y show*/