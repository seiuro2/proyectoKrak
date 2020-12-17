// var meses = new Array(
//   'Enero',
//   'Febrero',
//   'Marzo',
//   'Abril',
//   'Mayo',
//   'Junio',
//   'Julio',
//   'Agosto',
//   'Septiembre',
//   'Octubre',
//   'Noviembre',
//   'Diciembre'
// );
// var f = new Date();
// document.write(
//   f.getDate() + ' de ' + meses[f.getMonth()] + ' de ' + f.getFullYear()
// );
var actualizarHora = (function() {
    var fecha = new Date(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        año = fecha.getFullYear();

    var pDia = document.getElementById('dia'),
        pMes = document.getElementById('months');
    pYear = document.getElementById('year');

    var meses = [
        'Enero,',
        'Febrero',
        'Marzo,',
        'Abril,',
        'Mayo,',
        'Junio,',
        'Julio,',
        'Agosto,',
        'Septiembre,',
        'Octubre,',
        'Noviembre,',
        'Diciembre,',
    ];
    pMes.textContent = meses[mes];
    pYear.textContent = año;
    pDia.textContent = dia;

    actualizarHora();
})();