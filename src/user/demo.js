import 'assets/css/react.scss'

//Genneroter 迭代器
const generators = [{
    no: 1,
}, {
    no: 2,

}, {
    no: 3
},
{
    no: 4
}
]
function* generoter() {

    yield new Promise((resolve) => {
        resolve(generators[0])
    })

    //循环生成 迭代
    for (let i = 1; i < generators.length; i++) {

        //暂停时 传递到value中 yield 会将值抛给外部
        yield generators[i]

    }
    //不会被执行
    return { no: 6 }

}
function fn() {

    //声明一个迭代
    const g = generoter()

    //读取 promise //1
    g.next().value.then((v) => {
        console.log('promise', v)
    })
    //直接获取值 //2
    console.log('g', g.next().value);

    //执行方法 //3
    console.log('g', g.next());
    console.log('g', g.next().value);//4
    g.next();//不执行

    //新的迭代
    const a = generoter()
    console.log('a', a.next().value);//first
}

