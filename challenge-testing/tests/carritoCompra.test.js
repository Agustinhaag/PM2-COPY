const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  it("se inicializa como un array vacio", () => {
    const carrito = new CarritoCompra();
    expect(carrito.carrito).toEqual([]);
  });

  it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
    const carrito = new CarritoCompra();

    const mockProduct = jest.fn(() => {
      return {
        id: 1,
        nombre: "Producto de prueba",
        precio: 10,
        cantidad: 2,
      };
    });
    const product = mockProduct();
    carrito.agregarProducto(product);
    expect(carrito.carrito).toContainEqual({
      id: 1,
      nombre: "Producto de prueba",
      precio: 10,
      cantidad: 2,
    });
  });

  it("calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito, varios productos.", () => {
    const carrito = new CarritoCompra();
    carrito.carrito = [
      {
        id: 1,
        nombre: "Producto de prueba",
        precio: 10,
        cantidad: 2,
      },
      {
        id: 2,
        nombre: "Producto de prueba 2",
        precio: 40,
        cantidad: 5,
      },
      {
        id: 3,
        nombre: "Producto de prueba 3",
        precio: 100,
        cantidad: 3,
      },
    ];

    expect(carrito.calcularTotal()).toEqual(520);
  });
  it("calcularTotal: con un solo elemento", () => {
    const carrito = new CarritoCompra();
    const mockProduct = jest.fn(() => {
      return {
        id: 1,
        nombre: "Producto de prueba",
        precio: 10,
        cantidad: 2,
      };
    });
    const product = mockProduct();
    carrito.agregarProducto(product);

    expect(carrito.calcularTotal()).toEqual(20);
  });
  it("calcularTotal: Arrojar un error si recibe un array vacio", () => {
    const carrito = new CarritoCompra();
    carrito.carrito = [];
    expect(() => carrito.calcularTotal()).toThrowError(
      "Factura invalida o vacia"
    );
  });

  it("aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.", () => {
    const mockOffValue = jest.fn(() => 20);
    const carrito = new CarritoCompra();
    carrito.carrito = [
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
    ];

    const sinDescuento = carrito.calcularTotal();
    const totalDescuento = carrito.aplicarDescuento(mockOffValue());
    const diferencia = sinDescuento - totalDescuento;
    expect(diferencia).toBeCloseTo(sinDescuento * (mockOffValue() / 100), 1);
  });

  it("aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado, en caso de ser 0.", () => {
    const mockOffValue = jest.fn(() => 0);
    const carrito = new CarritoCompra();
    carrito.carrito = [
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
    ];

    const sinDescuento = carrito.calcularTotal();
    const totalDescuento = carrito.aplicarDescuento(mockOffValue());
    const diferencia = sinDescuento - totalDescuento;
    expect(diferencia).toBeCloseTo(sinDescuento * (mockOffValue() / 100), 1);
  });
});
