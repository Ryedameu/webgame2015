var arrayint = new Array();
arrayint.push(3);
arrayint.push(36);
arrayint.push(369);
document.writeln();
for(var i=0; i<arrayint.length; i++){
document.writeln(i+"번 인덱스의 원소 값 :"+arrayint[i]);
}
document.writeln("arrayint 배열의 원소 수 :"+arrayint.length);