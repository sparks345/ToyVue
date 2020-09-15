import { Observer } from './js/observer.js';
import { Watcher } from './js/watcher.js';
import { Compile } from './js/compile.js';
import { SelfVue } from './js/index.js';

// let data = {name: 'Abner'};
// let ob = new Observer(data);
// console.log(ob.data.name);
// ob.walk(data);
// ob.defineReactive(data, 'name', 'Abner');

    // let ob = new Observer();
    let selfVue = new SelfVue({
        el: '#app',
        data: {
            title: 'Hello World',
            msg: 'hello'
        }
    })
    setTimeout(function () {
        selfVue.title = '你好';
        console.log(selfVue.title);
    }, 2000);
 
    setTimeout(function () {
        selfVue.msg = 'canfoo';
        console.log(selfVue.msg);
    }, 2500);
// let wa  = new Watcher());