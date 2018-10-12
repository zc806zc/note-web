# 基础算法

- js算法集合 <https://fanerge.github.io/js%E7%AE%97%E6%B3%95%E9%9B%86%E5%90%88.html>

# 1、 Reverse a String 翻转字符串

```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
```

# 2、 Factorialize a Number 对一个数进行阶乘

```javascript
function factorialize (num) {
  if (num===1||num===0){
      return 1;
  } else {
      return num*factorialize(num-1);
  }
}
factorialize(5);
```

# 3、Check for Palindromes 判断回文数

```javascript
function palindrome(str) {
    var str1 = str.replace(/[\W_]/g,"");
    if(str1.split("").reverse().join("").toLowerCase() == str1.toLowerCase()){
        return true;
    } else{
        return false;
    }
}
palindrome("eye");
```

# 4、Find the Longest Word in a String

英文描述： Return the length of the longest word in the provided sentence<br>
中文描述： 对所给的句子返回其中最长单词的字母数

```javascript
function findLongestWord(str) {
    var arr=str.split(" ");
    var arrNum=[];
    for(var i=0;i<arr.length;i++){
        arrNum.push(arr[i].length);
    }
    return Math.max.apply(null,arrNum);
}
findLongestWord("The quick brown fox jumped over the lazy dog");
```

# 5、Title Case a Sentence

对所给的句子中所有单词首字母大写，其余字母小写

```javascript
function titleCase(str) {
    var arr=str.split(" ");
    for(var i=0;i<arr.length;i++){
        var arr1=arr[i].toString().split("");
        for(var j=0;j<arr1.length;j++){
            if(j===0){
                arr1[j]=arr1[j].toUpperCase();
            } else{
                arr1[j]=arr1[j].toLowerCase();
            }
        }
        arr[i]=arr1.join("");
    }
    return arr.join(" ");
}
titleCase("I'm a little tea pot");
```

# 6、Return Largest Numbers in Arrays

英文描述：Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.<br>
中文描述：在一个数组中，其元素全为数组（二维数组），返回其每个数组中的最大值组成的数组

