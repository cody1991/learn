(function() {
    Vue.filter('extract',function(value,keyToExtract){
        return value.map(function(item){
            return item[keyToExtract];
        });
    });

    var demo = new Vue({
        el: '#demo',
        data: {
            msg: 'hi!',
            checked: true,
            picked: 'two',
            selected: 'a',
            multiSelected: ['a', 'b'],
            multiSelectedTwo:[],
            age: 10,
            myOptions: [{
                text: 'A',
                value: 'a'
            }, {
                text: 'B',
                value: 'b'
            }],
            myMutiOptions: [{
                text: 'A',
                value: 'a'
            }, {
                text: 'B',
                value: 'b'
            }],
            myMutiOptionsTwo:[{
                name:'Bruce'
            },{
                name:'Chuck'
            }]
        }
    });
})();
