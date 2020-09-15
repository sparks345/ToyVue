import { Dep } from './observer.js';
import { depContainer } from '../main.js';
export class Watcher {
    constructor(vm, exp, cb) {
        this.cb = cb;
        this.vm = vm;
        this.exp = exp;
        this.value = this.get();
        // this.depContainer = new Dep();
    }
    update() {
        this.run();
    }
    run() {
        let value = this.vm.data[this.exp];
        let oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }
    get() {
        // new Dep().target = this;
        depContainer.target = this;
        let value = this.vm.data[this.exp];
        // new Dep().target = Object.create(null);
        // depContainer.target = Object.create(null);
        return value;
    }
}
// function Watcher(vm, exp, cb) {
//     this.cb = cb;
//     this.vm = vm;
//     this.exp = exp;
//     this.value = this.get();  // 将自己添加到订阅器的操作
// }

// Watcher.prototype = {
//     update: function() {
//         this.run();
//     },
//     run: function() {
//         var value = this.vm.data[this.exp];
//         var oldVal = this.value;
//         if (value !== oldVal) {
//             this.value = value;
//             this.cb.call(this.vm, value, oldVal);
//         }
//     },
//     get: function() {
//         Dep.target = this;  // 缓存自己
//         var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
//         Dep.target = null;  // 释放自己
//         return value;
//     }
// };