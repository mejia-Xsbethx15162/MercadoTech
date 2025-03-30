document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Chocolate con Leche", precio: "$2.99", img: "/img/chocolate_leche.png" },
        { nombre: "Gomitas de Frutas", precio: "$1.99", img: "/img/gomitas.png" },
        { nombre: "Caramelos de Menta", precio: "$1.49", img: "/img/menta.png" },
        { nombre: "Tableta de Chocolate Amargo", precio: "$3.99", img: "/img/chocolate_amargo.png" },
        { nombre: "Chocolates Rellenos", precio: "$4.50", img: "/img/chocolates_rellenos.png" },
        { nombre: "Mazapanes", precio: "$2.50", img: "/img/mazapan.png" },
        { nombre: "Paletas de Caramelo", precio: "$1.25", img: "/img/paletas.png" },
        { nombre: "Chicles de Frutas", precio: "$0.99", img: "/img/chicles.png" },
        { nombre: "Barras de Chocolate con Almendras", precio: "$3.75", img: "/img/chocolate_almendras.png" },
        { nombre: "Cajeta Tradicional", precio: "$4.99", img: "/img/cajeta.png" },
        { nombre: "Trufas de Chocolate", precio: "$5.50", img: "/img/trufas.png" },
        { nombre: "Galletas con Chispas de Chocolate", precio: "$3.25", img: "/img/galletas_chocolate.png" },
        { nombre: "Turrón de Almendra", precio: "$4.75", img: "/img/turron.png" },
        { nombre: "Bombones", precio: "$2.30", img: "/img/bombones.png" },
        { nombre: "Dulces de Tamarindo", precio: "$1.80", img: "/img/tamarindo.png" },
        { nombre: "Chocolates Blancos", precio: "$3.99", img: "/img/chocolate_blanco.png" },
        { nombre: "Barras Energéticas de Chocolate", precio: "$2.95", img: "/img/barra_energetica.png" },
        { nombre: "Caramelos de Frutas", precio: "$1.60", img: "/img/caramelos_frutas.png" },
        { nombre: "Coco Rallado con Chocolate", precio: "$3.40", img: "/img/coco_chocolate.png" }
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("dulce");
        div.innerHTML = `<img src="${producto.img}" alt="${producto.nombre}">
                         <div class="nombre">${producto.nombre}</div> 
                         <div class="precio">${producto.precio}</div>
                         <button class="agregar-carrito">Añadir al carrito</button>`;
        contenedor.appendChild(div);
    });
});

