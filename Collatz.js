//Play with these variables to change the look!

const SIZE = 3
const CURVYNESS = -115
const COUNT = 671
const CURVEMOD = 1 // Integar, range between 0 & 1
const LENMOD = 2 // Integar, range between 0 & 2


function collatz(n, t) {
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
        } else {
          t.left(CURVYNESS)
        }
        return (n / 2)
    } else {
        if (CURVEMOD === 1) {
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
