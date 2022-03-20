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





//Order Section
// Basic Logics
function Pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.toppings = topping;

}

// function Crust(crispy, stuffed, gluten) {
//     this.pepperoni = crispy;
//     this.veges = stuffed;
//     this.bacon = gluten;
// }

// function Topping(pepperoni, veges, bacon) {
//     this.pepperoni = pepperoni;
//     this.veges = veges;
//     this.bacon = bacon;
// }

let sizePrice = {
    large: 1300,
    medium: 700,
    small: 500

};
let crustPrice = {
    crispy: 400,
    stuffed: 200,
    gluten: 100
};
let toppingPrice = {
    pepperoni: 150,
    bacon: 100,
    veges: 75
};

// Calculating price


function sizePriceCalc(size) {
    if (size === "small") {
        return sizePrice.small * 1;
    } else if (size === "medium") {
        return sizePrice.medium * 1;
    } else {
        return sizePrice.large * 1;
    }
}

function crustPriceCalc(crust) {
    if (crust === "crispy") {
        return crustPrice.crispy * 1;
    } else if (crust === "stuffed") {
        return crustPrice.stuffed * 1;
    } else {
        return crustPrice.gluten * 1;
    }
}

function toppingPriceCalc(topping) {
    if (topping === "pepperoni") {
        return crustPrice.pepperoni * 1;
    } else if (topping === "bacon") {
        return crustPrice.bacon * 1;
    } else {
        return crustPrice.veges * 1;
    }
}


//UserInterface

// let large = new Pizza('large', 'ksh 1300');
// let medium = new Pizza('medium', 'ksh 700');
// let small = new Pizza('small', 'ksh 500');

// function getPizzaSize() {
//     return $("#pizzaSize").find(":selected").val();
// }

// function getCrusts() {
//     return $("#pizzaCrust").find(":selected").val();
// }

// function getToppings() {
//     return $("#pizzaToppings").find(":selected").val();
// }


$("form#myPizza").submit(function(event) {
    event.preventDefault();

    let inputtedPizzaSize = $("select#pizzaSize").find(":selected").val();;
    let inputtedPizzaCrust = $("select#pizzaCrust").find(":selected").val();
    let inputtedPizzaToppings = $("select#pizzaToppings").find(":selected").val();;

    let newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaCrust, inputtedPizzaToppings);
    $("#cart").hide();
    $("#checkout").show();


    let firstOrder = sizePriceCalc(inputtedPizzaSize) + crustPriceCalc(inputtedPizzaCrust) + toppingPriceCalc(inputtedPizzaToppings);

    let orderedList = '</th><td id="size">' +
        $(".size option:selected").text() +
        " - " + newPizza.size + '</td><td id="toppings">' +
        $(".toppings option:selected").text() +
        " - " + newPizza.toppings +
        '</td><td id="crust">' +
        $(".crust option:selected").text() +
        " - " + newPizza.crust +
        '</td><td id="total">' +
        firstOrder + '</td></tr>'

    $("#Order").append(orderedList);

});
var totalOrderedNo = parseInt($("#OrderedNo").val());

function calcTotalPrice() {
    var firstPizzaPrice = sizePriceCalc(inputtedPizzaSize) + crustPriceCalc(inputtedPizzaCrust) + toppingPriceCalc(inputtedPizzaToppings);

    return firstPizzaPrice;
}
var orderedList = [];

// $("#orderBtn").on("click", function() {
//     totalOrderedNo += 1;
//     $("#orderedNo").text(totalOrderedNo);
//     pizzaSizeList.push(calcTotalPrice());
// });
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
    $("#money").text(total);

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