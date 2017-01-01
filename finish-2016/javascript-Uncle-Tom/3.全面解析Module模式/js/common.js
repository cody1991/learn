(function() {
    var Calculator = function(eq) {
        var eqCtl = document.getElementById(eq);

        return {
            add: function(x, y) {
                var val = x + y;
                eqCtl.innerHTML = val;
            }
        }
    }


    var calculator = new Calculator('eq');
    calculator.add(2, 2);


    var blogModule = (function() {
        var my = {},
            privateName = '博客园';

        function privateAddTopic(data) {

        }

        my.Name = privateName;
        my.AddTopic = function(data) {
            privateAddTopic(data);
        };

        return my;

    }());

    console.log(blogModule.Name);

    var blogModuleTwo = (function(my) {

        var oldAddPhotoMethod = my.AddPhoto;

        my.Name = 'blogModuleTwo';

        function privateAddPhoto(data) {
            console.log(data);
        }

        my.AddPhoto = function(data) {
            // 重载方法，依然可通过oldAddPhotoMethod调用旧的方法
            privateAddPhoto(data);
        };
        return my;
    }(blogModuleTwo || {}));

    blogModuleTwo.AddPhoto(2);


    // 克隆

    var blogModuleThree = (function(old) {
        var my = {},
            key;

        for (key in old) {
            if (old.hasOwnProperty(key)) {
                my[key] = old[key];
            }
        }

        var oldAddPhotoMethod = old.AddPhoto;

        my.AddPhoto = function() {
            alert('blogModuleThree');
        }

        return my;

    }(blogModuleTwo));

    console.log(blogModuleThree);

    blogModuleThree.CommentSubModule = (function() {
        var my = {};
        return my;
    }());

})();