$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
    $("html").on("click", function (e) {
        if (
            !$(e.target).closest("#menu").length &&
            !$(e.target).closest("#nav").length
        ) {
            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')

            $('#menu').removeClass('active')
            $('#nav').removeClass('active')
        }
    });

    $('#menu').on('click', function() {
        $(this).toggleClass('active')

        $('#nav').toggleClass('active')

        $("body").toggleClass("overflow-hidden")
        $('#page').toggleClass('bg-overlay')
    })

    $('#nav .btn-style').on('click', function() {
        $("body").removeClass("overflow-hidden")
        $('#page').removeClass('bg-overlay')

        $('#nav').removeClass('active')
        $('#menu').removeClass('active')
    })

    $('#popup-success .btn-style').on('click', function() {
        $('.is-close').trigger('click')
    })

});