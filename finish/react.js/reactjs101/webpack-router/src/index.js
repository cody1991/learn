import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App'
import Home from './components/Home'
import Repos from './components/Repos';
import About from './components/About';
import User from './components/User';
import Contacts from './components/Contacts';

// Router Router 是放置 Route 的容器，其本身不定義 routing ，真正 routing 規則由 Route 定義。

// Route Route 負責 URL 和對應的元件關係，可以有多個 Route 規則也可以有嵌套（nested）Routing。像下面的例子就是每個頁面都會先載入 App 元件再載入對應 URL 的元件。

// history Router 中有一個屬性 history 的規則，這邊使用我們使用 hashHistory，使用 routing 將由 hash（#）變化決定。例如：當使用者拜訪 http://www.github.com/，實際看到的會是 http://www.github.com/#/。下列範例若是拜訪了 /about 則會看到 http://localhost:8008/#/about 並載入 App 元件再載入 About 元件。

// hashHistory 教學範例使用的，會通過 hash 進行對應。好處是簡單易用，不用多餘設定。

// browserHistory 適用於伺服器端渲染，但需要設定伺服器端避免處理錯誤，這部份我們會在後面的章節詳細說明。注意的是若是使用 Webpack 開發用伺服器需加上 --history-api-fallback

// createMemoryHistory 主要用於伺服器渲染，使用上會建立一個存在記憶體的 history 物件，不會修改瀏覽器的網址位置。

// path path 是對應 URL 的規則。例如：/repos/torvalds 會對應到 /repos/:name 的位置，並將參數傳入 Repos 元件中。由 this.props.params.name 取得參數。順帶一提，若為查詢參數 /user?q=torvalds 則由 this.props.location.query.q 取得參數。

// IndexRoute 由於 / 情況下 App 元件對應的 this.props.children 會是 undefinded，所以使用 IndexRoute 來解決對應問題。這樣當 URL 為 / 時將會對應到 Home 元件。不過要注意的是 IndexRoute 沒有 path 屬性。

// import App from './components/App';
// import Home from './components/Home';
// import Repos from './components/Repos';
// import About from './components/About';
// import User from './components/User';
// import Contacts from './components/Contacts';

// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home} />
//       <Route path="/repos/:name" component={Repos} />
//       <Route path="/about" component={About} />
//       <Route path="/user" component={User} />
//       <Route path="/contacts" component={Contacts} />
//     </Route>
//   </Router>,
//   document.getElementById('app'));

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/repos/:name" component={Repos} />
      <Route path="/user" component={User} />
      <Route path="/contacts" component={Contacts}/>
    </Route>
  </Router>,
    document.getElementById('app'));

// 由於我們在 index.js 使用嵌套 routing，把 App 元件當做每個元件都會載入的母模版，亦即進入每個對應頁面載入對應元件前都會先載入 App 元件。這樣就可以讓每個頁面都有導覽列連結可以點選，同時可以透過 props.children 載入對應 URL 的子元件。

// Link Link 元件主要用於點擊後連結轉換，可以想成是 <a> 超連結的 React 版本。若是希望當點擊時候有對應的 css style，可以使用 activeStyle、activeClassName 去做設定。範例分別使用於 index.html使用傳統 CSS 載入、Inline Style、外部引入 Inline Style 寫法。

// IndexLink IndexLink 主要是了處理 index 用途，特別注意當 child route actived 時，parent route 也會 actived。所以我們回首頁的連結使用 <IndexLink /> 內部的 onlyActiveOnIndex 屬性來解決這個問題。

// Redirect、IndexRedirect 這邊雖然沒有用到，但若讀者有需要使用到連結跳轉的話可以參考這兩個元件，用法類似於 Route 和 IndexRedirect。
