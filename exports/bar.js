// exports本身就只是module.exports的引用，而使用require加载模块的时候返回的是module.exports，exports=bar改变了exports的引用，所以最终返回的module.exports只是一个空对象
var bar = function(){
    console.log('it is bar');
};


module.exports = bar