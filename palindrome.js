let str="madam"
let con="";
for(i=str.length-1;i>=0;i--){
    con+=str[i];
}
if(con!==str){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}