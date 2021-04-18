document.getElementById("probar").addEventListener("click",pruebas)
class bolsa {
    constructor (producto,cantidad,precio){
    this.producto = producto;
    this.cantidad = cantidad;
    this.precio = precio;
    }
}

class articulo{
    constructor(id,nombre,images,tipo,subtipo,precio,colores){
        this.id=id;
        this.nombre=nombre;
        this.imagenes=images;
        this.tipo=tipo;
        this.subtipo=subtipo;
        this.precio=precio;
        this.colores=colores;
    }
    article(contenedor){ //las imagenes ya se cargar como queria. ahora en el css hay que crear la galeria
        var hijo = document.createElement("div");
        hijo.innerHTML =`<button class="article" value=${this.id}>
                            <img src="${this.imagenes[0]}" />
                            <a class="producto">${this.nombre}</a>
                            <p>$ ${this.precio}</p>
                        </button>`;
        contenedor.appendChild(hijo);
    }
}

class product {
    constructor(id,nombre,precio,marca,altura,largo,ancho,peso,materiales,conexiones,consumo,otros,coloresarticulo,imagenes){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.marca=marca;
        this.altura=altura;
        this.largo=largo;
        this.ancho=ancho;
        this.peso=peso;
        this.materiales=materiales;
        this.conexiones=conexiones;
        this.consumo=consumo;
        this.otros=otros;
        this.colores=coloresarticulo;
        this.imagenes=imagenes;
    }
    img(contenedor){
        let array = this.imagenes;
        let i=0;
        while (array[i] != ""){
            var hijo = document.createElement("img");
            hijo.src =array[i];
            contenedor.appendChild(hijo);
            i++;
        }
    }
    color(contenedor){
        let array = this.colores;
        let i=0;
        while (array[i] != ""){
            var hijo = document.createElement("p");
            hijo.innerHTML =array[i];
            contenedor.appendChild(hijo);
            i++;
        }
    }
    material(contenedor){
        let array = this.materiales;
        let i=0;
        while (array[i] != ""){
            var hijo = document.createElement("p");
            hijo.innerHTML =array[i];
            contenedor.appendChild(hijo);
            i++;
        }
    }
    Detalles(contenedor,id){
        if(this.id == id){//agregar funcion de imagenes, colores y materiales
            contenedor.innerHTML=`<div id="imagenes">

                                </div>
                                <div id="general">
                                    
                                </div>
                                <div id="detalles">
                                    r
                                </div>`;
            contenedor=document.getElementById("imagenes");
            this.img(contenedor);
            contenedor=document.getElementById("general");
            contenedor.innerHTML=`  <div>
                                    <h2 id="nombre">${this.nombre}</h2>
                                    <p id="precios">$${this.precio}</p>
                                    </div>
                                    <div>
                                    <form id="cuotas" name="cuotas" action="" method="get" enctype="multipart/form-data">
                                        <p class="nombre">cuotas</p>
                                        <span class="material-icons">credit_card</span>
                                        <div class="contenido">
                                        <input class="boton" name="calcular" type="submit" value="Calcular Cuotas"/>
                                        </div>
                                    </form>
                                    
                                    </div>
                                    <div>
                                    <form id="envio" name="envio" action="" method="get" enctype="multipart/form-data">
                                        <p class="nombre">codigo postal</p>
                                        <span class="material-icons">local_shipping</span>
                                        <div class="contenido">
                                            <select id="desplegable" name="prov" >
                                                <option value="buenos aires">Buenos Aires</option>
                                                <option value="caba">Capital Federal</option>
                                                <option value="catamarca">Catamarca</option>
                                                <option value="chaco">Chaco</option>
                                                <option value="chubut">Chubut</option>
                                                <option value="cordoba">Cordoba</option>
                                                <option value="corrientes">Corrientes</option>
                                                <option value="entre rios">Entre Rios</option>
                                                <option value="formosa">Formosa</option>
                                                <option value="jujuy">Jujuy</option>
                                                <option value="pampa">La Pampa</option>
                                                <option value="rioja">La Rioja</option>
                                                <option value="mendoza">Mendoza</option>
                                                <option value="misiones">Misiones</option>
                                                <option value="neuquen">Neuquen</option>
                                                <option value="rio negro">Rio Negro</option>
                                                <option value="salta">Salta</option>
                                                <option value="san juan">San Juan</option>
                                                <option value="san luis">San Luis</option>
                                                <option value="santa cruz">Santa Cruz</option>
                                                <option value="santa fe">Santa fe</option>
                                                <option value="santiago">Santiago</option>
                                                <option value="tierra del fuego">Tierra Del Fuego</option>
                                                <option value="tucuman">Tucuman</option>
                                            </select>
                                        </div>
                                    </form>
                                    </div>
                                    <div>
                                    <form id="cantidad" name="cantidad" action="" method="get" enctype="multipart/form-data">
                                        <p class="nombre">cantidad</p>
                                        <span class="material-icons">add_shopping_cart</span>
                                        <div class="contenido">  
                                            <select id="desplegable" name="asunto" >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <input name="agregar" type="submit" value="sumar al carrito"/>
                                        </div>
                                    </form>
                                    </div>`;
            contenedor=document.getElementById("detalles");
            contenedor.innerHTML=`  <h3><hr>detalles</h3>
                                    <span class="material-icons">info</span>
                                    <p class="contenido"> tecnologia del producto </p>
                                    <h3><hr>Especificaciones</h3>
                                    <span class="material-icons">info</span>
                                    <div class="contenido">
                                    <table>
                                        <tr>
                                            <th>Caracteristicas generales</th>
                                        </tr>
                                        <tr>
                                            <td>Largo</td>
                                            <td> ${this.largo} Cm</td>
                                        </tr>
                                        <tr>
                                            <td>Ancho</td>
                                            <td> ${this.ancho} Cm</td>
                                        </tr>
                                        <tr>
                                            <td>Alto</td>
                                            <td> ${this.altura} Cm</td>
                                        </tr>
                                        <tr>
                                            <td>Colores</td>
                                            <td id="colores"></td>
                                        </tr>
                                        <tr>
                                            <td>Materiales</td>
                                            <td id="materiales"></td>
                                        </tr>
                                    </table>
                                    </div><hr>`;
            contenedor=document.getElementById("colores");
            this.color(contenedor);
            contenedor=document.getElementById("materiales");
            this.material(contenedor);
        }
    }
    calcularCuotas(){
        $("#cuotas").on("submit",()=>{return false;});
        document.cuotas.calcular.addEventListener("click",desplegar);
        let hijo = document.getElementById("ventanaCuotas");
        let cuotas;
        hijo.innerHTML=`<p>3 cuotas de $${cuotas=((parseFloat(this.precio)+parseFloat(this.precio*0.08))/3).toFixed(2)} -------> Total:$${parseFloat(cuotas)*3}</p><hr>
                        <p>6 cuotas de $${cuotas=((parseFloat(this.precio)+parseFloat(this.precio*0.13))/6).toFixed(2)} -------> Total:$${parseFloat(cuotas)*6}</p><hr>
                        <p>9 cuotas de $${cuotas=((parseFloat(this.precio)+parseFloat(this.precio*0.22))/9).toFixed(2)} -------> Total:$${parseFloat(cuotas)*9}</p><hr>
                        <p>12 cuotas de $${cuotas=((parseFloat(this.precio)+parseFloat(this.precio*0.35))/12).toFixed(2)} -------> Total:$${parseFloat(cuotas)*12}</p><hr>`;
    }
    
}


