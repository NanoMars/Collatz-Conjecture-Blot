//Play with these variables to change the look!

let collatzs = [
    {
        SIZE: -38,
        CURVYNESS: 846,
        COUNT: 81,
        CURVEMOD: 0, // Integer, range between 0 & 2
        LENMOD: 0, // Integer, range between 0 & 2
        X: -61,
        Y: 105
    },
    {
        SIZE: 42,
        CURVYNESS: 500,
        COUNT: 100,
        CURVEMOD: 2, // Integer, range between 0 & 2
        LENMOD: 0, // Integer, range between 0 & 2
        X: 418,
        Y: 200
    }
];




function collatz(n, t, SIZE, CURVYNESS, CURVEMOD, LENMOD) {
    if (LENMOD === 1) {
        t.forward(SIZE * n)
    } else if (LENMOD === 2) {
        t.forward(SIZE / n)
    } else {
        t.forward(SIZE)
    }
    if (n % 2 === 0) {
        if (CURVEMOD === 1) {
            t.left(CURVYNESS / Math.sqrt(n))
        } else if (CURVEMOD === 2) {
            t.left(CURVYNESS * n)
        } else {
            t.left(CURVYNESS)
        }
        return (n / 2)
    } else {
        if (CURVEMOD === 1) {
            t.right(CURVYNESS / Math.sqrt(n))
        } else if (CURVEMOD === 2) {
            t.right(CURVYNESS * n)
        } else {
            t.right(CURVYNESS)
        }
        return (3*n + 1)
    }
}

function runCollatz(n, SIZE, CURVYNESS, CURVEMOD, LENMOD, X, Y) {
    let t = new bt.Turtle()
    t.up()
    t.forward(X)
    t.right(90)
    t.forward(Y)
    t.right(180)
    t.down()
    
    while (n !== 1) {
        n = collatz(n, t, SIZE, CURVYNESS, CURVEMOD, LENMOD)
    } 
    drawLines(t.lines())
}

for (let i = 0; i < collatzs.length; i++) {
    let collatz = collatzs[i];
    let SIZE = collatz.SIZE;
    let CURVYNESS = collatz.CURVYNESS;
    let COUNT = collatz.COUNT;
    let CURVEMOD = collatz.CURVEMOD;
    let LENMOD = collatz.LENMOD;
    let X = collatz.X;
    let Y = collatz.Y;
    
    for (let j = 1; j <= COUNT; j++) {
        runCollatz(j, SIZE, CURVYNESS, CURVEMOD, LENMOD, X, Y);
    }
}
