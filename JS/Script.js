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