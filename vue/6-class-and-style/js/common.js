var app = new Vue({
    el: '#app',
    data: {
        classObject: {
            isA: true,
            isB: false
        },
        isB: true,
        isC: false,
        classA: 'class-a',
        classB: 'class-b',
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
            color: 'blue',
            fontSize: '20px',
            transform: 'translate(100px,200px)'
        }
    }
});
