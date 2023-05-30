$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
    $("html").on("click", function (e) {
        if (
            !$(e.target).closest("#menu").length &&
            !$(e.target).closest("#nav").length &&
            !$(e.target).closest("#search form").length 
        ) {
            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')
            $('#page').removeClass('z-index-10')

            $('#menu').removeClass('active')
            $('#nav').removeClass('active')

            $('#search').removeClass('active')
            $('#search input').val('')
        }
    });

    $('#menu').on('click', function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active')

            $('#nav').addClass('active')

            $("body").addClass("overflow-hidden")
            $('#page').addClass('bg-overlay')
        } else {
            $(this).removeClass('active')

            $('#nav').removeClass('active')

            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')
        }
    })

    $('#nav .btn-style').on('click', function() {
        $("body").removeClass("overflow-hidden")
        $('#page').removeClass('bg-overlay')

        $('#nav').removeClass('active')
        $('#menu').removeClass('active')
    })

    $('.search-btn').on('click', function() {
        $('#search').toggleClass('active')
        $('#search input').focus()

        $("body").addClass("overflow-hidden")
        $('#page').addClass('bg-overlay')
        $('#page').addClass('z-index-10')
        
        $('#menu').removeClass('active')
        $('#nav').removeClass('active')
    })

    $('.search-close').on('click', function() {
        $('#search').removeClass('active')

        $('#search input').val('')

        $("body").removeClass("overflow-hidden")
        $('#page').removeClass('bg-overlay')
        $('#page').removeClass('z-index-10')
    })

    $('#popup-success .btn').on('click', function() {
        $('.is-close').trigger('click')
    })

});