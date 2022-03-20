// pizzeria section large

$('#pizzaLarge').mouseenter(
    function() {

        $("#LargeContent").show().css("display", "block");

    })
$('#pizzaLarge').mouseleave(
    function() {

        $("#LargeContent").fadeOut()

    })

// pizzeria section medium

$('#pizzaMedium').mouseenter(
    function() {

        $("#MediumContent").show().css("display", "block");

    })
$('#pizzaMedium').mouseleave(
    function() {

        $("#MediumContent").fadeOut()

    })

// pizzeria section small

$('#pizzaSmall').mouseenter(
    function() {

        $("#SmallContent").show().css("display", "block");

    })
$('#pizzaSmall').mouseleave(
    function() {

        $("#SmallContent").fadeOut()
    })






// Order Section


$(document).ready(function() {

    $(".table").hide();
    $(".button2").hide();
    $("#more-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide();
    $("#more-info h4").hide();
    $("#more-info h6").hide();




    $('.btn.order').click(function() {

        let pizzaSize = $("#pizzaSize option:selected").val();
        let pizzaToppings = $("#pizzaToppings option:selected").val();
        let pizzaCrust = $("#pizzaCrust option:selected").val();
        let total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);

        var grandTotal = 0;


        $("#cart").show();
        $(".button2").show();
        $(".btn.order").hide();
        $(".card-text").hide();

        $("#size").html($("#pizzaSize option:selected").text() + " - " + pizzaSize);
        $("#toppings").html($("#pizzaToppings option:selected").text() + " - " + pizzaCrust);
        $("#crust").html($("#pizzaCrust option:selected").text() + " - " + pizzaToppings);
        $("#total").html(total);



        function Pizza(size, toppings, crust, total) {
            this.size = size;
            this.toppings = toppings;
            this.crust = crust;
            this.total = total;

        }
        $('.btn.more-pizza').click(function() {

            let pizzaSize = $("#pizzaSize option:selected").val();
            let pizzaToppings = $("#pizzaToppings option:selected").val();
            let pizzaCrust = $("#pizzaCrust option:selected").val();
            var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);

            grandTotal = grandTotal + total;

            let newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total);

            let newRow = '<tr><td id="size">' + $("#pizzaSize option:selected").text() + " - " + newPizza.size + '</td><td id = "toppings">' + $("#pizzaToppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $("#pizzaCrust option:selected").text() + " - " + newPizza.crust + '</td><td id = "total">' + newPizza.total + '<td><tr>'

            $("#Order").append(newRow);
        });

        $(".btn.check-out").click(function() {
            $(".btn.more-pizza").hide();
            $(".btn.check-out").hide();
            $("#more-info").show();
            $(".btn.yes").show();
            $(".btn.no").show();
            $("#more-info .location").hide();

            grandTotal = grandTotal + total;

            $("#more-info h3 span").html(grandTotal);
        });

        $(".btn.yes").click(function() {
            $("#more-info h5").hide();
            $(".btn.yes").hide();
            $(".btn.no").hide();
            $("#more-info .location").show();
            $("#more-info h3 span").html(grandTotal + 300);
        });

        $(".btn.no").click(function() {
            $("#more-info h6").show();
            $("#more-info h5").hide();
            $(".btn.yes").hide();
            $(".btn.no").hide();
            $("#more-info .location").hide();
        });


        $(".btn.complete").click(function() {
            let location = $("#more-info .location input").val();
            $("#more-info h4").show();
            $("#more-info .location").hide();
            $("#more-info h4 span").html(location);
        });

    });
});


// MialChimp section

// (function($) {
//     window.fnames = new Array();
//     window.ftypes = new Array();
//     fnames[0] = 'EMAIL';
//     ftypes[0] = 'email';
//     fnames[1] = 'FNAME';
//     ftypes[1] = 'text';
//     fnames[2] = 'LNAME';
//     ftypes[2] = 'text';
//     fnames[3] = 'ADDRESS';
//     ftypes[3] = 'address';
//     fnames[4] = 'PHONE';
//     ftypes[4] = 'phone';
//     fnames[5] = 'BIRTHDAY';
//     ftypes[5] = 'birthday';
//     fnames[6] = 'MMERGE6';
//     ftypes[6] = 'birthday';
//     fnames[7] = 'MMERGE7';
//     ftypes[7] = 'text';
// }(jQuery));
// var $mcj = jQuery.noConflict(true);
// var $mcj = jQuery.noConflict(true);