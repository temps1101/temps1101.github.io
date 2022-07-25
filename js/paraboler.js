class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        this.vertex = [-2*a / b, -4*a / b**2 - 4*a*c]
    }

    toString() {
        let a = this.a;
        let b = this.b;
        let c = this.c;

        if (a.value() < 0) {

        }

        return "y=" + a + b + c;
    }
}