const OPCION_SALIR = 0;
const OPCION_VOLVER = 5;
let totalDeProducto = 1000;
let ingresarNombre = true;

while (ingresarNombre) {
        let nombreUsuario = prompt("Ingrese su nombre");
        let apellidoUsuario = prompt ("Ingrese su apellido");

        if(nombreUsuario, apellidoUsuario == ""){
                alert("No ingresaste nombre o apellido")
                ingresarNombre = true;
        }
        else {
                alert("Bienvenido a BoostBid " + nombreUsuario + " " + apellidoUsuario)
                ingresarNombre = false;
        };
}

const listadoProductos = [

        {
                id:1,
                nombre:"TV Samsung",
                precio:144.999,
                categoria: "tecnologia"   
        },
        {
                id:2,
                nombre:"Aspiradora Robot",
                precio:153.899,
                categoria: "tecnologia"   
        },
        {
                id:3,
                nombre:"Cabina para uñas",
                precio:20.774,
                categoria: "belleza"   
        },
        {
                id:4,
                nombre:"Pistola de Agua",
                precio:10.799,
                categoria: "niños"  
        },
        {
                id:5,
                nombre:"Mochila tactica",
                precio:21.299,
                categoria:"aire libre"
        }
]



const carrito = []; 
const historial = [];

const verTecnologia = () => {
        let mensaje = 'Lista de producto: \n';
        listadoProductos.forEach(el =>{
                if(el.categoria === "tecnologia"){
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje));

        const productoSeleccionado = listadoProductos.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado) 
        alert("Agregado al carrito correctamente")
}

const verBelleza = () => {
        let mensaje = 'Lista de producto: \n';
        listadoProductos.forEach(el =>{
                if(el.categoria === "belleza"){
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje));

        const productoSeleccionado = listadoProductos.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado)
        alert("Agregado al carrito correctamente")
}

const verNiños = () => {
        let mensaje ='Lista de producto: \n';
        listadoProductos.forEach(el => {
                if(el.categoria === "niños") {
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje)); 

        const productoSeleccionado = listadoProductos.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado) 
        alert("Agregado al carrito correctamente")
}

const verAireLibre = () => {
        let mensaje ='Lista de producto: \n';
        listadoProductos.forEach(el => {
                if(el.categoria === "aire libre") {
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje));

        const productoSeleccionado = listadoProductos.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado) 
        alert("Agregado al carrito correctamente")
}

const mostrarDetalle = () => {
        carrito.forEach(el => 
                alert("Primer producto:" + el.nombre + ", precio: " + el.precio)
                )
}

const verProductos = () => {
let opcion ;
opcion = parseInt(prompt("elegi la categoria que desees, \n 1) Tecnologia \n 2) Belleza \n 3) Niños \n 4) Aire libre \n 5)Volver atras"));
while(opcion != OPCION_SALIR){
        switch(opcion){
        case 1: 
                verTecnologia();
                break;
        case 2: 
                verBelleza();
                break;
        case 3: 
                verNiños();
                break;
        case 4: 
                verAireLibre();
                break;
        case OPCION_VOLVER: 
                return;
        default:
                alert("Ingreso una opcion invalida.");
                break;
        }
        opcion = parseInt(prompt("elegi la categoria que desees, \n 1) Tecnologia \n 2) Belleza \n 3) Niños \n 4) Aire libre \n 5) Volver atras "));
}
}

const verCarrito = () => {
        let mensaje = 'Carrito: \n';
        const numeroCompra = Math.round(Math.random() * 10000000 + 100000)

        carrito.forEach(el =>{               
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                
        })
        const total = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0)
        mensaje += `TOTAL                    $${total}`;
        mensaje += "\n Desea realizar la compra ? (si/no)";
        const respuesta = prompt(mensaje);
        if(respuesta.toLowerCase() == "si"){
                historial.push({
                        numero: numeroCompra,
                        direccion: prompt("ingresa direccion")
                })
                alert("\n Felicitaciones tu compra fue realizada con exito \n N° " + numeroCompra + "\n guarda el numero para recibir el producto")
                carrito.splice();
        }
}


let opcion = parseInt(prompt("elige la operacion que deseas, \n 1)Ver Productos \n 2)Ver Carrito \n 3)Ver compras \n 0 Salir "))

while(opcion != OPCION_SALIR ){

switch(opcion){
        case 1: 
                verProductos();
                break;
        case 2: 
                verCarrito();
                break;
        case 3: 
                verCompras();
                break;
        default:
        alert("Ingreso una opcion invalida.");
        break;
}

opcion = parseInt(prompt("elige la operacion que deseas, \n 1)Ver Productos \n 2)Ver Carrito \n 0 Salir "));
}

alert("Gracias vuelva pronto.");