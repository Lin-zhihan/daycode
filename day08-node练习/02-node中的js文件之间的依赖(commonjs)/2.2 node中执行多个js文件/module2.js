// module2中依赖module1的代码,所以要在module2中导入module1的代码
const module1 = require('./module1')
module1.fn()
console.log(module1)

//module1.fn()

function fn2() {
  console.log('module2的fn2函数')
}

function fn222() {
  console.log('module2222的fn2函数')
}

 module.exports.fn2 = fn2
 module.exports.fn222 = fn222

