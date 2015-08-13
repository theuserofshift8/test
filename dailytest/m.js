/**
 * Created by randomnum on 2015/7/31.
 */
function makeAdder(a) {
    return function (b) {
        return a + b;
    };
}
var x = makeAdder(5);
var y = makeAdder(20);
console.log(x(6)); // ?
console.log(y(7)); // ?