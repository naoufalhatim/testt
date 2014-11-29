function MainPanel () {

    function setUnit (unit) {
        speedLabel.setUnit(unit)
        tripDistancePanel.setUnit(unit)
        maxSpeedPanel.setUnit(unit)
        averageSpeedPanel.setUnit(unit)
        settings.unit = unit.key
        settings.save()
    }

    function update () {
        requestAnimationFrame(function () {
            setTimeout(function () {
                tripDistancePanel.update()
                tripTimePanel.update()
                clockPanel.update()
                averageSpeedPanel.update()
                update()
            }, 50)
        })
    }

    function updatePosition (position) {

        if (started) tripDistance.add(position)

        var coords = position.coords,
            speed = coords.speed

        speedLabel.setSpeed(speed)
        if (started) maxSpeedPanel.setSpeed(speed)

        var accuracy = coords.accuracy
        if (accuracy < 6) statusPanel.setStatus('SIGNAL GOOD')
        else if (accuracy < 12) statusPanel.setStatus('SIGNAL OK')
        else statusPanel.setStatus('SIGNAL WEAK')

    }

    var requestAnimationFrame = window.requestAnimationFrame,
        cancelAnimationFrame = window.cancelAnimationFrame
    if (!requestAnimationFrame) {
        requestAnimationFrame = window.mozRequestAnimationFrame
        cancelAnimationFrame = window.mozCancelAnimationFrame
    }

    var started = false

    var tripDistance = TripDistance()

    var imperialUnit = ImperialUnit(),
        metricUnit = MetricUnit()

    var speedLabel = SpeedLabel(metricUnit)

    var tabs = Tabs(function () {
        panelElement.removeChild(panelElement.firstChild)
        panelElement.appendChild(tripTimePanel.element)
        tripTimePanel.highlight()
    }, function () {
        panelElement.removeChild(panelElement.firstChild)
        panelElement.appendChild(tripDistancePanel.element)
        tripDistancePanel.highlight()
    }, function () {
        panelElement.removeChild(panelElement.firstChild)
        panelElement.appendChild(clockPanel.element)
        clockPanel.highlight()
    }, function () {
        panelElement.removeChild(panelElement.firstChild)
        panelElement.appendChild(maxSpeedPanel.element)
        maxSpeedPanel.highlight()
    }, function () {
        panelElement.removeChild(panelElement.firstChild)
        panelElement.appendChild(averageSpeedPanel.element)
        averageSpeedPanel.highlight()
    }, function () {
        panelElement.removeChild(panelElement.firstChild)
        panelElement.appendChild(settingsPanel.element)
        settingsPanel.highlight()
    })

    var tripTimePanel = TripTimePanel()

    var tripDistancePanel = TripDistancePanel(tripDistance, metricUnit)

    var clockPanel = ClockPanel()

    var maxSpeedPanel = MaxSpeedPanel(metricUnit)

    var averageSpeedPanel = AverageSpeedPanel(tripDistance, tripTimePanel, metricUnit)

    var settings = Settings()

    var settingsPanel = SettingsPanel(settings, function () {
        setUnit(imperialUnit)
    }, function () {
        setUnit(metricUnit)
    })

    if (settings.unit == 'imperial') setUnit(imperialUnit)
    else setUnit(metricUnit)

    var classPrefix = 'MainPanel'

    var panelElement = Div(classPrefix + '-panel')
    panelElement.appendChild(tripDistancePanel.element)

    var resetButton = ResetButton(function () {
        tripDistance.reset()
        tripTimePanel.reset()
        tripDistancePanel.reset()
        maxSpeedPanel.reset()
        averageSpeedPanel.reset()
    })

    var startStopButton = StartStopButton(function () {
        started = true
        tripTimePanel.start()
        tripDistance.start()
    }, function () {
        started = false
        tripTimePanel.stop()
    })

    var statusPanel = StatusPanel()

    var width = 320,
        height = 452

    var contentElement = Div(classPrefix + '-content')
    contentElement.style.width = width + 'px'
    contentElement.style.height = height + 'px'
    contentElement.style.top = -height / 2 + 'px'
    contentElement.style.left = -width / 2 + 'px'
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
                latitude: 40 + Math.random() * 0.001,
                longitude: 40 + Math.random() * 0.001,
                altitude: -10 + Math.random() * 20,
                accuracy: Math.random() * 20,
                altitudeAccuracy: Math.random() * 10,
                heading: Math.random() * 360,
                speed: Math.random() * 30,
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
        maximumAge: 60 * 1000,
        timeout: 60 * 1000,
    })
//*/

    update()

    if (navigator.requestWakeLock) navigator.requestWakeLock('screen')

    return {
        element: element,
        resize: function (windowWidth, windowHeight) {
            var scale = windowWidth / width
            if (scale * height > windowHeight) scale = windowHeight / height
            element.style.transform = 'scale(' + scale +  ')'
        },
    }

}
