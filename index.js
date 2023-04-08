$(".btn").click(touched)

let contenedor = $(".inner")
let contenedor2 = $(".inner-2")

let touch = 0

function touched() {
    let vari = $(this).attr("id")

    $("#"+vari).addClass("touch")

    if (vari !== touch) {
        $("#"+touch).removeClass("touch")
        touch = vari
        }
}


function enviar() {

    $(".selected").text("You selected out " +  touch + " of 5")

    contenedor.css("display", "none")
    contenedor2.css("display", "block")
}