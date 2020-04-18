//longhand 
function sayhello(name){
    console.log('hello',name);
}
setTimeout(function(){
    console.log('loaded');
},2000);
List.forEach(function (item) {
    console.log(item);
    
});

//shorthand 
sayhello=name=>console.log('hello',name);
setTimeout(()=>console.log('loaded'),2000);
List.forEach(item=>console.log(item));