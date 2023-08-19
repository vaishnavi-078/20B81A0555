const express = require('express');
const app = express();
//app.use(express.json());
// function split(str,seperator){
//     let string= str.split(seperator);
//     return string;
// }
var receivedUrl;
var numberArr=[];
app.listen(9998,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});
async function myfunction(a){
    var str = a.split('=');
    var res223 = str[1];
    const res = await fetch(res223);
    var data = await res.json();
    var num = data.numbers;
    const temp = numberArr.reduce((arr,item)=>{
        arr.push(item);
        return arr;
    }, num)
    numberArr = temp;
    //console.log(num);
    
}
console.log(numberArr);
app.get('*', function(req,res){
    const protocol = req.protocol;
    const host= req.hostname;
    const url = req.originalUrl;
    const fullUrl = `${protocol}://${host}:${url}`
    receivedUrl= fullUrl;
    console.log(fullUrl);
    var arr= fullUrl.split('?');
    console.log(arr);
    var arr2=arr[1].split("&");
    console.log(arr2);
    arr2.forEach(myfunction);
    var resss= removeDupi(numberArr);
    res.send(resss);
})
function removeDupi(numberArr){
    return [...new Set(numberArr)];
}

console.log(receivedUrl);
var arr;
if(typeof(receivedUrl)!== 'undefined'){
    arr= receivedUrl.split('?');

}
console.log(arr);