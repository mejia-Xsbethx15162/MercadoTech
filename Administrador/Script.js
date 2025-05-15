document.addEventListener("DOMContentLoaded", function () {
    // Elementos del DOM
    const tablaInventario = document.getElementById("tabla-inventario");
    const listaProductosFaltantesAdmin = document.getElementById("lista-productos-faltantes");
    const formularioEnviar = document.getElementById("formulario-enviar");
    const botonVerFaltantes = document.getElementById("ver-faltantes");

    // Función para cargar y mostrar el inventario desde localStorage
    function cargarInventario() {
        tablaInventario.innerHTML = ""; // Limpiar la tabla
        const inventario = JSON.parse(localStorage.getItem("inventario")) || [];

        inventario.forEach(producto => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>$${producto.precio ? producto.precio.toFixed(2) : '0.00'}</td>
                <td>
                    <button onclick="agregarProductoFaltante(${producto.id})">Marcar como Faltante</button>
                </td>
            `;
            tablaInventario.appendChild(fila);
        });
    }

    // Cargar el inventario al cargar la página
    cargarInventario();

    // Función para agregar un producto a la lista de faltantes en localStorage
    window.agregarProductoFaltante = function(id) {
        const producto = JSON.parse(localStorage.getItem("inventario"))?.find(p => p.id === id);
        if (!producto) return;

        let productosFaltantes = JSON.parse(localStorage.getItem("productosFaltantes")) || [];
        productosFaltantes.push({ id: producto.id, nombre: producto.nombre, cantidad: producto.cantidad });
        localStorage.setItem("productosFaltantes", JSON.stringify(productosFaltantes));

        alert(`Producto "${producto.nombre}" marcado como faltante.`);
        actualizarListaFaltantesAdmin();
    };

    // Función para actualizar la lista de productos faltantes en la interfaz
    function actualizarListaFaltantesAdmin() {
        const productosFaltantes = JSON.parse(localStorage.getItem("productosFaltantes")) || [];
        listaProductosFaltantesAdmin.innerHTML = "";

        productosFaltantes.forEach((producto, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("lista-productos-faltantes-item");
            listItem.innerHTML = `
                <span>${producto.nombre} - Cantidad faltante: ${producto.cantidad}</span>
                <button onclick="mostrarFormularioAsignar(${index})">Asignar Proveedor</button>
                <div class="asignar-proveedor-form" id="asignar-proveedor-form-${index}">
                    <select id="proveedor-${index}">
                        <option value="">-- Seleccionar --</option>
                        <option value="Proveedor A">Proveedor A</option>
                        <option value="Proveedor B">Proveedor B</option>
                        <option value="Proveedor C">Proveedor C</option>
                        <option value="Proveedor D">Proveedor D</option>
                    </select>
                    <button onclick="asignarProveedor(${index})">Asignar</button>
                </div>
            `;
            listaProductosFaltantesAdmin.appendChild(listItem);
        });
    }

    // Función para mostrar el formulario de asignar proveedor
    window.mostrarFormularioAsignar = function(index) {
        const formulario = document.getElementById(`asignar-proveedor-form-${index}`);
        formulario.style.display = "inline-block";
    };

    // Función para asignar un proveedor a un producto faltante
    window.asignarProveedor = function(index) {
        const proveedorSelect = document.getElementById(`proveedor-${index}`);
        const proveedorSeleccionado = proveedorSelect.value;

        if (proveedorSeleccionado) {
            let productosFaltantes = JSON.parse(localStorage.getItem("productosFaltantes")) || [];
            if (productosFaltantes[index]) {
                productosFaltantes[index].proveedor = proveedorSeleccionado;
                localStorage.setItem("productosFaltantes", JSON.stringify(productosFaltantes));
                alert(`Proveedor "${proveedorSeleccionado}" asignado a "${productosFaltantes[index].nombre}".`);
                actualizarListaFaltantesAdmin(); // Recargar la lista para reflejar el cambio
            }
        } else {
            alert("Por favor, selecciona un proveedor.");
        }
    };

    // Inicializar la lista de productos faltantes
    actualizarListaFaltantesAdmin();

    // Event listener para el formulario de enviar nuevos productos faltantes
    formularioEnviar.addEventListener("submit", function (event) {
        event.preventDefault();

        const productoNombre = document.getElementById("producto").value.trim();
        const cantidadFaltante = parseInt(document.getElementById("cantidad-faltante").value);
        const proveedorSeleccionado = document.getElementById("proveedor").value;

        if (productoNombre && !isNaN(cantidadFaltante) && proveedorSeleccionado) {
            const inventario = JSON.parse(localStorage.getItem("inventario")) || [];
            const productoInventario = inventario.find(p => p.nombre.toLowerCase() === productoNombre.toLowerCase());
            const precioUnitario = productoInventario ? productoInventario.precio : 0;

            let productosFaltantes = JSON.parse(localStorage.getItem("productosFaltantes")) || [];
            productosFaltantes.push({
                nombre: productoNombre,
                cantidad: cantidadFaltante,
                proveedor: proveedorSeleccionado,
                precioUnitario: precioUnitario
            });
            localStorage.setItem("productosFaltantes", JSON.stringify(productosFaltantes));
            alert(`Pedido de "${productoNombre}" enviado a ${proveedorSeleccionado} con éxito!`);
            document.getElementById("producto").value = "";
            document.getElementById("cantidad-faltante").value = "";
            document.getElementById("proveedor").value = "";
            actualizarListaFaltantesAdmin();
        } else {
            alert("Por favor, ingrese el producto, la cantidad faltante y seleccione un proveedor.");
        }
    });

    // Event listener para el botón "Ver Productos Faltantes"
    botonVerFaltantes.addEventListener("click", function() {
        window.location.href = "/proveedores/index.html";
    });
});