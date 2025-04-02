document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Detergente Líquido", precio: 5.99, img: "/img/detergente.png" },
        { nombre: "Suavizante de Ropa", precio: 4.50, img: "/img/suavizante.png" },
        { nombre: "Jabón en Polvo", precio: 3.99, img: "/img/jabon.png" },
        { nombre: "Limpiador Multiusos", precio: 2.99, img: "/img/multiusos.png" },
        { nombre: "Desinfectante", precio: 6.50, img: "/img/desinfectante.png" },
        { nombre: "Lavatrastes", precio: 2.99, img: "/img/lavatrastes.png" },
        { nombre: "Aromatizante", precio: 3.50, img: "/img/aromatizante.png" },
        { nombre: "Cloro", precio: 1.99, img: "/img/cloro.png" },
        { nombre: "Esponjas", precio: 2.49, img: "/img/esponjas.png" },
        { nombre: "Trapeador", precio: 7.99, img: "/img/trapeador.png" },
        { nombre: "Escoba", precio: 8.99, img: "/img/escoba.png" },
        { nombre: "Jabón de manos", precio: 1.99, img: "/img/jabon_manos.png" },
        { nombre: "Shampoo", precio: 5.99, img: "/img/shampoo.png" },
        { nombre: "Papel Higiénico", precio: 6.99, img: "/img/papel.png" },
        { nombre: "Toallitas Desinfectantes", precio: 4.99, img: "/img/toallitas.png" },
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("aseo");
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="nombre">${producto.nombre}</div> 
            <div class="precio">$${producto.precio.toFixed(2)}</div>
            <button class="agregar-carrito">Añadir al carrito</button>
        `;
        
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

        contenedor.appendChild(div);
    });
});

