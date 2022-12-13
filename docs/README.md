---
lang: zh-TW
title: 自動化股票記帳
description: 簡單3步驟建立個人股票管理表。打開試算表的同時即自動抓取股票現價，計算持有股票的各種損益並自動更新圖表，可一鍵更新不需複雜操作
home: true
# heroImage: /images/台股收費版-儀表板.jpg
heroText: 全自動股票管理表
tagline: 一份專為懶人而生的股票管理表，讓你輕輕鬆鬆管理股票
actionText: 快速上手 →
actionLink: /StockProfolioDocs/

actions:
  - text: 快速上手 →
    link: /StockProfolioDocs/QuickStart/第一次使用.md
    type: primary
  - text: 試算表預覽
    link: /StockProfolioDocs/QuickStart/介紹.md#各版本預覽
    type: secondary
#  - text: Blog
#    link: /Blog
#    type: secondary

features:
- title: 自動更新股票成交價
  icon: cloud-arrow-down
  # icon: rotate
  details: 開啟試算表後會自動更新股票最新成交價(非即時)，並以新的成交價做各種後續計算。
- title: 多種視覺化圖表
  icon: chart-column
  # icon: chart-bar
  # icon: chart-pie
  details: 輕鬆享受多種圖表化的數據，持股比例、賺賠一目了然，且無須動手，當股票價格有變動時圖表會自動更新。
- title: 自動化計算
  icon: calculator
  details: 自動計算多項數據，交易成本(交易稅、手續費)、各項報酬率(已實現損益、未實現損益)等等
- title: 一鍵更新
  icon: arrow-pointer
  # icon: hand-pointer
  # icon: computer-mouse
  details: 操作簡單，每次紀錄完新的交易資料後，只需按一次「更新交易紀錄」按鈕，便可更新各項數據及圖表。
- title: 輕鬆管理多家券商
  icon: landmark
  # icon: building-columns
  details: 靈活的設計，可以同時管理不同的券商並依照券商不同的折讓手續費各別設定，還能看各券商/分類的占比圖。
- title: 自動記錄市值變化
  icon: chart-line
  # icon: arrow-trend-up
  details: 每周五盤後，會將當下的成本、市值、未實現損益等記錄下來。當時間拉長，可以觀察到自己投資的曲線變化，是付費版的其中一個大功能！

# footer: MIT Licensed | Copyright © 2018-present Evan You
---

### 只要3步驟，讓管理股票像數 1, 2, 3 一樣容易

#### 1. 點選連結 [`台股免費版-建立副本用`](https://docs.google.com/spreadsheets/d/1rchpA3W-BlDn8BZOhQ1uiUPnuHLb4UZ65iLzjHb-cp0/copy) → 點選按鈕 `建立副本`
   ::: tip 台股收費版： 在確認收款後將會透過Google寄出系統email，信件內含可建立台股收費版的連結
   :::

#### 2. 給自己的管理表一個新的名子
   ::: tip 將「全自動股票管理表 | 免費版 - 副本」← 改名
   :::

#### 3. 啟用一鍵更新 ( 含自動取價 )
   - 在試算表內點選【儀表版】分頁的按鈕 <Badge text="更新交易紀錄" vertical="middle"/> → 點選 __「進階」__ → 點選  __「前往取得股票現價(不安全)」__ → 點選按鈕 <Badge text="允許" vertical="middle"/>
   - 允許後==再次==點選【儀表版】分頁的按鈕 <Badge text="更新交易紀錄" vertical="middle"/>，確認功能正常
   
   ::: details 啟用示意圖
   1. 在試算表內點選【儀表版】分頁的按鈕 <Badge text="更新交易紀錄" vertical="middle"/>

   ![儀表板按鈕](/images/更新交易紀錄按鈕.jpg)

   2. 點選 __「進階」__ (未經驗證部分可參考 [補充說明](#補充說明))

   ![授權步驟1](/images/授權步驟1.jpg)

   3. 點選  __「前往取得股票現價(不安全)」__

   ![授權步驟2](/images/授權步驟2.jpg)

   4. 點選按鈕 <Badge text="允許" vertical="middle"/>

   ![授權步驟3](/images/授權步驟3.jpg)
   :::

#### 💡 完成以上3步驟即可開始使用

---

#### 補充說明

  :::warning 為了使試算表能更加方便，有寫入一些程式碼做輔助
  ex.「抓取現價」「一鍵更新」「台股收費版的自動記錄並圖表化」等，這些功能會需要相應的授權才能使用

  此範本已有眾多的人在使用，程式碼也有經過他人的建議和檢核請放心使用

  ps. 即使如此仍有疑慮的話，請勿使用此範本
  :::
