document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Detergente Líquido", precio: "$5.99", img: "/img/detergente.png" },
        { nombre: "Suavizante de Ropa", precio: "$4.50", img: "/img/suavizante.png" },
        { nombre: "Jabón en Polvo", precio: "$3.99", img: "/img/jabon.png" },
        { nombre: "Limpiador Multiusos", precio: "$2.99", img: "/img/multiusos.png" },
        { nombre: "Desinfectante", precio: "$6.50", img: "/img/desinfectante.png" },
        { nombre: "Lavatrastes", precio: "$2.99", img: "/img/lavatrastes.png" },
        { nombre: "Aromatizante", precio: "$3.50", img: "/img/aromatizante.png" },
        { nombre: "Cloro", precio: "$1.99", img: "/img/cloro.png" },
        { nombre: "Esponjas", precio: "$2.49", img: "/img/esponjas.png" },
        { nombre: "Trapeador", precio: "$7.99", img: "/img/trapeador.png" },
        { nombre: "Escoba", precio: "$8.99", img: "/img/escoba.png" },
        { nombre: "Jabón de manos", precio: "$1.99", img: "/img/jabon_manos.png" },
        { nombre: "Shampoo", precio: "$5.99", img: "/img/shampoo.png" },
        { nombre: "Papel Higiénico", precio: "$6.99", img: "/img/papel.png" },
        { nombre: "Toallitas Desinfectantes", precio: "$4.99", img: "/img/toallitas.png" },
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("aseo");
        div.innerHTML = `<img src="${producto.img}" alt="${producto.nombre}">
                         <div class="nombre">${producto.nombre}</div> 
                         <div class="precio">${producto.precio}</div>
                         <button class="agregar-carrito">Añadir al carrito</button>`
        ;
        
        // Agregar evento al botón de "Añadir al carrito"
        const botonCarrito = div.querySelector(".agregar-carrito");
        botonCarrito.addEventListener("click", function() {
            // Obtener el carrito actual desde localStorage
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            // Añadir el producto al carrito
            carrito.push({ nombre: producto.nombre, precio: producto.precio });

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));

            // Mostrar una alerta o mensaje (opcional)
            alert(`${producto.nombre} añadido al carrito`);
        });            
        contenedor.appendChild(div);
    });
});


