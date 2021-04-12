// foreach
除了 forEach 以外的幾個方法都會回傳陣列或一個值
// filter
filter 可以用來過濾陣列中符合條件的物件
// find
find 是用來搜尋陣列中符合條件的物件，且僅能有一個，當回傳 true 數量超過兩者以上，那會以第一個為優先，通常會適合搜尋來搜尋特定 id。
// map
map 會回傳 return 的物件、值，功用上是用來處理陣列回傳新值產生一個新陣列，要特別注意回傳的值數量與原始陣列長度相同，所以留空的 return 則會產生 undefined。
// every
驗證全部的結果，當全部的值都為 true 時，則最終會得到 true；只要其中之一為 false，則回傳為 false。
// some
與前者類似，但只要部分為 true，則回傳為 true；全部為 false 則才會為 false。

//reduce
reduce 是其中最為特別的，首先他回傳的參數與先前的不同，他會接收到前一個回傳的值供下一個物件使用，很適合用在累加與比對上，以下提供不同範例供參考。

accumulator: 前一個參數，如果是第一個陣列的話，值是以另外傳入或初始化的值
currentValue: 當前變數
currentIndex: 當前索引
array: 全部陣列



