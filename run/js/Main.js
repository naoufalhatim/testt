(function () {

    function enableTransition (classList) {
        classList.add('enableTransition')
    }

    function resize () {
        mainPanel.resize(innerWidth, innerHeight)
    }

    ;(function () {
        var style = document.createElement('style')
        style.innerHTML =
            '@font-face {' +
                'font-family: FreeMono;' +
                'src: url(fonts/FreeMono.ttf);' +
                'src: local("FreeMono"), url(fonts/FreeMono.ttf);' +
                'font-weight: normal;' +
            '}' +
            '@font-face {' +
                'font-family: FreeMono;' +
                'src: url(fonts/FreeMonoBold.ttf);' +
                'src: local("FreeMono Bold"), url(fonts/FreeMonoBold.ttf);' +
                'font-weight: bold;' +
            '}'
        document.head.appendChild(style)
    })()

    var mainPanel = MainPanel(enableTransition)

    var body = document.body
    body.appendChild(mainPanel.element)

    addEventListener('resize', resize)
    resize()

    setTimeout(function () {
        enableTransition(body.classList)
        mainPanel.enableTransition()
    }, 200)

})()
