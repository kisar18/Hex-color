var button = document.getElementById('btn')

function createColorSegment(value) {
    const Segment = {}
    Segment.value = value
    return Segment
}

button.onclick = function() {
    const r1 = createColorSegment(undefined)
    const r2 = createColorSegment(undefined)
    const g1 = createColorSegment(undefined)
    const g2 = createColorSegment(undefined)
    const b1 = createColorSegment(undefined)
    const b2 = createColorSegment(undefined)

    function HexadecimalColor(colorSegment) {
        var numberOfColorSegment = Math.floor(Math.random() * 16)

        if (numberOfColorSegment == 10) {
            colorSegment.value = 'a'
        }
        else if (numberOfColorSegment == 11) {
            colorSegment.value = 'b'
        }
        else if (numberOfColorSegment == 12) {
            colorSegment.value = 'c'
        }
        else if (numberOfColorSegment == 13) {
            colorSegment.value = 'd'
        }
        else if (numberOfColorSegment == 14) {
            colorSegment.value = 'e'
        }
        else if (numberOfColorSegment == 15) {
            colorSegment.value = 'f'
        }
        else {
            colorSegment.value = numberOfColorSegment
        }
    }

    HexadecimalColor(r1)
    HexadecimalColor(r2)
    HexadecimalColor(g1)
    HexadecimalColor(g2)
    HexadecimalColor(b1)
    HexadecimalColor(b2)
    
    var HexColor = "#" + r1.value + r2.value + g1.value + g2.value + b1.value + b2.value
    console.log(HexColor) 
    
    document.getElementsByTagName('body')[0].style.backgroundColor = HexColor
    document.getElementsByClassName('hex-color-name')[0].innerText = "HEX COLOR: " + HexColor
}