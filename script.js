function resized() {
    var width = $(window).width()
    var height = $(window).height()
    if (width / height < 0.9) {
        var value = 2 + (0.9 - width / height) * 15
        $('#top-spacer').css('padding-top', value + 'vmin')
        $('#top-spacer').css('padding-bottom', value + 'vmin')
    } else {
        $('#top-spacer').css('padding-top', '2vmin')
        $('#top-spacer').css('padding-bottom', '2vmin')
    }
}

$(document).ready(function () {

    //$(document).on('click','.scroll-to-second', function(){
    $('#scroll-to-second').click(function () {
        $('html, body').animate({
            scrollTop: $('.cd-color-2').offset().top,
        }, 500)
    })

    $('#scroll-to-third').click(function () {
        $('html, body').animate({
            scrollTop: $('.cd-bg-3').offset().top,
        }, 500)
    })

    $('#scroll-to-first').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 500)
    })

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop()

        if (scroll > 0)
            $('#scroll-to-second').hide({duration: 'slow'})
        else
            $('#scroll-to-second').show({duration: 'fast'})

        if (scroll + $(window).height() > $('.cd-bg-3').offset().top)
            $('#scroll-to-third').hide({duration: 'slow'})
        else
            $('#scroll-to-third').show({duration: 'fast'})

        if (scroll < $('.cd-bg-3').offset().top - 10)
            $('#scroll-to-first').hide({duration: 'slow'})
        else
            $('#scroll-to-first').show({duration: 'fast'})
    })

    $(window).resize(function (event) {
        resized()
    })
    resized()

})
