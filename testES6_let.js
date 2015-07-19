"use strict";
{
    var a = 1;
    let b = 2;
    console.log(a);
    console.log(b);
}

// console.log(a);
// console.log(b);

//  this c is a pointer
for (var i = 0,a = [];i < 10;i++)
{
        var c = i;
        a[i] =  function  () {
            console.log(c)
        };
}
a[0]()
a[9]()

for (var i = 0,a = [];i < 10; i++) {
    let d = i;
    a[i] = function () {
        console.log(d)
    };
};

a[0]()
a[9]()
