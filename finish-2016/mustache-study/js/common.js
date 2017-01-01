var templateEle = document.getElementById('template'),
    targetEle = document.getElementById('target');

var template = templateEle.innerHTML;

var rendered = Mustache.render(template, {
    name: 'Luke',
    company: '<b>Github</b>',
    nickname: {
        'first': 'Michael',
        'last': 'Jackson'
    },
    isShow: false,
    items: [{
        "name": "Moe"
    }, {
        "name": "Larry"
    }, {
        "name": "Curly"
    }],
    "beatles": [{
        "firstName": "John",
        "lastName": "Lennon"
    }, {
        "firstName": "Paul",
        "lastName": "McCartney"
    }, {
        "firstName": "George",
        "lastName": "Harrison"
    }, {
        "firstName": "Ringo",
        "lastName": "Starr"
    }],
    "returnFullName": function() {
        return this.firstName + " " + this.lastName
    },
    "bold": function() {
        return function(text, render) {
            return "<b>" + render(text) + "</b>";
        }
    },
    list: [{
        id: "1",
        status: "P"
    }, {
        id: "2",
        status: "W"
    }, {
        id: "3",
        status: "R"
    }],
    statusRenderer: function() {
        if (this.status == 'P') {
            return "<b style='color:green'>通过</b>"
        } else if (this.status == "W") {
            return '等待'
        } else {
            return "<b style='color:red'>拒绝</b>"
        }
    }
});

targetEle.innerHTML = rendered;
