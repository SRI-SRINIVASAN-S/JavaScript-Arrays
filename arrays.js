//Arrays in JS basic & methods etc., (: Haapy learning 

//An array can be created in 2 methods [] , new Array.

let arry ;
arry =['srini','vasan','sarguna','sai']

let array;
array =new Array(1,2,3,4,5,6)

console.log(arry)
console.log(array)

//Access element in array

const arr =new Array('srini','sai','gvith','kanshi')
console.log(arr[0])
console.log(arr[2])

// access array into array
console.log(arr[1][1])

// length of an array 
console.log(arr.length) 


//To  Add an ELEMENT to an array there are 2 methods push()--> last add, unshift()-->front add ;

let sai;
sai =[1,2,3,4,5,6,7]
sai.push(8)
console.log(sai)

let arrays;
arrays =new Array('i am  going ','to','home','tomorrow')
arrays.unshift('what?')
console.log(arrays)

//Change element's in an array

let para;
para =['we','do','learn','more']
para[4]='here'
console.log(para)

//5th iteam undefined (If you try to add an element at index 6 (fifth element), the fifth element will be undefined.

let par;
par =['i','am','srini','vasan','sarguna']
par[6]='the man'
console.log(par)

//Remove element fron an array 2 methods pop()-->last remove , shift()-->1st remove ;
var div =new Array(1,2,3,4,5,'srini')
div.pop()
console.log(div)

var html =[1,2,3,4,5,6]
html.shift()
console.log(html)

//array length --> You can find the length of an element (the number of elements in an array) using the length property.

var img;
img =new Array(1,2,3,4,5,6)
console.log(img.length)

// operators
//concat()--> join two or more string return result ;

let heros =['rock','john']
let villans =['enemy','badman']
let all =heros.concat(villans)
console.log(all)

//Indexof() --> searches an element of an array and return it's position.

let jj =[1,2,3,4,5,6,7]
let qq =jj.indexOf(3)
console.log(qq)

// Sort --> sorts an element alphabetically in string and in ascending order.

var tt =['e','d','c','b','a']
var ee =tt.sort(ee)
console.log(ee)

var oo =[5,4,3,2,1]
var pp =oo.sort(pp)
console.log(pp)

//slice --> selects the parts of an array and returns the new array. 

var xx =['bmw','volvo','audi','tata','toyato','datsun']
   //      0       1    2       3       4       5
let yy =xx.slice(1,5)
console.log(yy)

//Splice --> Remove or replaces existing element and add new elements.

var ww =['bmw','volvo','audi','landrover','ford','datsun']    //Here from index of 2 the 1(audi) will be removed 
    //     0       1     2         3         4       5
ww.splice(2,1)
console.log(ww)

// Creating an MULTIDIMENSIONAL ARRAY --> Inside of an array [] we will creating an array .

let studentdata =[['randy',20],['rey',19],['otis',98]]  
console.log(studentdata)

//access MULTIDIMENSIONAL ARRAY --> You can access the elements of a multidimensional array using indices
         //     0           1            2
var stu1 =[['sri',20],['deepak',19],['prem',98]]
        //   0    1       0      1     0    1
var stu2 =stu1[1][1]
console.log(stu2)

//Adding Element to the Outer Array using push()   --> add element to last 
var data1 =[['sri',20],['deepak',19],['prem',98]]
data1.push(['kumar',18])
console.log(data1)

//Adding Element to the Outer Array using unshift() -->  add element to 1st 
var data3 =[['sri',20],['deepak',19],['prem',98]]
data3.unshift(['kanchi',41])
console.log(data3)

//Adding Element to the Inner Array
var data4 =[['head',20],['eye',19],['brain']]
data4[2][1]='power'
console.log(data4)

//Remove the element from a multidimensional array.
//Remove element from outer array 

const server1 =[['Jack', 24], ['Sara', 23]]
server1.pop()
console.log(server1)

//This all about arrays in javascript THANK YOU :)