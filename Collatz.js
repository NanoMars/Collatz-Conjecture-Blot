//Play with these variables to change the look!

const SIZE = 3
const CURVYNESS = 1873
const COUNT = 121
const MOD = 2 // Integar, range between 0 & 2

function collatz(n, t) {
    if (MOD === 0) {
          t.forward(SIZE)
    } else if (MOD === 2) {
          t.forward(SIZE * n)
    }
    if (n % 2 === 0) {
        if (MOD === 1) {
          t.left(CURVYNESS / Math.sqrt(n))
        } else {
          t.left(CURVYNESS)
        }
        return (n / 2)
    } else {
        if (MOD === 1) {
          t.right(CURVYNESS / Math.sqrt(n))
        } else {
          t.right(CURVYNESS)
        }
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
