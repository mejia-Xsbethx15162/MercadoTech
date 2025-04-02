document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Arroz.", precio: 1.80, img: "/img/arroz.png" },
        { nombre: "Frijoles.", precio: 2.20, img: "/img/frijoles.png" },
        { nombre: "Lentejas.", precio: 1.90, img: "/img/lentejas.png" },
        { nombre: "Avena.", precio: 3.00, img: "/img/avena.png" },
        { nombre: "Harina de trigo", precio: 2.50, img: "/img/harina.png" },
        { nombre: "Maíz", precio: 1.60, img: "/img/maiz.png" },
        { nombre: "Quinua", precio: 5.00, img: "/img/quinua.png" },
        { nombre: "Cebada", precio: 2.30, img: "/img/cebada.png" },
        { nombre: "Chía", precio: 6.50, img: "/img/chia.png" },
        { nombre: "Centeno", precio: 2.80, img: "/img/centeno.png" },
        { nombre: "Trigo", precio: 1.75, img: "/img/trigo.png" },
        { nombre: "Soja", precio: 2.60, img: "/img/soja.png" },
        { nombre: "Sorgo", precio: 3.10, img: "/img/sorgo.png" },
        { nombre: "Alpiste", precio: 4.00, img: "/img/alpiste.png" },
        { nombre: "Mijo", precio: 3.50, img: "/img/mijo.png" }
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("granos-cereales");
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="nombre">${producto.nombre}</div> 
            <div class="precio">$${producto.precio.toFixed(2)}</div>
            <button class="agregar-carrito">Añadir al carrito</button>
        `;
        contenedor.appendChild(div);

        const botonCarrito = div.querySelector(".agregar-carrito");
        botonCarrito.addEventListener("click", function() {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            const productoExistente = carrito.find(item => item.nombre === producto.nombre);
            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert(`${producto.nombre} añadido al carrito`);
        });
    });
});



