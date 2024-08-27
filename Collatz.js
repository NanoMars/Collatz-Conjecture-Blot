const size = 16
const curvyness = -343

function collatz(n, t) {
    t.forward(size)
    if (n % 2 === 0) {
        t.left(curvyness)
        return (n / 2)
    } else {
        t.right(curvyness)
        return (3*n + 1)
    }
}

function runCollatz(n) {
    let t = new bt.Turtle()
    t.left(90)
    while (n !== 1) {
        n = collatz(n, t)
    }
    drawLines(t.lines())
}

for (let i = 1; i <= 100; i++) {
    runCollatz(i * Math.random); 
}
