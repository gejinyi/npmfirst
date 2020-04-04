//法一
let arr = [1,2,[5,4,6,7,[8,9],10],0];
let way1 = [1,2,...[5,4,6,7,...[8,9],10],0];
//法二
function fn(arr) {
    let arr1 = [];
    arr.forEach((arry) => {
        if(arry instanceof Array){
            arr1 = arr1.concat(fn(arry))
        }else{
            arr1.push(arry)
        }
    });
    return arr1;
}
//法三
arr.flat(Infinity);

