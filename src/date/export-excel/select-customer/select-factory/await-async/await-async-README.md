// Await 等待
Promise 中完成會透過 then 來回傳，在 await 中他則是會等待這段函式完成後在往下繼續執行，這是一個卡住的概念。

不是像 Promise 中的 race() 或 all() 的全部一起執行的方式，而是一段執行後才執行下一段。

// 同時進行
雖然 await 是逐一執行的概念，不過它也是能夠與 Promise.all() 同時使用。

//Async
async 本身也是類似 Promise，在正確執行的情況下 return 會傳回 resolved 的狀態，也可以使用 then 來接收正確的資料。

錯誤
當 async 被呼叫時他會回傳一個 Promise，如果正確的運行這個 Promise 會回傳一個 resolved (正確的運行)，如果函式無法正確地完成，則會拋出錯誤的 rejected。

// Promise 的狀態與流程
pending: 等待中的初始狀態
fulfilled: 正確完成
rejected: 已拒絕，操作失敗

// 使用 Promise.race 傳入多個 promise 事件，這個方法僅會回傳第一個完成的事件
// Promise.all() 會 同時執行 以下 Promise，在全部完成後統一回傳陣列，這個陣列的內容也是 promise 中 resolve 的內容。
// 不過如果 all() 其中有事件 reject，那麼此 promise 也均視為失敗 (catch)。

// Chain 鏈接方法
then() 所 turn 的資料內容會在下一個 then 接收，用此方法就可以減少 Callback 問題，也可以依序執行不同的 promise 事件。

//Fetch
fetch 會使用 ES6 的 Promise 作回應
then 作為下一步
catch 作為錯誤回應 (404, 500…)

arrayBuffer()
blob()   //將資料轉成物件   
formData()
json()
text()  // 轉成文字檔
