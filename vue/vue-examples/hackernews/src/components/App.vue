<template>
    <div id="wrapper">
        <div id="header">
            <a id="yc" href="http://www.ycombinator.com">
                <img src="https://news.ycombinator.com/y18.gif">
            </a>
            <h1><a href="#/">Hacker News</a></h1>
            <div class="source">
                Built with <a href="http://vuejs.org" target="_blank">Vue.js</a> |
                <a href="https://github.com/yyx990803/vue-hackernews" target="_blank">Source</a>
            </div>
        </div>
        <!-- main view -->
        <router-view class="view" keep-alive transition transition-mode="out-in">
        </router-view>
    </div>
</template>
