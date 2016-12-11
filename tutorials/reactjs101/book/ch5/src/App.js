import React, {
  Component
} from 'react';

import {
  Link,
  IndexLink
} from 'react-router'

import './App.css';

// 由於我們在 index.js 使用嵌套 routing，把 App 元件當做每個元件都會載入的母模版，亦即進入每個對應頁面載入對應元件前都會先載入 App 元件。這樣就可以讓每個頁面都有導覽列連結可以點選，同時可以透過 props.children 載入對應 URL 的子元件。

// Link Link 元件主要用於點擊後連結轉換，可以想成是 <a> 超連結的 React 版本。若是希望當點擊時候有對應的 css style，可以使用 activeStyle、activeClassName 去做設定。範例分別使用於 index.html使用傳統 CSS 載入、Inline Style、外部引入 Inline Style 寫法。

// IndexLink IndexLink 主要是了處理 index 用途，特別注意當 child route actived 時，parent route 也會 actived。所以我們回首頁的連結使用 <IndexLink /> 內部的 onlyActiveOnIndex 屬性來解決這個問題。

// Redirect、IndexRedirect 這邊雖然沒有用到，但若讀者有需要使用到連結跳轉的話可以參考這兩個元件，用法類似於 Route 和 IndexRedirect。


class App extends Component {
  render() {
    return (
      <div id="App">
        <h1>React Router Tutorial</h1>
        <ul>
          <li>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li>
            <Link to="/about" activeStyle={{color:'green'}}>
              About
            </Link>
          </li>
          <li>
            <Link to="/repos/react-router">
              Repos
            </Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object
}

export default App;