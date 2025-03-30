document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Arroz Blanco", precio: "$2.50", img: "/img/arroz.png" },
        { nombre: "Frijoles Negros", precio: "$3.00", img: "/img/frijoles.png" },
        { nombre: "Aceite Vegetal", precio: "$4.99", img: "/img/aceite.png" },
        { nombre: "Azúcar Blanca", precio: "$2.75", img: "/img/azucar.png" },
        { nombre: "Harina de Trigo", precio: "$1.99", img: "/img/harina.png" },
        { nombre: "Sal de Mesa", precio: "$1.20", img: "/img/sal.png" },
        { nombre: "Pasta Espagueti", precio: "$2.25", img: "/img/pasta.png" },
        { nombre: "Lentejas", precio: "$2.80", img: "/img/lentejas.png" },
        { nombre: "Cereal de Maíz", precio: "$3.50", img: "/img/cereal.png" },
        { nombre: "Café Molido", precio: "$5.99", img: "/img/cafe.png" }
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("despensa");
        div.innerHTML = `<img src="${producto.img}" alt="${producto.nombre}">
                         <div class="nombre">${producto.nombre}</div> 
                         <div class="precio">${producto.precio}</div>
                         <button class="agregar-carrito">Añadir al carrito</button>`;
        contenedor.appendChild(div);
    });
});
