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


// MialChimp section

(function($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
    fnames[5] = 'BIRTHDAY';
    ftypes[5] = 'birthday';
    fnames[6] = 'MMERGE6';
    ftypes[6] = 'birthday';
    fnames[7] = 'MMERGE7';
    ftypes[7] = 'text';
}(jQuery));
var $mcj = jQuery.noConflict(true);
var $mcj = jQuery.noConflict(true);





// Order Section

// Basic Logics
// Initializing Values

let total = 0;
let deliveryFee = 200;
let crustPrice = new Array(250, 200, 350);
let sizePrice = new Array(350, 500, 700);
let toppingsPrice = new Array(140, 180, 220);



// Basic logics

function Pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.toppings = topping;

}


// User Interface

$(document).ready(function() {

    $("form#myPizza").submit(function(event) {
        event.preventDefault();

        let selectedPizzaSize = $("select#pizzaSize").find(":selected").val();;
        let selectedPizzaCrust = $("select#pizzaCrust").find(":selected").val();
        let selectedPizzaToppings = $("select#pizzaToppings").find(":selected").val();;

        let newPizza = new Pizza(selectedPizzaSize, selectedPizzaCrust, selectedPizzaToppings);

        $("#cart").hide();
        $("#checkout").show();


        let firstOrder = sizePriceCalc(selectedPizzaSize) + crustPriceCalc(selectedPizzaCrust) + toppingPriceCalc(selectedPizzaToppings);

        let orderedList = '<tr><td id="size">' + newPizza.size + '</td><td id="toppings">' + newPizza.topping + '</td><td id="crust">' + newPizza.crust + '</td><td id="total">' + firstOrder + '</td></tr>'

        $("#Order").append(orderedList);


        $("#pizzaSize").val("");
        $("#pizzaCrust").val("");
        $("#pizzaToppings").val("");

    });

    var totalOrderedNo = parseInt($("#OrderedNo").val());

    function calcTotalPrice() {
        var firstPizzaPrice = sizePriceCalc(selectedPizzaSize) + crustPriceCalc(selectedPizzaCrust) + toppingPriceCalc(selectedPizzaToppings);

        return firstPizzaPrice;
    }
    var orderedList = [];


    $("#orderBtn").click(function() {
        totalOrderedNo += 1;
        $("#orderedNo").text(totalOrderedNo);
        orderedList.push(calcTotalPrice());
    });

    $("#totalNo").click(function() {
        let total = 0;
        orderedList.forEach(function(pizza) {
            total += pizza;
        });
        $("#Order").text(total);

        let delivery = confirm("Would you like us deliver your pizza to your doorstep? transport cost ksh 200.");

        if (delivery) {
            let place = prompt("Enter your location");
            alert(`SUCCESS!!Your ordered will be delivered $ {place} and the cost is 200`)

        }
        if (delivery) {
            let location = prompt("Enter your location");
            alert($("#location").text(location), $("#success").show());
        } else {
            $("#fail").show();
        }
        $("#pizzaSize").val("");
        $("#pizzaCrust").val("");
        $("#pizzaToppings").val("");
        $("#Order").remove();
        $("#OrderedNo").text(0);



    });
});