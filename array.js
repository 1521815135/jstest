//数组中的项可以为任意类型
//数组定义
var arr1 = new Array();

var arr2 = new Array(10);

var arr3 = [];

var arr4 = [1,100,'test','func'];

//属性
console.log('arr.length:'+arr4.length);//长度

//循环打印数组成员属性
for(var key in arr4){
console.log(arr4[key]);
}
}
