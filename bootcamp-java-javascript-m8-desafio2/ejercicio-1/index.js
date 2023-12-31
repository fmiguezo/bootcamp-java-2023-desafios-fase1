const detallesFlujo = [
  { mes: "Enero", ingreso: 1500, egreso: 1500 },
  { mes: "Febrero", ingreso: 2500, egreso: 2500 },
  { mes: "Marzo", ingreso: 84683, egreso: 1155 },
  { mes: "Abril", ingreso: 135353, egreso: 1533 },
  { mes: "Mayo", ingreso: 1535, egreso: 5434 },
  { mes: "Junio", ingreso: 4343354, egreso: 5434543 },
  { mes: "Julio", ingreso: 435453, egreso: 4543 },
  { mes: "Agosto", ingreso: 78351, egreso: 7816 },
  { mes: "Septiembre", ingreso: 1878, egreso: 95634 },
  { mes: "Octubre", ingreso: 48483, egreso: 9433 },
  { mes: "Noviembre", ingreso: 35483, egreso: 53133 },
  { mes: "Diciembre", ingreso: 3843, egreso: 348133 },
];

imprimirTabla();

function imprimirTabla() {
  const tablaFlujo = document.getElementById("tablaFlujo");
  detallesFlujo.forEach((mes) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
    <td>${mes.mes}</td>
    <td>${mes.ingreso}</td>
    <td>${mes.egreso}</td>
  `;
    tablaFlujo.appendChild(fila);
  });
}

function calcularResultado(detalle) {
  let totalIngresos = 0;
  let totalEgresos = 0;

  detalle.forEach((mes) => {
    totalIngresos += mes.ingreso;
    totalEgresos += mes.egreso;
  });

  return totalIngresos - totalEgresos;
}

function informarEstado(resultado) {
  if (resultado > 0) {
    return 1;
  } else if (resultado < 0) {
    return -1;
  } else {
    return 0;
  }
}

const estado = informarEstado(calcularResultado(detallesFlujo));
console.log(estado);
document.getElementById("resultado").textContent = `Estado: ${estado}`;
