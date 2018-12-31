$(document).ready(function () {
    define(function (require) {
        var currency = require('currency.js');
    });

    $("#convert-btn").click(function () {
        // get the most recent exchange rates via the "latest" endpoint:
        $.ajax({
            url: 'http://apilayer.net/api/live?access_key=1e1e3d6b8df4c1df383889242c78d3b3&currencies=MXN&format=1',
            dataType: 'jsonp',
            success: function (json) {

                var dolarEnPesos = json.quotes.USDMXN;
                if (!$("#salary").val()) {
                    var salary = 1;
                    console.log(salary);
                } else {
                    var salary = parseInt($("#salary").val());
                    console.log(salary);
                }

                var salarioEnPesos = dolarEnPesos*salary;
                var salarioAnual = new Intl.NumberFormat().format(salarioEnPesos.toFixed(2));

                var salarioMensualInt = salarioEnPesos/12;
                var salarioMensual = new Intl.NumberFormat().format(salarioMensualInt.toFixed(2));

                var salarioSemanalInt = salarioMensualInt/4;
                var salarioSemanal = new Intl.NumberFormat().format(salarioSemanalInt.toFixed(2));

                $("#anual").html(salarioAnual);
                $("#mensual").html(salarioMensual);
                $("#semanal").html(salarioSemanal);

            }   
        });
    })
});

