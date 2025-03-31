<template>
  <p>home</p>
</template>

<script setup>
function Promise(exector) {
  this.PromiseState = "pending";
  this.PromiseResult = undefined;
  this.callbackFn = [];
  const self = this; // 修复：使用 const 声明

  function resolve(data) {
    if (self.PromiseState !== "pending") return;
    self.PromiseState = "fulfilled"; // 标准使用 "fulfilled" 而非 "resolved"
    self.PromiseResult = data;

    setTimeout(() => {
      self.callbackFn.forEach((item) => {
        item.onResolved(data);
      });
    });
  }

  function reject(data) {
    if (self.PromiseState !== "pending") return;
    self.PromiseState = "rejected";
    self.PromiseResult = data;

    setTimeout(() => {
      self.callbackFn.forEach((item) => {
        item.onRejected(data);
      });
    });
  }

  try {
    exector(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  const self = this;

  // 处理值穿透
  if (typeof onResolved !== "function") {
    onResolved = (value) => value;
  }
  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw reason;
    };
  }

  return new Promise((resolve, reject) => {
    function handleCallback(callback) {
      try {
        const result = callback(self.PromiseResult);
        if (result instanceof Promise) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }

    if (self.PromiseState === "fulfilled") {
      setTimeout(() => {
        handleCallback(onResolved);
      });
    } else if (self.PromiseState === "rejected") {
      setTimeout(() => {
        handleCallback(onRejected);
      });
    } else if (self.PromiseState === "pending") {
      self.callbackFn.push({
        onResolved: () => handleCallback(onResolved),
        onRejected: () => handleCallback(onRejected),
      });
    }
  });
};

Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(resolve, reject);
    } else {
      resolve(value);
    }
  });
};

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const results = new Array(promises.length);

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          results[index] = value;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return; // 永远pending
    }

    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject);
    });
  });
};

// 基本功能测试
const p1 = new Promise((resolve, reject) => {
  resolve("success");
});
p1.then((value) => {
  console.log(value); // 应该输出: success
  return "chain1";
}).then((value) => {
  console.log(value); // 应该输出: chain1
});

// 异步测试
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("async success"), 100);
});
p2.then((value) => {
  console.log(value); // 应该输出: async success
});

// 错误处理测试
const p3 = new Promise((resolve, reject) => {
  reject("error");
});
p3.then(null, (reason) => {
  console.log(reason); // 应该输出: error
}).catch((e) => {
  console.log("caught:", e); // 不应该执行
});

// 值穿透测试
const p4 = Promise.resolve("penetrate");
p4.then()
  .then()
  .then((value) => {
    console.log(value); // 应该输出: penetrate
  });

// Promise.all 测试
const p5 = Promise.resolve(1);
const p6 = Promise.resolve(2);
const p7 = Promise.resolve(3);
Promise.all([p5, p6, p7]).then((values) => {
  console.log(values); // 应该输出: [1, 2, 3]
});

// Promise.race 测试
const p8 = new Promise((resolve) => setTimeout(() => resolve("fast"), 50));
const p9 = new Promise((resolve) => setTimeout(() => resolve("slow"), 100));
Promise.race([p8, p9]).then((value) => {
  console.log(value); // 应该输出: fast
});

// 链式调用测试
const p10 = new Promise((resolve) => resolve(1));
p10
  .then((value) => {
    console.log(value); // 1
    return new Promise((resolve) => resolve(value + 1));
  })
  .then((value) => {
    console.log(value); // 2
    return new Promise((resolve, reject) => reject("error in chain"));
  })
  .catch((reason) => {
    console.log(reason); // error in chain
    return "recovered";
  })
  .then((value) => {
    console.log(value); // recovered
  });
</script>

<style>
</style>