function envio(){
    $("#envio").on("submit",()=>{return false;});
    let barato=["buenos aires","caba","santa fe","cordoba","entre rios","pampa","santiago",""];
    let normal=["catamarca","chubut","rioja","mendoza","neuquen","san juan","san luis","santa cruz","rio negra","tucuman",""];
    let caro=["chaco","corrientes","formosa","jujuy","misiones","salta","tierra del fuego",""];
    let envios=[barato,normal,caro,""];
    let provincia = document.envio.prov;
    let i=0,c,flag=0,precio=[];
    while(envios[i]!="" && flag==0){
        precio=envios[i];
        c=0;
        while(precio[c] != ""){
            if(precio[c]==provincia.value){
                flag=1;
            }
            c++;
        }
        if(flag==0){
            i++;
        }
    }
    if(flag==1){
        CrearEnvio(i);
    }
}

function CrearEnvio(precio){
    let contenedor=document.envio.getElementsByClassName("contenido")[0];
    let hijo=document.getElementById("borrar");
    if(!hijo){}else{
        contenedor.removeChild(hijo);
    }
    switch(precio){
        case 0:
            hijo = document.createElement("p");
            hijo.setAttribute("id","borrar");
            hijo.innerHTML = `costo de envio $400`;
            contenedor.appendChild(hijo);
            break;
        case 1:
            hijo = document.createElement("p");
            hijo.setAttribute("id","borrar");
            hijo.innerHTML = `costo de envio $600`;
            contenedor.appendChild(hijo);
            break;
        case 2:
            hijo = document.createElement("p");
            hijo.setAttribute("id","borrar");
            hijo.innerHTML = `costo de envio $800`;
            contenedor.appendChild(hijo);
            break;
        default:
            alert("error");
            break;
    }
}

