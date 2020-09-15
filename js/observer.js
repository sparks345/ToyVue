// 监听器，主要用于监听所有的属性，当有属性变化时，通知订阅者 Watcher
// function Observer(data) {
//     this.data = data;
//     this.walk(data);
// }
import { Watcher } from './watcher.js';
export class Observer {
    constructor(data) {
        this.data = data;
        this.walk(this.data);
    }
    walk(data) {
        let self = this;
        Object.keys(data).forEach((key) => {
            self.defineReactive(data, key, data[key]);
        })
    }
    defineReactive(data, key, val) {
        let dep = new Dep();
        let childObj = this.observe(val);
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function getter() {
                console.log('Observer.get');
                if (dep.target) {
                    dep.addSub(dep.target);
                }
                return val;
            },
            set: function setter(newVal) {
                console.log('Observer.set: ' + newVal);
                if (newVal === val) {
                    console.log('no notify');
                    return ;
                } else {
                    val = newVal;
                    console.log('notify');
                    dep.notify();
                }
            }
        })
    }
    observe(value, vm) {
        if (!value || typeof value !== 'object') {
            return ;
        } else {
            return new Observer(value);
        }
    }
}

export class Dep {
    constructor() {
        this.subs = [];
        // this.target = Object.create(null);
    }
    addSub(sub) {
        this.subs.push(sub);
    }
    notify() {
        console.log(this.subs);
        this.subs.forEach((sub) => {
            console.log(typeof sub);
            sub.update();
        })
    }
}
// Observer.prototype = {
//     walk: function(data) {
//         var self = this;
//         Object.keys(data).forEach(function(key) {
//             self.defineReactive(data, key, data[key]);
//         });
//     },
//     defineReactive: function(data, key, val) {
//         var dep = new Dep();
//         var childObj = observe(val);
//         Object.defineProperty(data, key, {
//             enumerable: true,
//             configurable: true,
//             get: function getter () {
//                 if (Dep.target) {
//                     dep.addSub(Dep.target);
//                 }
//                 return val;
//             },
//             set: function setter (newVal) {
//                 if (newVal === val) {
//                     return;
//                 }
//                 val = newVal;
//                 dep.notify();
//             }
//         });
//     }
// };

// function observe(value, vm) {
//     if (!value || typeof value !== 'object') {
//         return;
//     }
//     return new Observer(value);
// };

// function Dep () {
//     this.subs = [];
// }
// Dep.prototype = {
//     addSub: function(sub) {
//         this.subs.push(sub);
//     },
//     notify: function() {
//         this.subs.forEach(function(sub) {
//             sub.update();
//         });
//     }
// };
// Dep.target = null;