(function () {
function ClockPanel () {

    var classPrefix = 'ClockPanel'

    var hourNode = TextNode('00')

    var hourElement = Div(classPrefix + '-hour')
    hourElement.appendChild(hourNode)

    var minuteNode = TextNode('00')

    var minuteElement = Div(classPrefix + '-minute')
    minuteElement.appendChild(minuteNode)

    var secondNode = TextNode('00')

    var secondElement = Div(classPrefix + '-second')
    secondElement.appendChild(TextNode(':'))
    secondElement.appendChild(secondNode)

    var contentElement = Div(classPrefix + ' BottomPanel-content')
    contentElement.appendChild(hourElement)
    contentElement.appendChild(TextNode(':'))
    contentElement.appendChild(minuteElement)
    contentElement.appendChild(secondElement)

    var labelElement = Div(classPrefix + '-label')
    labelElement.appendChild(TextNode('CLOCK'))

    var element = Div('BottomPanel')
    element.appendChild(labelElement)
    element.appendChild(contentElement)

    return {
        element: element,
        update: function () {
            var date = new Date
            hourNode.nodeValue = TwoDigitPad(date.getHours())
            minuteNode.nodeValue = TwoDigitPad(date.getMinutes())
            secondNode.nodeValue = TwoDigitPad(date.getSeconds())
        },
    }

}
;
function ClockTab (listener) {

    var element = Div('Tab ClockTab Button')
    element.appendChild(TextNode('CLOCK'))

    var classList = element.classList

    var click = OnClick(element, function () {
        listener()
        classList.add('selected')
    })
    click.enable()

    return {
        element: element,
        deselect: function () {
            classList.remove('selected')
        },
    }

}
;
function Distance () {

    var prevPosition
    var distance = 0

    return {
        add: function (position) {
            if (prevPosition) {
                distance += DistanceBetweenPositions(prevPosition, position)
            }
            prevPosition = position
        },
        get: function () {
            return distance
        },
        reset: function () {
            positions.splice(0)
        },
    }

}
;
function DistanceBetweenPositions (position1, position2) {

    function toRad (n) {
       return n * Math.PI / 180
    }

    var coords1 = position1.coords,
        coords2 = position2.coords

    var lat1 = toRad(coords1.latitude),
        lon1 = toRad(coords1.longitude)

    var lat2 = toRad(coords2.latitude),
        lon2 = toRad(coords2.longitude)

    var earthRadius = 6371000

    var dLat = lat2 - lat1,
        dLon = lon2 - lon1

    var sinDLat2 = Math.sin(dLat / 2),
        sinDLon2 = Math.sin(dLon / 2)

    var a = sinDLat2 * sinDLat2
        + Math.cos(lat1) * Math.cos(lat2) * sinDLon2 * sinDLon2

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    var d = earthRadius * c

    return d

}
;
function Div (className) {
    var div = document.createElement('div')
    div.className = className
    return div
}
;
function MainPanel () {

    function update () {
        requestAnimationFrame(function () {
            setTimeout(function () {
                tripDistancePanel.update()
                tripTimePanel.update()
                clockPanel.update()
                update()
            }, 50)
        })
    }

    function updatePosition (position) {

        if (started) distance.add(position)

        var coords = position.coords
        speedLabel.setSpeed(coords.speed)

        var accuracy = coords.accuracy
        if (accuracy < 6) statusPanel.setStatus('SIGNAL GOOD')
        else if (accuracy <= 12) statusPanel.setStatus('SIGNAL OK')
        else statusPanel.setStatus('SIGNAL WEAK')

    }

    var requestAnimationFrame = window.requestAnimationFrame,
        cancelAnimationFrame = window.cancelAnimationFrame
    if (!requestAnimationFrame) {
        requestAnimationFrame = window.mozRequestAnimationFrame
        cancelAnimationFrame = window.mozCancelAnimationFrame
    }

    var started = false

    var distance = Distance()

    var speedLabel = SpeedLabel()

    var tabs = Tabs(function () {
        panelElement.removeChild(panelElement.firstChild)
        panelElement.appendChild(tripTimePanel.element)
    }, function () {
        panelElement.removeChild(panelElement.firstChild)
        panelElement.appendChild(tripDistancePanel.element)
    }, function () {
        panelElement.removeChild(panelElement.firstChild)
        panelElement.appendChild(clockPanel.element)
    })

    var tripTimePanel = TripTimePanel()

    var tripDistancePanel = TripDistancePanel(distance)

    var clockPanel = ClockPanel()

    var classPrefix = 'MainPanel'

    var panelElement = Div(classPrefix + '-panel')
    panelElement.appendChild(tripDistancePanel.element)

    var resetButton = ResetButton(function () {
        tripTimePanel.reset()
        tripDistancePanel.reset()
        distance.reset()
    })

    var startStopButton = StartStopButton(function () {
        started = true
        tripTimePanel.start()
    }, function () {
        started = false
        tripTimePanel.stop()
    })

    var statusPanel = StatusPanel()

    var contentElement = Div(classPrefix + '-content')
    contentElement.appendChild(speedLabel.element)
    contentElement.appendChild(panelElement)
    contentElement.appendChild(tabs.element)
    contentElement.appendChild(resetButton)
    contentElement.appendChild(startStopButton.element)
    contentElement.appendChild(statusPanel.element)

    var element = Div(classPrefix)
    element.appendChild(contentElement)

/*
    setInterval(function () {
        updatePosition({
            coords: {
                latitude: 40 + Math.random() * 0.1,
                longitude: 40 + Math.random() * 0.1,
                altitude: -10 + Math.random() * 20,
                accuracy: Math.random() * 20,
                altitudeAccuracy: Math.random() * 10,
                heading: Math.random() * 360,
                speed: Math.random() * 300,
            },
            timestamp: Date.now(),
        })
    }, 500)
*/
///*
    navigator.geolocation.watchPosition(updatePosition, function (error) {
        var code = error.code
        if (code == error.PERMISSION_DENIED) {
            statusPanel.setStatus('PERMISSION DENIED')
        } else if (code == error.POSITION_UNAVAILABLE) {
            statusPanel.setStatus('POSITION UNAVAILABLE')
        } else {
            statusPanel.setStatus('TIMEOUT')
        }
    }, {
        enableHighAccuracy: true,
    })
//*/

    update()

    if (navigator.requestWakeLock) navigator.requestWakeLock('screen')

    return {
        element: element,
        resize: function (width, height) {
            var scale = width / 320
            if (scale * 400 > height) scale = height / 400
            element.style.transform = 'scale(' + scale +  ')'
        },
    }

}
;
function OnClick (element, listener) {

    function click () {
        classList.add('active')
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            listener()
            timeout = setTimeout(function () {
                classList.remove('active')
            }, 150)
        }, 100)
    }

    function mouseDown (e) {
        if (e.button !== 0) return
        e.preventDefault()
        if (touched) touched = false
        else click()
    }

    function touchStart (e) {
        e.preventDefault()
        touched = true
        click()
    }

    var timeout

    var classList = element.classList

    var touched = false

    return {
        disable: function () {
            element.removeEventListener('touchstart', touchStart)
            element.removeEventListener('mousedown', mouseDown)
        },
        enable: function () {
            element.addEventListener('mousedown', mouseDown)
            element.addEventListener('touchstart', touchStart)
        },
    }

}
;
function ResetButton (clickListener) {

    var element = Div('ResetButton Button')
    element.appendChild(TextNode('RESET'))

    var click = OnClick(element, clickListener)
    click.enable()

    return element

}
;
function SpeedLabel () {

    var classPrefix = 'SpeedLabel'

    var greyNode = TextNode('00')

    var greyElement = Div(classPrefix + '-grey')
    greyElement.appendChild(greyNode)

    var integerPartNode = TextNode('-')

    var integerPartElement = Div(classPrefix + '-integerPart')
    integerPartElement.appendChild(integerPartNode)

    var fractionalPartNode = TextNode('-')

    var fractionalPartElement = Div(classPrefix + '-fractionalPart')
    fractionalPartElement.appendChild(TextNode('.'))
    fractionalPartElement.appendChild(fractionalPartNode)

    var unitElement = Div(classPrefix + '-unit')
    unitElement.appendChild(TextNode('KM/H'))

    var labelElement = Div(classPrefix + '-label')
    labelElement.appendChild(TextNode('SPEED'))

    var contentElement = Div(classPrefix + '-content')
    contentElement.appendChild(greyElement)
    contentElement.appendChild(integerPartElement)
    contentElement.appendChild(fractionalPartElement)
    contentElement.appendChild(unitElement)

    var element = Div(classPrefix)
    element.appendChild(labelElement)
    element.appendChild(contentElement)

    return {
        element: element,
        setSpeed: function (speed) {
            var integerPart, fractionalPart, grey
            if (isFinite(speed)) {

                speed = speed * 18 / 5
                speed = Math.min(999.99, speed)

                integerPart = String(Math.floor(speed))
                fractionalPart = Math.floor(speed % 1 * 10)

                var speedLength = integerPart.length

                if (speedLength == 3) grey = ''
                else if (speedLength == 2) grey = '0'
                else grey = '00'

            } else {
                integerPart = '-'
                fractionalPart = '-'
                grey = '--'
            }
            integerPartNode.nodeValue = integerPart
            fractionalPartNode.nodeValue = fractionalPart
            greyNode.nodeValue = grey
        },
    }

}
;
function StartStopButton (startListener, stopListener) {

    var started = false

    var node = TextNode('START')

    var element = Div('StartStopButton Button')
    element.appendChild(node)

    var click = OnClick(element, function () {
        if (started) {
            started = false
            node.nodeValue = 'START'
            stopListener()
        } else {
            started = true
            node.nodeValue = 'STOP'
            startListener()
        }
    })
    click.enable()

    return { element: element }

}
;
function StatusPanel () {

    var node = TextNode('INITIALIZING')

    var element = Div('StatusPanel')
    element.appendChild(TextNode('GPS: '))
    element.appendChild(node)

    return {
        element: element,
        setStatus: function (text) {
            node.nodeValue = text
        },
    }

}
;
function Tabs (tripTimeListener, tripDistanceListener, clockListener) {

    var tripDistanceTab = TripDistanceTab(function () {
        tripTimeTab.deselect()
        clockTab.deselect()
        tripDistanceListener()
    })

    var tripTimeTab = TripTimeTab(function () {
        tripDistanceTab.deselect()
        clockTab.deselect()
        tripTimeListener()
    })

    var clockTab = ClockTab(function () {
        tripDistanceTab.deselect()
        tripTimeTab.deselect()
        clockListener()
    })

    var element = Div('Tabs')
    element.appendChild(tripDistanceTab.element)
    element.appendChild(tripTimeTab.element)
    element.appendChild(clockTab.element)

    return { element: element }

}
;
function TextNode (text) {
    return document.createTextNode(text)
}
;
function TripDistancePanel (distance) {

    function update () {

        var distanceValue = distance.get()
        distanceValue = Math.min(999999, Math.floor(distanceValue))

        var fractionalPart = String(distanceValue % 1000)
        if (fractionalPart.length == 1) fractionalPart = '00' + fractionalPart
        else if (fractionalPart.length == 2) fractionalPart = '0' + fractionalPart
        fractionalPartNode.nodeValue = fractionalPart

        integerPartNode.nodeValue = Math.floor(distanceValue / 1000)

        var kilometresLength = integerPartNode.nodeValue.length

        var grey
        if (kilometresLength == 3) grey = ''
        else if (kilometresLength == 2) grey = '0'
        else grey = '00'
        greyNode.nodeValue = grey

    }

    var classPrefix = 'TripDistancePanel'

    var greyNode = TextNode('00')

    var greyElement = Div(classPrefix + '-grey')
    greyElement.appendChild(greyNode)

    var integerPartNode = TextNode('0')

    var integerPartElement = Div(classPrefix + '-integerPart')
    integerPartElement.appendChild(greyElement)
    integerPartElement.appendChild(integerPartNode)

    var fractionalPartNode = TextNode('000')

    var fractionalPartElement = Div(classPrefix + '-fractionalPart')
    fractionalPartElement.appendChild(TextNode('.'))
    fractionalPartElement.appendChild(fractionalPartNode)

    var unitElement = Div(classPrefix + '-unit')
    unitElement.appendChild(TextNode('KM'))

    var contentElement = Div(classPrefix + ' BottomPanel-content')
    contentElement.appendChild(integerPartElement)
    contentElement.appendChild(fractionalPartElement)
    contentElement.appendChild(unitElement)

    var labelElement = Div(classPrefix + '-label')
    labelElement.appendChild(TextNode('TRIP DISTANCE'))

    var element = Div('BottomPanel')
    element.appendChild(labelElement)
    element.appendChild(contentElement)

    return {
        element: element,
        reset: update,
        update: update,
    }

}
;
function TripDistanceTab (listener) {

    var classPrefix = 'TripDistanceTab'

    var contentElement = Div(classPrefix + '-content Tab-content')
    contentElement.appendChild(TextNode('TRIP'))
    contentElement.appendChild(document.createElement('br'))
    contentElement.appendChild(TextNode('DISTANCE'))

    var element = Div(classPrefix + ' Tab Button')
    element.appendChild(Div(classPrefix + '-aligner Tab-aligner'))
    element.appendChild(contentElement)

    var classList = element.classList
    classList.add('selected')

    var click = OnClick(element, function () {
        listener()
        classList.add('selected')
    })
    click.enable()

    return {
        element: element,
        deselect: function () {
            classList.remove('selected')
        },
    }

}
;
function TripTimePanel () {

    var classPrefix = 'TripTimePanel'

    var hourNode = TextNode('00')

    var hourElement = Div(classPrefix + '-hour')
    hourElement.appendChild(hourNode)

    var minuteNode = TextNode('00')

    var minuteElement = Div(classPrefix + '-minute')
    minuteElement.appendChild(minuteNode)

    var secondNode = TextNode('00')

    var secondElement = Div(classPrefix + '-second')
    secondElement.appendChild(TextNode(':'))
    secondElement.appendChild(secondNode)

    var contentElement = Div(classPrefix + ' BottomPanel-content')
    contentElement.appendChild(hourElement)
    contentElement.appendChild(TextNode(':'))
    contentElement.appendChild(minuteElement)
    contentElement.appendChild(secondElement)

    var labelElement = Div(classPrefix + '-label')
    labelElement.appendChild(TextNode('TRIP TIME'))

    var element = Div('BottomPanel')
    element.appendChild(labelElement)
    element.appendChild(contentElement)

    var tripTime = 0,
        startTime = null,
        maxTripTime = 1000 * 60 * 60 * 100 - 1000

    return {
        element: element,
        reset: function () {
            tripTime = 0
            if (startTime !== null) startTime = Date.now()
        },
        start: function () {
            startTime = Date.now()
        },
        stop: function () {
            tripTime += Date.now() - startTime
            tripTime = Math.min(tripTime, maxTripTime)
            startTime = null
        },
        update: function () {

            if (startTime !== null) {
                var now = Date.now()
                tripTime += now - startTime
                startTime = now
            }
            tripTime = Math.min(tripTime, maxTripTime)

            var seconds = tripTime / 1000
            secondNode.nodeValue = TwoDigitPad(Math.floor(seconds % 60))

            var minutes = seconds / 60
            minuteNode.nodeValue = TwoDigitPad(Math.floor(minutes % 60))

            var hours = minutes / 60
            hourNode.nodeValue = TwoDigitPad(Math.floor(hours))

        },
    }

}
;
function TripTimeTab (listener) {

    var classPrefix = 'TripTimeTab'

    var contentElement = Div(classPrefix + '-content Tab-content')
    contentElement.appendChild(TextNode('TRIP'))
    contentElement.appendChild(document.createElement('br'))
    contentElement.appendChild(TextNode('TIME'))

    var element = Div(classPrefix + ' Tab Button')
    element.appendChild(Div(classPrefix + '-aligner Tab-aligner'))
    element.appendChild(contentElement)

    var classList = element.classList

    var click = OnClick(element, function () {
        listener()
        classList.add('selected')
    })
    click.enable()

    return {
        element: element,
        deselect: function () {
            classList.remove('selected')
        },
    }

}
;
function TwoDigitPad (n) {
    n = String(n)
    if (n.length == 1) n = '0' + n
    return n
}
;
(function () {

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

    var mainPanel = MainPanel()
    document.body.appendChild(mainPanel.element)

    addEventListener('resize', resize)
    resize()

})()
;

})()