function desplegar(){
    $("#fondoCuotas").on("click",()=>{
        $('#fondoCuotas').hide(100);
        $('#ventanaCuotas').hide(500);
    });
    $("#fondoCuotas").toggle(0);
    $("#ventanaCuotas").toggle(700);
}

function prueba(e){ /*la variable e se crea a partir de lo que llama a la funcion. en el html hay 2 etiquetas <p>
    dentro del <div> con el id "probar" la variable e va a ser la etiqueta <p> a la que le haga click.
    si hago click entre las dos, voy a obtener el div, ya que estaria clickeando el contenedor de las dos <p>*/
    var url = "../assets/pruebas/articulos.json"
    var peticion = new XMLHttpRequest()
    peticion.onreadystatechange= function (){
        if(this.readyState==4 && this.status ==200){
            document.getElementsByTagName("section")[0].innerHTML = this.response +" "+ e.target.innerHTML;
            /*e.target.innerHTML va a ser lo que este dentro de la etiqueta a la que le hice click. si clickeo 
            el <div> voy a obtener todo tal cual este dentro de el. sin importar si hay botones u otra cosa. pero
            si en cambio clickeo un boton. solo obtendre el texto del boton*/
        }
    };
    peticion.open("GET", url, true);
    peticion.send();
} 

function pruebaswasd(){
    let contenedor = document.getElementsByTagName("section")[0];
    let hijo=undefined;
    let i;
    for(i=0;i<4;i++){
    hijo = document.createElement("div");/* tengo que crear un elemento nuevo cada vez que quiero agregar uno
    si pongo el create element fuera del bucle, solo me va a crear un elemento con el ultimo valor del contador
    en este caso*/
    hijo.innerHTML =    `<h4> casa </h4><br>
                        <h1> casota ${i} </h1>`;
    hijo.setAttribute("class","article");
    /* poniendo texto html entre `` que no son las comillas simples como estas '' puedo usar las variables fuera
    del texto poniendo un signo de dolar y entre llaves como se ve arriba para mostrarlas en el elemento que
    estoy creando */
    contenedor.appendChild(hijo);
    }
}

