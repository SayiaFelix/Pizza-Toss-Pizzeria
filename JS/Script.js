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

    $("#cart").hide();
    $("#btnContent").hide();
    $("#more-info").hide();
    $("#Yes").hide();
    $("#No").hide();
    $(".card-body h6").hide();
    $("#more-info h4").hide();
    $("#more-info h6").hide();




    $('#orderBtn1').click(function() {

        let pizzaSize = $("#pizzaSize option:selected").val();
        let pizzaToppings = $("#pizzaToppings option:selected").val();
        let pizzaCrust = $("#pizzaCrust option:selected").val();
        let total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);

        var grandTotal = 0;


        $("#cart").show();
        $("#btnContent").show();
        $("#orderBtn1").hide();
        $(".card-text").hide();
        $(".card-body h4").hide();
        $(".card-body h6").show();

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
        $('#orderMore').click(function() {

            let pizzaSize = $("#pizzaSize option:selected").val();
            let pizzaToppings = $("#pizzaToppings option:selected").val();
            let pizzaCrust = $("#pizzaCrust option:selected").val();
            var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);

            grandTotal = grandTotal + total;

            let newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total);

            let orderedList = '<tr><td id="size">' + $("#pizzaSize option:selected").text() + " - " + newPizza.size + '</td><td id = "toppings">' + $("#pizzaToppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $("#pizzaCrust option:selected").text() + " - " + newPizza.crust + '</td><td id = "total">' + newPizza.total + '<td><tr>'

            $("#Order").append(orderedList);
        });

        $("#checkOut").click(function() {
            $("#orderMore").hide();
            $("#checkOut").hide();
            $("#more-info").show();
            $("#Yes").show();
            $("#No").show();
            $("#more-info .location").hide();
            $("#more-info h6").hide();


            grandTotal = grandTotal + total;

            $("#more-info h3 span").html(grandTotal);
        });

        $("#Yes").click(function() {
            $("#more-info h5").hide();
            $("#Yes").hide();
            $("#No").hide();
            $("#more-info .location").show();
            $("#more-info h3 span").html(grandTotal + 300);
        });

        $("#No").click(function() {
            $("#more-info h6").show();
            $("#more-info h5").hide();
            $("#more-info .location").hide();
            $("#Yes").hide();
            $("#No").hide();

        });


        $("#btnComplete").click(function() {

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