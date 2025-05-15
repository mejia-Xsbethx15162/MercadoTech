document.addEventListener("DOMContentLoaded", function () {
    const selectorProveedor = document.getElementById("proveedor-seleccionado");
    const tablaPedidosProveedor = document.getElementById("tabla-pedidos-proveedor");
    const listaPedidosProveedor = document.getElementById("lista-pedidos-proveedor");
    const mensajeSinPedidos = document.getElementById("mensaje-sin-pedidos");
    const inputProductoNombre = document.getElementById("producto-nombre");
    const inputCantidadEnviar = document.getElementById("cantidad");
    const formularioActualizar = document.getElementById("formulario-actualizar");

    function cargarPedidosProveedor(proveedor) {
        const productosFaltantes = JSON.parse(localStorage.getItem("productosFaltantes")) || [];
        const pedidosProveedor = productosFaltantes.filter(pedido => pedido.proveedor === proveedor);

        listaPedidosProveedor.innerHTML = "";

        if (pedidosProveedor.length === 0) {
            tablaPedidosProveedor.style.display = 'none';
            mensajeSinPedidos.style.display = 'block';
        } else {
            tablaPedidosProveedor.style.display = 'table';
            mensajeSinPedidos.style.display = 'none';
            pedidosProveedor.forEach(pedido => {
                const precioTotal = pedido.precioUnitario * pedido.cantidad;
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${pedido.nombre}</td>
                    <td>${pedido.cantidad}</td>
                    <td>$${precioTotal.toFixed(2)}</td>
                `;
                listaPedidosProveedor.appendChild(fila);
            });
        }
    }

    selectorProveedor.addEventListener("change", function() {
        const proveedorSeleccionado = this.value;
        cargarPedidosProveedor(proveedorSeleccionado);
        localStorage.setItem("proveedorSeleccionado", proveedorSeleccionado);
    });

    formularioActualizar.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombreProductoActualizar = inputProductoNombre.value.trim();
        const cantidadEnviada = parseInt(inputCantidadEnviar.value);
        const proveedorSeleccionado = selectorProveedor.value;

        if (nombreProductoActualizar && !isNaN(cantidadEnviada) && proveedorSeleccionado) {
            let productosFaltantes = JSON.parse(localStorage.getItem("productosFaltantes")) || [];
            const productoIndex = productosFaltantes.findIndex(
                p => p.nombre.trim() === nombreProductoActualizar &&
                     p.cantidad.toString() === inputCantidadEnviar.value &&
                     p.proveedor === proveedorSeleccionado
            );

            if (productoIndex !== -1) {
                productosFaltantes.splice(productoIndex, 1);
                localStorage.setItem("productosFaltantes", JSON.stringify(productosFaltantes));
                cargarPedidosProveedor(proveedorSeleccionado);

                let inventario = JSON.parse(localStorage.getItem("inventario")) || [];
                const productoInventarioIndex = inventario.findIndex(p => p.nombre === nombreProductoActualizar);
                if (productoInventarioIndex !== -1) {
                    inventario[productoInventarioIndex].cantidad += cantidadEnviada;
                } else {
                    let precioNuevoProducto = 0.00;
                    if (nombreProductoActualizar.toLowerCase() === "leche") {
                        precioNuevoProducto = 1.50;
                    } else if (nombreProductoActualizar.toLowerCase() === "manzana") {
                        precioNuevoProducto = 2.50;
                    }
                    const nuevoId = inventario.length > 0 ? Math.max(...inventario.map(p => p.id)) + 1 : 1;
                    inventario.push({ id: nuevoId, nombre: nombreProductoActualizar, cantidad: cantidadEnviada, precio: precioNuevoProducto });
                }
                localStorage.setItem("inventario", JSON.stringify(inventario));

                alert(`Inventario de "${nombreProductoActualizar}" actualizado. Cantidad enviada: ${cantidadEnviada}.`);
                inputProductoNombre.value = "";
                inputCantidadEnviar.value = "";
            } else {
                alert("No se encontró el pedido para este proveedor con ese nombre y cantidad.");
            }
        } else {
            alert("Por favor, ingrese el nombre del producto, la cantidad enviada y seleccione un proveedor.");
        }
    });

    const proveedorInicial = localStorage.getItem("proveedorSeleccionado");
    if (proveedorInicial) {
        selectorProveedor.value = proveedorInicial;
        cargarPedidosProveedor(proveedorInicial);
    }
});