function pruebas(){
    let contenedor = document.getElementsByTagName("section")[0];
    contenedor.innerHTML=`<div class="filtros">
                            <h3>Filtros</h3>
                                <form name="filtros" id="filtros" action="" method="get" enctype="multipart/form-data">
                                    <select class="desplegable" name="color" style="display: inline; margin-right: 20px;">
                                        <option value="">-------</option>
                                        <option value="blanco">blanco</option>
                                        <option value="negro">negro</option>
                                        <option value="amarillo">amarillo</option>
                                        <option value="azul">azul</option>
                                        <option value="naranja">naranja</option>
                                        <option value="RGB">RGB</option>
                                        <option value="rojo">rojo</option>
                                        <option value="rosa">rosa</option>
                                        <option value="verde">verde</option>
                                        <option value="violeta">violeta</option>
                                        <option value="marron">marron</option>
                                    </select>
                                    <select class="desplegable" name="orden" style="display: inline; margin-left: 20px;">
                                        <option value="recomendados">recomendados</option>
                                        <option value="baratos">precio: menor a mayor</option>
                                        <option value="caros">precio: mayor a menor</option>
                                        <option value="a-z">orden alfabetico</option>
                                    </select>
                                    <p id="precio">precio desde: <input name="desde" class="numeros" type="number" placeholder="minimo" style="margin-right: 5px;"/> hasta:<input name="hasta" class="numeros" type="number" placeholder="maximo"/></p>
                                    <button name="aceptar" id="aceptar" value="aplicar">Aplicar</button>
                                </form>
                            </div>
                            <div class="listaArticulos"></div>
                            <div class="paginacion"></div>
                            <div id="fondo"></div>
                            <div id="right"></div>`;
    var hijo = document.createElement("div");
    hijo.id="fondoCuotas";
    contenedor.appendChild(hijo);
    hijo = document.createElement("div");
    hijo.id="ventanaCuotas";
    contenedor.appendChild(hijo);
    $("#fondoCuotas").hide(0);
    $("#ventanaCuotas").hide(0);
    $('#filtros').on("submit",()=>{return false;});
    $('#aceptar').on("click",apliFiltros)
    apliFiltros();
}
function productoDesplegable(){
    obtenerDetalles(this.value);
    mostrarDetalles();
}



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function crearDetalles(producto,id){
    let url = "../assets/pruebas/articulos.json";
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function (){
        if(this.readyState==4 && this.status ==200){
        let articulos=JSON.parse(this.response);
        let article=buscarProducto(articulos,id);
        let productito = new product (producto.id,producto.nombre,article.precio,producto.marca,producto.altura,producto.largo,producto.ancho,producto.peso,producto.materiales,producto.conexiones,producto.consumo,producto.otros,article.colores,article.imagenes);
        let contenedor = document.getElementById("right");
        productito.Detalles(contenedor,id);
        productito.calcularCuotas();
        $("#envio").on("submit",()=>{return false;});
        envio();
        document.envio.prov.addEventListener("mouseleave",envio);
        carrito();
    }
    };
    peticion.open("GET", url, false);
    peticion.send();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



function obtenerDetalles(id){
    var url = "../assets/pruebas/productos.json";
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange= function (){
        if(this.readyState==4 && this.status ==200){
            let productos=JSON.parse(this.response);
            let producto=buscarProducto(productos,id);
            crearDetalles(producto,id);
        }
        tema();
    };
    peticion.open("GET", url, false);
    peticion.send();
}
function buscarProducto (productos,id){
    var i=0;
    while(productos[i].id!=id){
        if(productos[i].id=="000"){
            return "Error";
        }
        i++;
    }
    return productos[i];
}
function mostrarDetalles(){
    $('#fondo').on('click',()=>{
        $('#fondo').hide(100);
        $('#right').hide(500);
        borrarDetalles();
    });
    $('#fondo').toggle(0);
    $('#right').toggle(700);
}
function borrarDetalles(){
    let contenedor = document.getElementById("right");
    contenedor.innerHTML= ``;
    contenedor = document.getElementById("ventanaCuotas");
    contenedor.innerHTML= ``;
    borrarCarrito();
}
/*buscar solucion para cuando sean mas de 12 articulos en el JSON
    localStorage.setItem("UltimoIdPagina",array[i].id);*/

function listaArticulos(articulos,desde){ //hay que pasarle el ultimo id de pagina en forma de string porque sino lo toma como un 10 en vez de 012
    let contenedor = document.getElementsByClassName("listaArticulos")[0];
    let array=[];
    let articulito;
    var idArticulos=articulos.map( articulos => articulos.id);
    idArticulos=idArticulos.indexOf(desde);
    var i=0;
    for(i;i>-1;i++){
        if(articulos[i+idArticulos].id == "000"){
            break;
        }
        articulito = new articulo(articulos[i+idArticulos].id,articulos[i+idArticulos].nombre,articulos[i+idArticulos].imagenes,articulos[i+idArticulos].tipo,articulos[i+idArticulos].subtipo,articulos[i+idArticulos].precio,articulos[i+idArticulos].colores)
        array.push(articulito);
        articulito.article(contenedor);
        if((i%11)==0&&i!=0){
            break;
        }
    }
    return array;
}

function paginacion (articulos,cantidad,desde){
    let contenedor = document.getElementsByClassName("paginacion")[0];
    contenedor.innerHTML=`<p>pagina:</p>`;
    cantidad--;//le borro uno porque en este valor se esta contando articulo final que no debe ser contado
    let c=desde;
    for(i=1;i<=Math.round((cantidad/12)+0.49);i++){
        c=c+12;
        if (c>(cantidad+desde)){
            c=cantidad+desde;
        }
        let id=articulos[c-1].id;
        if(articulos[c-1].id=="000"){
            id=articulos[c-2].id;
        }
        contenedor.innerHTML= contenedor.innerHTML+ `<button class="itemPagina" value="${id}">${i}</button>`
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//carrito

function carrito(){
    document.cantidad.agregar.addEventListener("click",agregarCarrito);
    $("#cantidad").on("submit",()=>{return false;});
}

function borrarCarrito(){

}

function agregarCarrito(){
    let producto = document.getElementById("nombre").innerHTML;
    let precio = document.getElementById("precios").innerHTML;
    precio = precio.slice(1);
    precio = parseFloat(precio);
    let cantidad = parseInt(document.cantidad.asunto.value);
    let carro = localStorage.getItem("carro");
    let espacio = new bolsa (producto,cantidad,precio);
    carro = JSON.parse(carro);
    if(carro==null){
        inicializar();
        carro = localStorage.getItem("carro");
        carro = JSON.parse(carro);
    }
    if(carro[carro.length-1].producto==0 && carro.length>2){
        carro[carro.length-1].producto=espacio.producto;
        carro[carro.length-1].cantidad=espacio.cantidad;
        carro[carro.length-1].precio=espacio.precio;
    }else{
    carro.push(espacio);
    }
    carro.push(new bolsa (0,0,0));
    carro = JSON.stringify(carro);
    localStorage.setItem("carro",carro);
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

//--------------------------------------------------------------------------------------------------------------------------------
//filtros
function apliFiltros(){
    var colores=document.filtros.color.value;
    var order=document.filtros.orden.value;
    var desde=document.filtros.desde.value;
    var hasta=document.filtros.hasta.value;
    var url = "../assets/pruebas/articulos.json"
    var peticion = new XMLHttpRequest()
    peticion.onreadystatechange= function (){
        if(this.readyState==4 && this.status ==200){
            $('#fondo').hide();
            $('#right').hide();
            let articulos=JSON.parse(this.response);
            articulos=color(colores,articulos);
            articulos=orden(order,articulos);
            articulos=precio(desde,hasta,articulos);
            document.getElementsByClassName("listaArticulos")[0].innerHTML=``;
            articulosConFiltro(articulos);
            paginacion(articulos,articulos.length,0);
            $('.listaArticulos').ready(()=>{$('.article').on('click', productoDesplegable);});
            tema();
        }
    };
    peticion.open("GET", url, true);
    peticion.send();
}
function articulosConFiltro (articulos){
    let contenedor = document.getElementsByClassName("listaArticulos")[0];
    let array=[];
    let articulito;
    var i=0;
    for(i;i>-1;i++){
        articulito = new articulo(articulos[i].id,articulos[i].nombre,articulos[i].imagenes,articulos[i].tipo,articulos[i].subtipo,articulos[i].precio,articulos[i].colores)
        array.push(articulito);
        articulito.article(contenedor);
        if(articulos[i+1]==undefined){
            break;
        }
        if((i%11)==0&&i!=0){
            break;
        }
    }
}
function color(color,articulos){
    let articulitos=[],i=0,a=0,c=0;
    while(articulos[i].id!="000" && i<articulos.length){
        for(c=0;c<articulos[i].colores.length;c++){
            if(articulos[i].colores[c]==color){
                articulitos[a]=articulos[i];
                a++;
            }
        }
        i++;
    }
    return articulitos;
}
function orden(valor,articulos){
    switch(valor){
        case "recomendados":
            articulos.sort(((a,b) => a.id - b.id));
            break;
        case "baratos":
            articulos.sort(((a, b) => a.precio - b.precio));
            break;
        case "caros":
            articulos.sort(((a, b) => b.precio - a.precio));
            break;
        case "a-z":
            articulos.sort((a, b) => {
                if(a.nombre > b.nombre) return 1;
                if(a.nombre < b.nombre) return -1;
                return 0;
            });
            break;
        default:
            break;
    }
    return articulos;
}
function precio(desde,hasta,articulos){
    let articulitos=[],i=0,a=0,c=0;
    if(desde>hasta && hasta!=""){
        alert("error: el precio minimo debe ser menor que el precio maximo");
        articulitos = articulos;
    }else{
        while(i<articulos.length){
            if(parseFloat(articulos[i].precio)>desde){
                articulitos[a]=articulos[i];
                a++;
            }
            i++;
        }
        if (hasta!=""){
            articulos= articulitos;
            articulitos= [];
            i=0;
            while(i<articulos.length){
                if(parseFloat(articulos[i].precio)<hasta){
                    articulitos[c]=articulos[i];
                    c++;
                }
                i++;
            }
        }
    }
    return articulitos;
}


