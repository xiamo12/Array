# Array。  
数组操作     
数组去重需要考虑NaN的特殊情况。字符串对NaN的indexOf操作返回-1，会导致去重时漏掉对NaN的考虑，重复添加NaN。用NaN!=NaN的特性可以判断数组元素是不是NaN
