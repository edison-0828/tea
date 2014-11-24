// 1.创建模块
// var module = require('./kaifazhinan');
// module.setName('reacher');
// module.sayHello();

// 2.封装对象
var module = require('./kaifazhinan');
// module.hello.setName('reacher');
var obj = new module();

console.log(this,module.toString());
obj.setName('reacher');
obj.sayHello();