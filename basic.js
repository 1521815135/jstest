//基本数据类型
console.log(typeof true);       //boolean;
console.log(typeof 1);          //number;
console.log(typeof 1.0);        //number;
console.log(typeof 'str');      //string;

//对象类型
console.log(typeof new Object());//object;
console.log(typeof new Array()); //object;
function f1(){}
console.log(typeof f1);           //function;
console.log(typeof new f1());     //object;
console.log(typeof Number);       //function;
console.log(typeof String);       //function;
console.log(typeof Boolean);      //function;

var s = "javascripts";
console.log(s.length);