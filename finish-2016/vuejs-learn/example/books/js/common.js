var vm = new Vue({
    el: '#app',
    ready: function() {
        this.$http.get('https://api.myjson.com/bins/r8mm').then(function(response) {
            this.$set('books', response.data);
        }, function(data, status, request) {
            console.log('fail ' + status + ', ' + request);
        });
    },
    data: {
        sortparam: '',
        book: {
            id: 0,
            author: '',
            name: '',
            price: ''
        },
        books: []
    },
    computed: {
        sum: function() {
            var result = 0;
            for (var i = 0; i < this.books.length; i++) {
                result = Number(this.books[i].price) + result;
            }
            return result;
        }
    },
    methods: {
        addBook: function() {
            if (this.book.author.trim().length > 0 && this.book.name.trim().length > 0 && !isNaN(this.book.price)) {
                this.book.id = this.books.length + 1;
                this.book.price = Number(this.book.price);
                this.books.push(this.book);
                this.book = '';
            }
        },
        sortBy: function(sortparam) {
            this.sortparam = sortparam;
        },
        delBook: function(book) {
            this.books.$remove(book);
        }
    }
})
