var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP'],
    datasets: [
      {
        label: ['1M', '3M', '6M', '9M', '12M'],
        data: [10, 9, 5, 12, 14, 20],
        borderColor: ['#ff3566'],
        backgroudColor: ['rgba 0,0,0,0.1'],
        fill: false,
        lineTension: 0,
      },
    ],
  },
});
var actualizarHora = (function () {
  var fecha = new Date(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    año = fecha.getFullYear();

  var pDia = document.getElementById('dia'),
    pMes = document.getElementById('months');
  pYear = document.getElementById('year');

  var meses = [
    'ENERO,',
    'FEBRERO,',
    'MARZO,',
    'ABRIL,',
    'MAYO,',
    'JUNIO,',
    'JULIO,',
    'AGOSTO,',
    'SEPTIEMBRE,',
    'OCTUBRE,',
    'NOVIEMBRE,',
    'DICIEMBRE,',
  ];
  pMes.textContent = meses[mes];
  pYear.textContent = año;
  pDia.textContent = dia;

  actualizarHora();
})();