```javascript
function largestOfFour(arr) {
    var maxArr=[];
    for(var i=0;i<arr.length;i++){
        var max=Math.max.apply(null,arr[i]);
        maxArr.push(max);
    }
    return maxArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

# 7、Confirm the Ending

英文描述：Check if a string (first argument, str) ends with the given target string (second argument, target).<br>
中文描述：对所给的字符串（第一个参数）确认是否是以第二个参数结尾，是则返回true，否则返回false

```javascript
function confirmEnding(str, target) {
  var arr = str.split(" ");
  var arr1 = [];
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split("");
    arr1 = arr1.concat(arr2);
  }
  arr1 = arr1.reverse();
  var bool = true;
  target = target.split("");
  target = target.reverse();
  for (var j = 0; j < target.length; j++) {
    if (target[j] !== arr1[j]) {
      bool = false;
      break;
    }
  }
  return bool;
}
confirmEnding("Bastian", "n");
```

# 8、Repeat a string repeat a string

英文描述：Repeat a given string (first argument)num times (second argument). Return an empty string if num is a negative number.<br>
中文描述：对所给的字符串根据第二个数字参数重复次数

```javascript
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    str = "";
  } else {
    var arr = str.split("");
    var arr1 = [];
    for (var i = 0; i < num; i++) {
      arr1 = arr1.concat(arr);
    }
    str = arr1.join("");
  }
  return str;
}
repeatStringNumTimes("abc", 3);
```

# 9、Truncate a string

英文描述：Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.<br>
中文描述：对所给的字符串根据第二个参数进行添加...，如果第二个参数大于或者等于字符串的长度，则直接返回字符串；否则分为两种情况，如果第二个参数小于或等于3，则从开头截取第二个参数大小长度的字符串，再在末尾添加上...，否则，第二个参数作为返回字符串的长度，其中还包括末尾的...

```javascript
function truncateString(str, num) {
  var arr = str.split("");
  var arrTem = [];
  if (arr.length <= num) {
    for (var k = 0; k < arr.length; k++) {
      arrTem[k] = arr[k];
    }
    str = arrTem.join("");
  } else {
    if (num <= 3) {
      for (var i = 0; i < num; i++) {
        arrTem[i] = arr[i];
      }
      str = arrTem.join("") + "...";
    } else {
      for (var j = 0; j < num - 3; j++) {
        arrTem[j] = arr[j];
      }
      str = arrTem.join("") + "...";
    }
  }
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);
```

# 10、Chunky Monkey

英文描述：Write a function that splits an array (first argument) into groups the length ofsize (second argument) and returns them as a two-dimensional array<br>
中文描述：对所给的数组，根据第二个参数将其化为二维数组，其中第二个参数为作为元素的数组的长度

```javascript
function chunkArrayInGroups(arr, size) {
  var num = Math.floor(arr.length / size);
  var remainder = arr.length % size;
  var arrTem = [];
  for (var i = 1; i <= num; i++) {
    var arr1 = arr.slice(0, size);
    for (var j = 0; j < size; j++) {
      arr.shift();
    }
    arrTem.push(arr1);
  }
  if (remainder !== 0) {
    var arr2 = arr;
    arrTem.push(arr2);
  }
  return arrTem;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

# 11、Slasher Flick

英文描述：Return the remaining elements of an array after chopping off n elements from the head. The head means the beginning of the array, or the zeroth index.<br>
中文描述：对所给的数组，根据第二个参数进行截取操作，如果第二个参数大于数组的长度，则返回空数组，否则将返回第二个参数作为索引值之后的所有元素组成的数组

```javascript
function slasher(arr, howMany) {
  if (howMany >= arr.length) {
    arr = [];
  } else {
    arr.splice(0, howMany);
  }
  return arr;
}

slasher([1, 2, 3], 2);
```

# 12、Mutations

英文描述：Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.<br>
中文描述：对所给的一个含有两个元素的数组，检查第二个元素的所有字母是否都在第一个元素中出现过，是返回true，否则返回false，其中忽略大小写。

```javascript
function mutation(arr) {
  var str = arr[0].toString().toLowerCase();
  var chArr = arr[1].toString().split("");
  for (var i = 0; i < chArr.length; i++) {
    if (str.indexOf(chArr[i].toLowerCase()) < 0) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);
```

# 13、Falsy Bouncer

英文描述：Remove all falsy values from an array.<br>
中文描述：将一个数组中元素转化为布尔值为false的元素

```javascript
function bouncer(arr) {
  arr = arr.filter(isFalse);
  return arr;
}

function isFalse(num) {
  if (num) {
    return true;
  } else {
    return false;
  }
}
bouncer([7, "ate", "", false, 9]);
```

# 14、Seek and Destroy

英文描述：You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.<br>
中文描述：对所给的字符串根据参数删除这些元素

```javascript
function destroyer(arr) {
  var args = Array.prototype.slice.apply(arguments);
  var arrNum = args[0];
  for (var i = 1; i < args.length; i++) {
    var tem = args[i];
    arrNum = arrNum.filter(function (num) {
      if (num === tem) {
        return false;
      } else {
        return true;
      }
    });

  }
  return arrNum;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

# 15、Where do I belong

英文描述：Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.<br>
中文描述：将一个数组按照大小顺序插入一个数组中，返回其应该在的索引值

```javascript
function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      index = i + 1;
    }
  }
  return index;
}
getIndexToIns([40, 60], 50);
```

# 16、Caesars Cipher

英文描述：One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.<br>
中文描述：回转13位密码，点击这里查看定义

```javascript
function rot13(str) {
  var arr = [];
  var str1 = "";
  for (var i = 0; i < str.length; i++) {
    var codeNum = str.charCodeAt(i);
    if ((64 < codeNum) && (codeNum <= 77)) {
      codeNum = codeNum + 13;
    } else if ((77 < codeNum) && (codeNum < 91)) {
      codeNum = 13 - (90 - codeNum) + 64;
    }
    arr.push(codeNum);
  }
  for (var j = 0; j < arr.length; j++) {
    str1 += String.fromCharCode(arr[j]);
  }
  return str1;
}
rot13("SERR PBQR PNZC");
```

# 1\. Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.<br>
The lowest number will not always come first.<br>
求和给定数组约束范围内的所有数字

```javascript
function getMaxMin(arr, op) {
  if (op === "max") {
    return Math.max.apply(null, arr);
  } else {
    return Math.min.apply(null, arr);
  }
}

