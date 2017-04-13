(function(){

    function demo(){
        let str = `引入window的function`
        console.log(str);
    }
    window.demo = demo
})(window)

// module.exports = demo