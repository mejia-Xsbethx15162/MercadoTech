document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Manzanas", precio: "$2.50/kg", img: "/img/manzana.png" },
        { nombre: "Plátanos", precio: "$1.80/kg", img: "/img/platano.png" },
        { nombre: "Naranjas", precio: "$2.20/kg", img: "/img/naranja.png" },
        { nombre: "Fresas", precio: "$4.00/kg", img: "/img/fresas.png" },
        { nombre: "Mangos", precio: "$3.50/kg", img: "/img/mango.png" },
        { nombre: "Peras", precio: "$3.00/kg", img: "/img/pera.png" },
        { nombre: "Lechuga", precio: "$1.50/unidad", img: "/img/lechuga.png" },
        { nombre: "Tomates", precio: "$2.80/kg", img: "/img/tomate.png" },
        { nombre: "Pepinos", precio: "$1.99/kg", img: "/img/pepino.png" },
        { nombre: "Zanahorias", precio: "$1.75/kg", img: "/img/zanahoria.png" },
        { nombre: "Cebollas", precio: "$2.00/kg", img: "/img/cebolla.png" },
        { nombre: "Pimientos", precio: "$2.50/kg", img: "/img/pimiento.png" },
        { nombre: "Brócoli", precio: "$3.20/kg", img: "/img/brocoli.png" },
        { nombre: "Espinacas", precio: "$1.99/paquete", img: "/img/espinaca.png" }
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("frutas-verduras");
        div.innerHTML = `<img src="${producto.img}" alt="${producto.nombre}">
                         <div class="nombre">${producto.nombre}</div> 
                         <div class="precio">${producto.precio}</div>
                         <button class="agregar-carrito">Añadir al carrito</button>`;
        contenedor.appendChild(div);
    });
});
