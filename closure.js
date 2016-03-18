//js闭包
function counter(i) {
    var temp = 0;
    return function (j) {
        console.log(j + (temp++));
    }
}
var count0 = counter;//copy
var count1 = counter;//copy
var count_0 = count0();
count_0(1);//1
count_0(1);//2
count_0(1);//3
count_0(1);//4
var count_1 = count1();
count_1(100);//100


//
function show() {
    console.log('show');
    for (var i = 0; i < 10; i++) {
        //alert(i);//阻塞代码
        console.log(i);
    }
}
show();

//场景设定：循环打印 i：0~9

function originalShow() {
    console.log('----original----');
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);//循环完成之后 i=10 即全部打印10；
    }
}
originalShow();//打印 10个10;

function rightShow() {
    console.log('----right----');
    for (var k = 0; k < 10; k++) {
        (function (p) {
            setTimeout(function () {
                console.log(p);
            }, 1000);
        })(k);//出入循环值，并立即执行
    }
}
rightShow();