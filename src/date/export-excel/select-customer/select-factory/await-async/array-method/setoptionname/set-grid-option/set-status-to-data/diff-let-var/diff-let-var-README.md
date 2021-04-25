#let,var差異
var 變數的範圍在 function
let 的作用域在 block
除了 function 以外 if、for 的 {} 都屬於 let 的作用域

#const
不可以再做修改的變數(常數)
#物件依然是參考

#JavaScript 的原型繼承
#共用原型
#強制將函式寫到了 物件 這個原型上，所以新增的物件都會 共用 此屬性。
#我們對任一陣列原型加入新的函式，此時兩個陣列都可以套用此函式，但對於物件來說卻不能執行此方法，因為在原型鍊上物件屬於陣列的頂端

#JavaScript Function 與 Hoisting
Hoisting 在 JavaScript 僅是一個觀念，主要是在說明變數、函式在宣告期間就會先建立一個記憶體空間，等到實際運行時再將值放入到該記憶體空間內。不過為了確保程式的穩定性

#Hoisting 這個觀念主要是要了解 JavaScript 記憶體運作的觀念，實作上也會避免在 function 前方直接呼叫函式，這樣會降低對於程式碼的可維護性。


#JavaScript 的嚴格模式 "use strict"
嚴謹模式也能僅用在函式內，這樣將只有此函式套用。
只有將 'use strict' 放在函式開頭才會有作用

@‘use strict’ 及 this
在先前介紹 this 的時有介紹到不同的呼叫方法，在 ‘use strict’ 的環境下的 純粹的調用 (Simple call) 的 this 不在是全域變數。

@還有一種情況就是傳入的並非數值而是字串，這樣則會造成金額也自動轉換成字串。
#ES6 預設函式變數
#arguments

#JavaScript 閉包
