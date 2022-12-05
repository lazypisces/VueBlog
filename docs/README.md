---
lang: zh-TW
title: 首頁
description: 一份專為懶人而生的股票管理表。功能豐富、完整，還自動化!! 讓你輕輕鬆鬆管理股票
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
  icon: rotate 
  details: 開啟後會自動抓取最新成交價(非即時)，並轉換成各種損益計算和圖表。
- title: 多種視覺化圖表
  icon: chart-bar
  details: 享受一切數據自動計算並與圖表連動，一開啟便自動更新圖表數據。
- title: 自動計算損益&報酬率
  icon: calculator
  details: 依據最新抓取的各檔股票成交價，計算 已/未實現的損益和報酬率，並將其圖表化。
- title: 一鍵更新
  icon: arrow-pointer
  # icon: computer-mouse
  details: 每次有新的交易要做紀錄時，提供一個按鈕。點按後就可以更新所有圖表和計算的功能。
- title: 輕鬆管理多家券商
  icon: building-columns
  # icon: shop
  details: 靈活的設計使的本表可以同時管理不同的券商並設定不同的折讓手續費，也能看各券商/分類的占比圖。
- title: 自動記錄市值變化
  icon: arrow-trend-up
  details: 每周五盤後，會將當下的成本、市值、未實現損益等記錄下來。當時間拉長，可以觀察到自己投資的曲線變化，是付費版的其中一個大功能！

footer: MIT Licensed | Copyright © 2018-present Evan You
---

### 只要3步驟，讓管理股票像數 1, 2, 3 一樣容易

#### 1. 點選連結 [`建立副本用`](https://docs.google.com/spreadsheets/d/1rchpA3W-BlDn8BZOhQ1uiUPnuHLb4UZ65iLzjHb-cp0/copy) → 點選按鈕 `建立副本`
   ::: tip 收費版： 在確認收款後將會透過Google寄出系統email，信件內含可建立收費版的連結
   :::

#### 2. 給自己的管理表一個新的名子
   ::: tip 將「全自動股票管理表 | 免費版 - 副本」← 改名
   :::

#### 3. 啟用一鍵更新 ( 含自動取價 )
   - 在試算表內點選【儀表版】分頁的按鈕 <Badge text="更新交易紀錄" vertical="middle"/> → 點選 __「進階」__ → 點選  __「前往取得股票現價(不安全)」__ → 點選按鈕 <Badge text="允許" vertical="middle"/>
   - 允許後再次點選【儀表版】分頁的按鈕 <Badge text="更新交易紀錄" vertical="middle"/>，確認功能正常
   
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
  ex.「抓取現價」「一鍵更新」「收費版的自動記錄並圖表化」等，這些功能會需要相應的授權才能使用

  此範本已有眾多的人在使用，程式碼也有經過他人的建議和檢核請放心使用

  ps. 即使如此仍有疑慮的話，請勿使用此範本
  :::
