Array.prototype.uniq = function () {
    var arr=[];
    var flag=true;
    for(i=0;i<this.length;i++){
        if(arr.indexOf(this[i])==-1){
            if(this[i] != this[i]){//如果它是NaN类型
                if(flag){
                    arr.push(this[i]);
                    flag=false;
                }
            }
            else{
                arr.push(this[i]);
            }
        }
    }
    return arr;
}

console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq());
//输出[false, true, undefined, null, NaN, 0, 1, {}, {}, "a"] (10)