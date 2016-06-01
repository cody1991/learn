var key = 'vue-chat';

if (!window.localStorage.getItem(key)) {
    var time = new Date().getTime();

    var data = {
        userIndex: 0,
        user: {
            id: 1,
            name: 'cody',
            img: './dist/images/1.jpg'
        },
        userList: [{
            id: 2,
            name: '大蟹',
            img: './dist/images/2.jpg'
        }, {
            id: 3,
            name: 'Jsonz',
            img: './dist/images/3.jpg'
        }, {
            id: 4,
            name: 'bear',
            img: './dist/images/4.jpg'
        }],
        sessionList: [{
            userId: 2,
            data: [{
                text: '这是第一条信息',
                time: new Date('2012,4,4 11:02:10').getTime()
            }, {
                text: '要搬家了,长寿路那边',
                time: new Date('2012,4,4 11:11:10').getTime()
            }]
        }, {
            userId: 3,
            data: []
        }, {
            userId: 4,
            data: [{
                text: 'hey',
                time: time
            }]
        }]
    }

    window.localStorage.setItem(key, JSON.stringify(data));
}


export default {
    fetch: function() {
        return JSON.parse(window.localStorage.getItem(key));
    },
    save: function(data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
}
