/* primer prueba para carrito de compras */
document.getElementById("vaciar").addEventListener("click",vaciar);
document.getElementById("mostrar").addEventListener("click",mostrarCarrito);

class bolsa {
    constructor (producto,cantidad,precio){
    this.producto = producto;
    this.cantidad = cantidad;
    this.precio = precio;
    }
}

var carro = localStorage.getItem("carro");
if(carro==undefined){
    inicializar();
}

function inicializar(){
    var vacio = [];
    vacio.push(new bolsa (0,0,0));
    vacio = JSON.stringify(vacio);
    var carrito = [vacio];
    localStorage.setItem("carro",carrito);
}

function vaciar(){
    inicializar();
}

function imprimirCarrito(){
    let carro = localStorage.getItem("carro");
    let almacenados = JSON.parse(carro);
    let objeto = new bolsa (0,0,0);
    var carrito = [objeto];
    let i=1;
    //creo una lista nueva con los elementos del carrito menos el ultimo que son todos los valores en 0
    while (almacenados[i].producto!=0){
        if(carrito[carrito.length-1].producto==0){
            carrito[carrito.length-1].producto=almacenados[i].producto;
            carrito[carrito.length-1].cantidad=almacenados[i].cantidad;
        }else{
        carrito.push(new bolsa(almacenados[i].producto,almacenados[i].cantidad,almacenados[i].precio));
        }
        i++;
    }
    i=0;
    //recorro la lista nueva mostrando en alerta los valores de la lista
    while (carrito[i]!=undefined){
        let contenedor = document.getElementsByTagName("section")[i];
        var hijo = document.createElement("div");
        /*hijo.innerHTML =`<button class="article" value=${this.id}>
                            <img src="${this.imagenes[0]}" />
                            <a class="producto">${this.nombre}</a>
                            <p>$ ${this.precio}</p>
                        </button>`;*/
        hijo.innerHTML = ``; //tengo que armar la forma de mostrar el carrito en pantalla
        //hay que traer del archivo de articulos.json y comparar para mostrar el carrito
        contenedor.appendChild(hijo);
        i++;
    }
}

function mostrarCarrito(){
    let carro = localStorage.getItem("carro");
    let almacenados = JSON.parse(carro);
    let objeto = new bolsa (0,0,0);
    var carrito = [objeto];
    let i=1;
    //creo una lista nueva con los elementos del carrito menos el ultimo que son todos los valores en 0
    while (almacenados[i].producto!=0){
        if(carrito[carrito.length-1].producto==0){
            carrito[carrito.length-1].producto=almacenados[i].producto;
            carrito[carrito.length-1].cantidad=almacenados[i].cantidad;
        }else{
        carrito.push(new bolsa(almacenados[i].producto,almacenados[i].cantidad,almacenados[i].precio));
        }
        i++;
    }
    i=0;
    //recorro la lista nueva mostrando en alerta los valores de la lista
    while (carrito[i]!=undefined){
        if(carrito[i].cantidad==1){
            alert("1 unidad de " + carrito[i].producto);
        }else{
        alert(carrito[i].cantidad + " unidades de " + carrito[i].producto);
        }
        i++;
    }
}