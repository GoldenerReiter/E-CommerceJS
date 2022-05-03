"use strict"

function menu() {
    let option = Number(prompt('Inserte su opcion: 1) Consultar Productos; 2) Añadir productos al carrito; 3) Eliminar productos el carrito; 4) Consultar carrito; 5) Comprar productos; 6) Salir.'))
    switch (option) {
        case 1:
            prodAlerter(productos);
            menu();
            return;
        case 2:
            let producto = prodSelector();
            carrito.push(producto);
            console.log(carrito);
            menu();
            return;
        case 3:
            if (carrito.length == 0) {
                alert('Tu carrito esta vacio.');
                menu();
                return;
            } else if (carrito.length > 0) {
                let productob = prodSelector();
                carrito = carrito.filter(carrito => carrito !== productob);
                console.log(carrito);
                menu();
                return;
            } return;
        case 4:
            if (carrito.length == 0) {
                alert('Tu carrito esta vacio.');
                menu();
                return;
            } else if (carrito.length > 0) {
                prodAlerter(carrito);
                alert(`El valor de su carrito es: ${basketCounter()}`);
                menu();
                return;
            } return;
        case 5:
            if (dinero < basketCounter()) {
                alert('Usted no tiene suficiente dinero.')
            } else if (dinero >= basketCounter()) {
                alert('Efectuando compra');
                dinero = dinero - basketCounter();
                alert(`Dinero restante: ${dinero} $`);
                carrito = [];
                console.log(carrito);
                menu();
                return;
            } return;
        case 6:
            alert('Usted ha decidido salir.')
            return;
    } return;
};

function prodAlerter(arr) {
    alert('A continuación una serie de mensajes con los productos consultados:');
    for (const i of arr) {
        alert(`Producto numero ${i.id}: ${i.idName} al precio de ${i.precio}`);
    };
};

function prodSelector() {
    let userSelection = prompt('Seleccione por nombre el producto que desea');
    return productos.find(producto => producto.idName == userSelection);
};

function basketCounter() {
    let carritoValue = 0;
    for (const i of carrito) {
        carritoValue = carritoValue + i.precio;
    } return carritoValue;
};

let productos = [
    {
        id: 1,
        idName: 'casa',
        precio: 1000000,
    },
    {
        id: 2,
        idName: 'auto',
        precio: 10000,
    },
    {   
        id: 3,
        idName: 'ropa',
        precio: 150,
    }
];

let carrito = [];
let dinero = Number(prompt('Inserte la cantidad de dinero que tiene.'));

menu();