class compat {
    constructor (){
        //generar objeto con todos los datos y guardarlo en session storage en caso de que
        //correr todo el algoritmo en cada input sea muy lento.
    }
    conclusion (){ //generar html para #conclusion

    }
}
class mother {
    constructor (gens,size,nombre,video,ram,sata,m2,pciex,pci,rgb){
        this.gens=gens;
        this.size=size;
        this.nombre=nombre;
        this.video=video;
        this.ram=ram;
        this.sata=sata;
        this.m2=m2;
        this.pciex=pciex;
        this.pci=pci;
        this.rgb=rgb;
    }
}
class pcie{
    constructor(cantidad,lineas){
        this.cantidad=cantidad;
        this.lineas=lineas;
    }
}
class micro{
    constructor(nombre,gen,apu){
        this.nombre=nombre;
        this.gen=gen;
        this.apu=apu;
    }
}
class ram{
    constructor(modulos,tam){
        this.modulos=modulos;
        this.tam=tam;
    }
}
class placaVideo{
    constructor(flag,nombre,largoAprox){
        this.flag=flag;
        this.nombre=nombre;
        this.largoAprox=largoAprox;
    }
}
//poner efecto de profundidad en css a los input y/o los divs
nuevo();


function nuevo(){
$("#mother").hide(100);
$("#cpu").hide(100);
$("#ram").hide(100);
$("#gpu").hide(100);
$("#discos").hide(100);
$("#refri").hide(100);
$("#gabinete").hide(100);
document.compatibilidades.addEventListener("input",marca);
document.compatibilidades.addEventListener("sumit",()=>{return false;})
}
function marca(){
    let placa
    switch(document.compatibilidades.cpu.value){
        case "intel":
            $("#mother").show(500);
            placa=placaMadre(document.compatibilidades.cpu.value.toLowerCase());
            if(placa!=undefined){
                $("#cpu").show(300);
                $("#ram").show(300);
                $("#gpu").show(300);
                $("#discos").show(300);
                cpu=procesador(document.compatibilidades.cpu.value.toLowerCase());
                rams=new ram(document.compatibilidades.modulosRam.value,document.compatibilidades.ram.value);
                gpu=grafica();
            }else{
                $("#cpu").hide(300);
                $("#ram").hide(300);
                $("#gpu").hide(300);
                $("#discos").hide(300);
            }
            break;
        case "amd":
            $("#mother").show(500);
            placa=placaMadre(document.compatibilidades.cpu.value.toLowerCase());
            if(placa!=undefined){
                $("#cpu").show(300);
                $("#ram").show(300);
                $("#gpu").show(300);
                $("#discos").show(300);
                cpu=procesador(document.compatibilidades.cpu.value.toLowerCase());
                rams=new ram(document.compatibilidades.modulosRam.value,document.compatibilidades.ram.value);
                gpu=grafica();
            }else{
                $("#cpu").hide(300);
                $("#ram").hide(300);
                $("#gpu").hide(300);
                $("#discos").hide(300);
            }
            break;
        default:
            $("#mother").hide(500);
            break;
    }
}
function placaMadre(cpu){
    let gens;
    if(cpu=="intel"){
        gens=motherIntel();
    }else{
        gens=motherAMD();
    }
    let size=document.compatibilidades.tamMother.value;
    let nombre=document.compatibilidades.nombreMother.value.toLowerCase();
    let video=document.compatibilidades.video.value;
    let ram=document.compatibilidades.ram.value;
    let sata=document.compatibilidades.sata.value;
    let m2=document.compatibilidades.m2.value;
    let pciex=[];
    let express;
    if(document.compatibilidades.pcie1.value !="" && document.compatibilidades.lineas1.value !=""){
        express= new pcie (document.compatibilidades.pcie1.value, document.compatibilidades.lineas1.value);
        pciex.push(express);
    }
    if(document.compatibilidades.pcie2.value != "" && document.compatibilidades.lineas2.value !=""){
        express= new pcie (document.compatibilidades.pcie2.value, document.compatibilidades.lineas2.value);
        pciex.push(express);
    }
    if(document.compatibilidades.pcie3.value != "" && document.compatibilidades.lineas3.value !=""){
        express= new pcie (document.compatibilidades.pcie3.value, document.compatibilidades.lineas3.value);
        pciex.push(express);
    }
    if(document.compatibilidades.pcie4.value != "" && document.compatibilidades.lineas4.value !=""){
        express= new pcie (document.compatibilidades.pcie4.value, document.compatibilidades.lineas4.value);
        pciex.push(express);
    }
    let pci=document.compatibilidades.pci.value;
    let rgb=document.compatibilidades.rgb.value;
    if(gens!="" && size!="" && nombre!="" && video!="" && ram!="" && sata!="" && m2!="" && pciex!="" && pci!="" && rgb!=""){
        let placa = new mother(gens,size,nombre,video,ram,sata,m2,pciex,pci,rgb);
        return placa;
    }
}
//-----------------------------------------------------------------------
function motherIntel(){
    let chipset = document.compatibilidades.chipset.value.toLowerCase();
    chipset = chipset.slice(1,2);
    let gensCHIP=[];
    switch (chipset){
        case "5":
            gensCHIP.push(11);
            break;
        case "4":
            gensCHIP.push(10);
            break;
        case "3":
            gensCHIP.push(8,9);
            break;
        case "2":
            gensCHIP.push(6,7);
            break;
        default:
            gensCHIP.push("error");
            break;
    }
    let socket = document.compatibilidades.socket.value.toLowerCase();
    socket=socket.slice(3);
    let gensSOC = [];
    switch (socket){
        case "1151":
            gensSOC.push(6,7,8,9);
            break;
        case "1200":
            gensSOC.push(10,11);
            break;
        default:
            break;
    }
    let gens=[];
    if (gensCHIP.length>=1 && gensSOC.length>=1){
        let c=0;
        for(let i=0;i<gensSOC.length;i++){
            for(c=0;c<gensCHIP.length;c++){
                if (gensSOC[i]==gensCHIP[c]){
                    gens.push(gensCHIP[c]);
                }
            }
        }
    }
    if(gens.length<1){
        return "";
    }else{
        return gens;
    }
}
function motherAMD(){
    let chipset = document.compatibilidades.chipset.value.toLowerCase();
    let gensCHIP=[];
    if(chipset.slice(0,1)=="a" || chipset.slice(0,1)=="b" || chipset.slice(0,1)=="x"){
        if (chipset.slice(2)== "8" || chipset.slice(3)== "x" || chipset.slice(3)== "h"){
            gensCHIP.push("fm2+");
        }else if(chipset.slice(2)=="20" || chipset.slice(2)=="50" || chipset.slice(2)=="70"){
            chipset = chipset.slice(1,2);
            switch (chipset){
                case "5":
                    gensCHIP.push("ryzen");
                    break;
                case "4":
                    gensCHIP.push("ryzen","a");
                    break;
                case "3":
                    gensCHIP.push("ryzen","a","x4");
                    break;
                default:
                    gensCHIP.push("error");
                    break;
            }
        }
    }else if(chipset.length>4){
        chipset = chipset.slice(0,1);
        switch (chipset){
            case "9":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            case "8":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            case "7":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            default:
                gensCHIP.push("error");
                break;
        }
    }else if(chipset.length<=4 && (chipset.slice(0,1) == "9" || chipset.slice(0,1) == "8" || chipset.slice(0,1) == "7")){
        chipset = chipset.slice(0,1);
        let gensCHIP=[];
        switch (chipset){
            case "9":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            case "8":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            case "7":
                gensCHIP.push();
                break;
            default:
                gensCHIP.push("error");
                break;
        }
    }
    let socket = document.compatibilidades.socket.value.toLowerCase();
    let gensSOC = [];
    switch(socket){
        case "am4":
            gensSOC.push("ryzen","a");
            break;
        case "am3+":
            gensSOC.push("athlon ii","phenom ii","fx");
            break;
        case "am3":
            gensSOC.push("athlon ii","phenom ii","fx","sempron");
            break;
        case "fm2+":
            gensSOC.push("fm2+");
            break;
        default:
            break;
    }
    let gens=[];
    if (gensCHIP.length>=1 && gensSOC.length>=1){
        let c=0;
        for(let i=0;i<gensSOC.length;i++){
            for(c=0;c<gensCHIP.length;c++){
                if (gensSOC[i]==gensCHIP[c]){
                    gens.push(gensCHIP[c]);
                }
            }
        }
    }
    if(gens.length<1){
        return "";
    }else{
        return gens;
    }
}
//-----------------------------------------------------------------------
function procesador(cpu){
    let nombre = document.compatibilidades.nombreCpu.value.toLowerCase();
    let gen="";
    if(cpu=="intel"){
        gen=cpuIntel(nombre);
    }else{
        gen=cpuAMD(nombre);
    }
    let apu = document.compatibilidades.apu.value;
    if(gen!=""&&nombre!=""&&apu!=""){
        let cpu = new micro(nombre,gen,apu);
        return cpu;
    }
}
//-----------------------------------------------------------------------
function cpuIntel(nombre){
    let gen=[];
    switch(nombre.slice(0,1)){
        case "i":
            //i9 a partir de 8va gen y en 11va gen no esta todavia
            if(nombre.slice(0,2)== "i3" || nombre.slice(0,2)== "i5" || nombre.slice(0,2)== "i7"){
                nombre = nombre.slice(2);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0" || nombre.slice(3,-2)=="0"){
                    gen.push(nombre.slice(0,1));
                }
            }else if(nombre.slice(0,2)== "i9"){
                nombre = nombre.slice(2);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)=="8" || nombre.slice(0,1)=="9" ||nombre.slice(0,2)=="10"){
                    if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"){
                        gen.push(nombre.slice(0,1));
                    }
                }
            }
            break;
        case "c":
            if(nombre.slice(0,7)=="celeron"){
                nombre=nombre.slice(7);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(2);
                }else if(nombre.slice(0,1)=="g"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0" || nombre.slice(3,-2)=="0"){
                    switch(nombre.slice(0,1)){
                        case "3":
                            gen.push(6,7);
                            break;
                        case "4":
                            gen.push(8,9);
                            break;
                        case "5":
                            gen.push(10);
                            break;
                        default:
                            break;
                    }
                }
            }else if(nombre.slice(0,4)=="core"){
                //repetir lo de i3,i5,i7,i9
                nombre=nombre.slice(4);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,2)== "i3" || nombre.slice(0,2)== "i5" || nombre.slice(0,2)== "i7"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0" || nombre.slice(3,-2)=="0"){
                        gen.push(nombre.slice(0,1));
                    }
                }else if(nombre.slice(0,2)== "i9"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,1)=="8" || nombre.slice(0,1)=="9" ||nombre.slice(0,2)=="10"){
                        if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0" || nombre.slice(3,-2)=="0"){
                            gen.push(nombre.slice(0,1));
                        }
                    }
                }
            }
            break;
        case "p":
            if(nombre.slice(0,7)=="pentium"){
                nombre=nombre.slice(7);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(2);
                }else if(nombre.slice(0,1)=="g"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"  || nombre.slice(3,-2)=="0" || nombre.slice(3)=="5" || nombre.slice(3,-1)=="5" || nombre.slice(3,-2)=="5"){
                    switch(nombre.slice(0,1)){
                        case "4":
                            gen.push(6,7);
                            break;
                        case "5":
                            gen.push(8,9);
                            break;
                        case "6":
                            gen.push(10);
                            break;
                        default:
                            break;
                    }
                }
            }
            break;
        default:
            break;
    }
    if(gen.length<1){
        return "";
    }else{
        return gen;
    }
}
function cpuAMD(nombre){
    let gen=[];
    switch(nombre.slice(0,1)){
        case "f":
            //i9 a partir de 8va gen y en 11va gen no esta todavia
            if(nombre.slice(0,2)== "fx"){
                nombre = nombre.slice(2);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)=="4" || nombre.slice(0,1)=="6" || nombre.slice(0,1)=="8" || nombre.slice(0,1)=="9"){
                    nombre=nombre.slice(1);
                    if(nombre.slice(2)=="0" || nombre.slice(2,-1)=="0"){
                        gen.push("fx");
                    }
                }
            }
            break;
        case "a":
            if(nombre.slice(0,2)=="a6"||nombre.slice(0,2)=="a8"||nombre.slice(0,3)=="a10"){
                nombre=nombre.slice(2);
                if(nombre.slice(0,1)=="0"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"){
                    switch(nombre.slice(0,1)){
                        case "7":
                            gen.push("fm2+");
                            break;
                        case "9":
                            gen.push("a");
                            break;
                        default:
                            break;
                    }
                }
            }else if(nombre.slice(0,6)=="athlon"){
                nombre=nombre.slice(6);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,2)== "ii" || nombre.slice(0,2)== "2 " || nombre.slice(0,2)== "2-"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,2)=="x2" || nombre.slice(0,2)=="x3" || nombre.slice(0,2)=="x4"){
                        nombre=nombre.slice(2);
                        if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                            nombre=nombre.slice(1);
                        }
                    }
                    if(nombre.slice(2)=="0" || nombre.slice(2,-1)=="0"  || nombre.slice(2,-2)=="0" || nombre.slice(2)=="5" || nombre.slice(2,-1)=="5" || nombre.slice(2,-2)=="5"){
                        gen.push("athlon ii");
                    }
                }else if(nombre.slice(0,2)=="x4"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,1)=="9"){
                        if(nombre.slice(2)=="0"){
                            gen.push("x4");
                        }
                    }
                }
            }
            break;
        case "p":
            if(nombre.slice(0,6)=="phenom"){
                nombre=nombre.slice(6);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,2)== "ii" || nombre.slice(0,2)== "2 " || nombre.slice(0,2)== "2-"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,2)=="x2" || nombre.slice(0,2)=="x3" || nombre.slice(0,2)=="x4"){
                        nombre=nombre.slice(2);
                        if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                            nombre=nombre.slice(1);
                        }
                        if(nombre.slice(2)=="0" || nombre.slice(2,-1)=="0"|| nombre.slice(2)=="5" || nombre.slice(2,-1)=="5"){
                            gen.push("phenom ii");
                        }
                    }
                    if(nombre.slice(0,2)=="x6"){
                        nombre=nombre.slice(2);
                        if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                            nombre=nombre.slice(1);
                        }
                        if(nombre.slice(0,2)=="10" || nombre.slice(0,2)=="11"){
                            if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"|| nombre.slice(3)=="5" || nombre.slice(3,-1)=="5"){
                                gen.push("phenom ii");
                            }
                        }
                    }
                }
            }
            break;
        case "s":
            if(nombre.slice(0,7)=="sempron"){
                nombre=nombre.slice(7);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)=="1"){
                    if(nombre.slice(2)=="0" || nombre.slice(2,-1)=="0"|| nombre.slice(2)=="5" || nombre.slice(2,-1)=="5"){
                        gen.push("sempron");
                    }
                }
            }
        case "r":
            if(nombre.slice(0,5)=="ryzen"){
                nombre=nombre.slice(5);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)=="3" || nombre.slice(0,1)=="5" || nombre.slice(0,1)=="7" || nombre.slice(0,1)=="9"){
                    nombre=nombre.slice(1);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,3)=="pro"){
                        nombre=nombre.slice(3);
                        if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                            nombre=nombre.slice(1);
                        }
                    }
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"|| nombre.slice(3,-2)=="0"){
                        gen.push("ryzen");
                    }
                }
            }
            break;
        default:
            break;
    }
    if(gen.length<1){
        return "";
    }else{
        return gen;
    }
}
//-----------------------------------------------------------------------
function grafica(){
    let flag=document.compatibilidades.gpu.value;
    let largoAprox=document.compatibilidades.fans.value;
    let nombre=document.compatibilidades.nombreGpu.value.toLowerCase();
    if(nombre.slice(0,3)!="amd"&&nombre.slice(0,6)!="radeon"&&nombre.slice(0,6)!="nvidia"&&nombre.slice(0,7)!="geforce"&&nombre.slice(0,8)!="ge force"&&nombre.slice(0,2)!="rx"&&nombre.slice(0,2)!="hd"&&nombre.slice(0,3)!="gtx"&&nombre.slice(0,3)!="rtx"){
        nombre="";
    }
    if(flag!=""&&nombre!=""&&largoAprox!=""){
        let gpu = new placaVideo(flag,nombre,largoAprox);
        alert(gpu);
        return gpu;
    }
}