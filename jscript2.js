var message="This message has global scope";
console.log("global : message = "+message);

var fn1 = function () {
    var message = "This message is in fn1";
    console.log("fn1 : message = "+message);
    fn2();
}

function fn2 () {
    var message = "This message is in fn2";
    console.log("fn2 : message = "+message);
}
fn1();