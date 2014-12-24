function AltitudeStatPanel (unit) {

    function setValue (field, altitude) {
        var formatAltitude = FormatAltitude(altitude, unit)
        field.setValue(formatAltitude.integerPart, formatAltitude.fractionalPart)
    }

    function update () {
        if (minValue === null) {
            minValue = maxValue = altitude
        } else {
            minValue = Math.min(minValue, altitude)
            maxValue = Math.max(maxValue, altitude)
        }
        setValue(minValueField, minValue)
        setValue(maxValueField, maxValue)
    }

    var classPrefix = 'AltitudeStatPanel'

    var minValueField = StatField('MIN')

    var maxValueField = StatField('MAX')

    var element = Div(classPrefix)
    element.appendChild(minValueField.element)
    element.appendChild(maxValueField.element)

    var started = false,
        altitude = null,
        minValue = null,
        maxValue = null

    return {
        element: element,
        reset: function () {
            minValue = maxValue = null
            minValueField.reset()
            maxValueField.reset()
            if (started) update()
        },
        setAltitude: function (_altitude) {
            altitude = _altitude
            if (started) update()
        },
        setUnit: function (_unit) {
            unit = _unit
            if (started) update()
        },
        start: function () {
            started = true
            update()
        },
        stop: function () {
            started = false
        },
    }

}