function sumAll(arr) {
  var sum = 0;
  var min = getMaxMin(arr, "min");
  var max = getMaxMin(arr, "max");
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
```

# 2\. Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.<br>
求两个给定数组的diff

```javascript
function diff(arr1, arr2) {
  var newArr = [];
  /*
  var tmpall = arr1.concat(arr2);
  for(var i=0,len=tmpall.length;i<len;i++){
  if(arr1.indexOf(tmpall[i]) != -1){
  //存在1里不存在2里
  if(arr2.indexOf(tmpall[i]) == -1){
  newArr.push(tmpall[i]);
  }
  }else {
  if(arr2.indexOf(tmpall[i]) != -1){
  newArr.push(tmpall[i]);
  }
  }
  }
  */
  arr1.filter(function (val) {
    if (arr2.indexOf(val) == -1) {
      newArr.push(val);
    }
  });

  arr2.filter(function (val) {
    if (arr1.indexOf(val) == -1 && newArr.indexOf(val) == -1) {
      newArr.push(val);
    }
  });
  return newArr;
}

diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//diff([3,4,5],[3,4,5,6]);
//diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

# 3\. Roman Numeral Converter

Convert the given number into a roman numeral.<br>
将给定数字转化为罗马数字

```javascript
function convert(num) {
  var tmp = num;
  //按位数做罗马数字-整数的映射
  var romanNum = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM", "", "", "", "", "", "", ""]
  ];
  var ret = [];
  var i = 0;
  //求总位数
  while (tmp) {
    i++;
    tmp = parseInt(tmp / 10);
  }
  var j = 0;
  while (num && j < i) {
    ret.push(romanNum[j][num % 10]);
    num = parseInt(num / 10);
    j++;
  }
  return ret.reverse().join("");
}
convert(12);
```

# 4\. Where art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.<br>
参数1给定一个若干对象构成的数组，参数2给定一个对象，算法需要从参数1中查找匹配参数2对象的所有对象并以数组形式输出。

```javascript
function where(collection, source) {
  var arr = [];
  // What's in a name?
  var orikey = "",
    orivalue = "";
  for (var key in source) {
    orikey = key;
    orivalue = source[key];
  }
  for (var i = 0, len = collection.length; i < len; i++) {
    for (var key in collection[i]) {
      if (key === orikey && orivalue === collection[i][key]) {
        arr.push(collection[i]);
      }
    }
  }
  return arr;
}

//where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

where([{
  "a": 1
}, {
  "a": 1
}, {
  "a": 1,
  "b": 2
}], {
  "a": 1
});
```

# 5\. Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.<br>
First argument is the sentence to perform the search and replace on.<br>
Second argument is the word that you will be replacing (before).<br>
Third argument is what you will be replacing the second argument with (after).<br>
执行查找和替换，将句子(参数1)中出现的词(参数2)用另一个(参数3)替换

```javascript
function isFirstUpper(str) {
  return /^[A-Z]/.test(str);
}

function firstToUpper(str) {
  return str.replace(/^[a-z]/, function (v) {
    return v.toUpperCase();
  });
}

function myReplace(str, before, after) {
  //判断待替换的单词是否是首字母大写，如果是则将替换的置为首字母大写
  if (isFirstUpper(before)) {
    after = firstToUpper(after);
  }
  return (str.replace(before, after));
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//myReplace("Let us go to the store", "store", "mall");
```

# 6\. Pig Latin

Translate the provided string to pig latin.<br>
将给定字符串翻译成"pig latin"形式。pig latin就是一个将单词形变的小游戏：将单词第一个字母移动到最后并添加"ay"结尾，如果单词以元音开头，则添加"way"结尾。

```javascript
function translate(str) {
  //遍历单词字符串，找到第一个元音字符，将其之前的字符暂存
  //然后将暂存字符搬到字符串最后并加上"ay"，如果存串为空，则直接加上"way"
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var tmp = [];
  for (var i = 0, len = str.length; i < len; i++) {
    if (vowel.indexOf(str[i].toLowerCase()) != -1) {
      break;
    } else {
      tmp.push(str[i]);
    }
  }
  if (i === 0) {
    return (str + "way");
  } else {
    return (str.substr(i).concat(tmp.join("")) + "ay");

  }
}

translate("alifornia");
```

# 7\. DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.<br>
DNA配对，DNA的配对形如"AT,CG"模式，亦即出现字母"A"则给之以"T"配对，以此类推。

```javascript
function pair(str) {
  var map = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };
  var arr = [];
  for (var i = 0, len = str.length; i < len; i++) {
    var value = map[str[i].toUpperCase()];
    arr.push([str[i], value]);
  }
  return arr;
}

pair("GCG");
```

# 8\. Missing letters

Find the missing letter in the passed letter range and return it.<br>
If all letters are present in the range, return undefined.<br>
查找并返回给定字符序列中缺失的字母，如"bcdef"应返回"a"。

```javascript
function fearNotLetter(str) {
  var arr = [];
  for (var i = 0, len = str.length; i < len; i++) {
    //均先转为小写字母后转为数字，起始为0
    var tmp = str[i].toLowerCase().charCodeAt(0) - 97;
    arr.push(tmp);
  }
  for (var j = 0, len2 = arr.length, k = arr[j]; j < len2; j++) {
    if (k != arr[j]) {
      //console.log(arr[j]);
      return String.fromCharCode(arr[j] + 97 - 1);
    }
    k++;
  }
}

fearNotLetter("bcd");
//fearNotLetter("abcdefghjklmno");
```

# 9\. Boo who

Check if a value is classified as a boolean primitive. Return true or false.<br>

```javascript
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === "boolean";
}

boo(null);
```

# 10\. Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.<br>
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.<br>
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.<br>
接收若干数组参数，返回所有不重复的数组元素并按接收参数的顺序排列。

```javascript
function unite() {
  if (arguments.length === 1) {
    return arguments[0];
  }
  var arr = [],
    res = [];
  for (var i = 0, len = arguments.length; i < len; i++) {
    arr = arguments[i];
    for (var j = 0; j < arr.length; j++) {
      //如果结果数组中不存在该值则放入数组
      if (res.indexOf(arr[j]) === -1) {
        res.push(arr[j]);
      }
    }
  }
  return res;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

# 11\. Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.<br>
将HTML的特殊字符转义

```javascript
function convert(str) {
  // :)
  return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/\"/g, ""
    ").replace(/\'/g,"
    '");
  }

  convert("Hamburgers < Pizza < Tacos");
```

# 12\. Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.<br>
字符串格式变换，将给定的字符串用"-"连接起来。

```javascript
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //return str.toLowerCase().replace(/[^a-zA-Z]/g," ").replace(/\s/g,'-');
  if (!/[^a-zA-Z]/.test(str) && str.indexOf(" ") === -1) {
    var res = "";
    for (var i = 0, len = str.length; i < len; i++) {
      if (/[A-Z]/.test(str[i])) {
        var tmp = " " + str[i];
        res += tmp;
      } else {
        res += str[i];
      }
    }
    str = res;
  }
  return str.toLowerCase().replace(/[^a-zA-Z]/g, " ").replace(/\s/g, '-');
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
```

# 13\. Sum All Odd Fibonacci Numbers

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.<br>
求和给定参数内的所有奇Fibonacci数的和。Fibonacci数是后一个数字等于前两个数字和的形式的数列。

```javascript
/* 递归方式
* function fibNums(num){
//返回所有小于num的fib数
if(num <= 2){
return 1;
}else {
return fibNums(num-2) + fibNums(num-1);
}
}*/
function fibNums(num) {
  //非递归方式
  var tmp = [1, 1];
  if (num <= 2) {
    return 1;
  }
  for (var i = 3; i <= num; i++) {
    var t = tmp[0] + tmp[1];
    tmp[1] = tmp[0];
    tmp[0] = t;
  }
  return tmp[0];
}

//求小于num的fibnacci数
function sumFibs(num) {
  var sum = 0;
  for (var i = 1; fibN = fibNums(i), fibN <= num; i++) {
    if (fibN % 2) {
      sum += fibN;
    }
  }
  return sum;
}

sumFibs(1000);
```

# 14\. Sum All Primes

Sum all the prime numbers up to and including the provided number.<br>
求和给定参数内的所有素数。

```javascript
function isPrime(num) {
  var sum = 0;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    sum += i;
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//后续算法改进
function sumPrimes(num) {
  var sum = 0;
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);
```

# 15\. Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.<br>
给定一个参数数组，返回数组序列内所有数字的最小公倍数。如给定[1,5]，则需要返回"1,2,3,4,5"的最小公倍数。

```javascript
function smallestCommon(m, n) {
  var max = m > n ? m : n;
  for (var i = max;; i += max) {
    if ((i % m === 0) && (i % n === 0)) {
      return i;
    }
  }
}

//分治给出数组的最小公倍数
function divide2solve(arr) {
  if (arr.length === 1) {
    return smallestCommon(1, arr[0]);
  }
  var mid = arr.length / 2;
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  var leftCommon = divide2solve(left);
  var rightCommon = divide2solve(right);
  return smallestCommon(leftCommon, rightCommon);
}

function smallestCommons(arr) {
  var res = [];
  var start = arr[0] < arr[1] ? arr[0] : arr[1],
    end = arr[0] < arr[1] ? arr[1] : arr[0];
  for (; start <= end; start++) {
    res.push(start);
  }
  return divide2solve(res);
}

smallestCommons([1, 5]);
```

# 16\. Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).<br>
给定两个参数，第一个参数是一个数组，第二个参数是一个测试函数，算法需要返回满足该测试函数的第一个数组元素。

```javascript
function find(arr, func) {
  var res = arr.filter(func);
  if (res.length) {
    return res[0];
  }
  return undefined;
}

find([1, 2, 3, 4], function (num) {
  return num % 2 === 0;
});
find([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});
```

# 17\. Drop it

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.<br>
给定两个参数，第一个参数是一个数组，第二个参数是一个测试函数，算法需要以数组形式弹出满足测试函数的数组元素。

```javascript
function drop(arr, func) {
  // Drop them elements.
  var tmp;
  var res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    tmp = arr.shift();
    if (func(tmp)) {
      //需要置回弹出的元素
      arr.unshift(tmp);
      break;
    }
  }
  return arr;
}

drop([1, 2, 3], function (n) {
  return n < 3;
});
drop([1, 2, 3, 5], function (n) {
  return n > 5;
});
```

# 18\. Steamroller

Flatten a nested array. You must account for varying levels of nesting.<br>
"Steamroller",压路机，很形象，将一个嵌套多层的数组扁平化，亦即接受多层嵌套的数组，输出无嵌套数组，且输出数组的元素为输入嵌套的数组元素。

```javascript
function steamroller(arr, flatArr) {
  if (!flatArr) flatArr = [];

  for (var i in arr) {
    if (!Array.isArray(arr[i])) {
      flatArr.push(arr[i]);
    } else {
      steamroller(arr[i], flatArr);
    }
  }

  return flatArr;
}

steamroller([1, [2],
  [3, [
    [4]
  ]]
]);
```

# 19\. Binary Agents

Return an English translated sentence of the passed binary string.<br>
翻译给定的二进制串，给定一串01串，输出表示的句子。

```javascript
function trans(str) {
  var sum = 0;
  for (var i = 0, len = str.length; i < len; i++) {
    (function (index) {
      sum += str[index] * Math.ceil(str[index] * Math.pow(2, len - 1 - index));
    })(i);
  }
  return sum;
}

function binaryAgent(str) {
  var res = "";
  var arr = str.split(" ");
  for (var i in arr) {
    var ret = trans(arr[i]);
    res += String.fromCharCode(ret);
  }
  return res;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//binaryAgent("01000001");
```

# 20\. Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).<br>
给定两个参数，第一个参数是一个对象数组，第二个参数是一个字符串，算法需要判断参数1的对象数组是否都有参数2对应的key且对应的value值为true。

```javascript
function every(collection, pre) {
  for (var i in collection) {
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
}

//every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
every([{
  "user": "Tinky-Winky",
  "sex": "male",
  "age": 0
}, {
  "user": "Dipsy",
  "sex": "male",
  "age": 3
}, {
  "user": "Laa-Laa",
  "sex": "female",
  "age": 5
}, {
  "user": "Po",
  "sex": "female",
  "age": 4
}], "age");
```

# 21\. Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.<br>
js可选参数问题，题干要求求和给定的两个参数，如果只给定了一个参数，则返回一个可以再接收一个参数进行求和的函数。

```javascript
function isNum(val) {
  return typeof val === "number";
}

function add(x) {
  if (arguments.length == 1) {
    if (!isNum(x)) {
      return undefined;
    }
    return function (y) {
      if (!isNum(y)) {
        return undefined;
      }
      return x + y;
    };
  }
  if (!isNum(arguments[1])) {
    return undefined;
  }
  return arguments[0] + arguments[1];
}

add(2)([3]);
```
