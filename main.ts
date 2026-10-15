input.onButtonPressed(Button.A, function () {
    if (stato == 0) {
        stato += 1
        basic.showString("via")
    } else if (stato == 1) {
        stato = 2
        basic.showString("pronti")
    } else {
        stato = 0
        basic.showString("partenza")
    }
})
input.onButtonPressed(Button.B, function () {
    if (stato == 0) {
        stato += 1
        basic.showString("Paertenza")
    } else if (stato == 1) {
        stato = 2
        basic.showString("Via!")
    } else {
        stato = 0
        basic.showString("Pronti")
    }
})
let stato = 0
stato = 0
basic.showString("pronti")
