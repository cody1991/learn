var apiURL = 'https://api.github.com/repos/cody1991/learn/commits?per_page=10&sha='

var app = new Vue({
    el: '#app',
    data: {
        branches: ['gh-pages'],
        currentBranch: 'gh-pages',
        commits: null
    },
    created: function() {
        this.fetchData();
    },
    // 后面看看watch干嘛用的
    watch: {
        currentBranch: 'fetchData'
    },
    methods: {
        fetchData: function() {
            var xhr = new XMLHttpRequest();
            var self = this;
            xhr.open('GET', apiURL + self.currentBranch);
            xhr.onload = function() {
                self.commits = JSON.parse(xhr.responseText);
            }
            xhr.send();
        }
    },
    filters: {
        truncate: function(v) {
            var newline = v.indexOf('\n');
            return newline > 0 ? v.slice(0, newline) : v;
        },
        formatDate: function(v) {
            return v.replace(/T|Z/g, ' ')
        }
    }
})
