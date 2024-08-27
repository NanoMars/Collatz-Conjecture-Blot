//Play with these variables to change the look!

const SIZE = 3
const CURVYNESS = 1451
const COUNT = 854

function collatz(n, t) {
    t.forward(SIZE)
    if (n % 2 === 0) {
        t.left(CURVYNESS / Math.sqrt(n))
        return (n / 2)
    } else {
        t.right(CURVYNESS / Math.sqrt(n))
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

for (let i = 1; i <= COUNT; i++) {
    runCollatz(i); 
}
