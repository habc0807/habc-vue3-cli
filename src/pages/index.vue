<template>
  <div>indexpage</div>
  <Card />
  <default-layout></default-layout>
</template>

<route lang="yaml">
meta:
layout: default
</route>

<script setup>
// import { ref } from "vue";
// let num = ref(100);
// let add = () => {
//   console.log(num.value);
//   console.log("------");
//   num.value++;
// };
// 思路
// 1. 声明Promise构造函数，添加then方法
// 2. Promise构造函数接收exector执行器函数，同步调用exector
// 3. exector执行时接收两个参数 分别是resolve和reject函数
// 4. 实现resolve函数，需要两个功能 1.修改对象的状态 PromiseState 2.设置对象结果值 promiseResult
// 5. 给Promise构造函数添加这两个属性，并且实现reject函数
// 6. exector内有异常时，需要try catch 捕获 并且在catch里 改变PromiseState
// 7.

// 声明构造函数
function Promise(exector) {
  // 添加属性
  this.PromiseState = "pending";
  this.PromiseResult = null;
  const self = this;

  function resolve(value) {
    // 1.修改对象的状态 PromiseState
    self.PromiseState = "resolved";

    // 2.设置对象结果值 promiseResult
    self.PromiseResult = value;
  }

  function reject(reason) {
    console.log(self);
    // 1.修改对象的状态 PromiseState
    self.PromiseState = "rejected";

    // 2.设置对象结果值 promiseResult
    self.PromiseResult = reason;
  }

  try {
    // 同步调用执行器函数
    exector(resolve, reject);
  } catch (e) {
    // 修改 promise 对象为失败
    reject();
  }
}

// 添加then方法
Promise.prototype.then = function (onResolved, onRejected) {};

let p = new Promise((resolve, reject) => {
  reject("ok");
});

p.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.warn(reason);
  }
);
</script>


