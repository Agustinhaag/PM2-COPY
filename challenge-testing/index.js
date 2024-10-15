class CarritoCompra {
  constructor() {
    this.carrito = [];
    this.total = 0;
  }

  agregarProducto(product) {
        this.carrito.push(product);
  }

  calcularTotal() {
    this.total = 0
    if (!this.carrito.length) {
      throw Error("Factura invalida o vacia");
    }

    for (let product of this.carrito) {
      this.total += product.precio * product.cantidad;
    }
    return this.total;
  }

  aplicarDescuento(porcentaje) {
    this.calcularTotal();
    const descuento = (porcentaje / 100) * this.total;
    this.total -= descuento;
    return this.total;
  }
}


const carrito = new CarritoCompra()


carrito.agregarProducto([
    {
      id: 1,
      nombre: "Producto de prueba",
      precio: 10,
      cantidad: 2,
    },
    {
      id: 2,
      nombre: "Producto de prueba 2",
      precio: 10,
      cantidad: 5,
    },
  ])


module.exports = CarritoCompra;
