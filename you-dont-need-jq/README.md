常用的class id选择器都可以用 `document.querySelector` 或者 `document.querySelectorAll` 替代

* document.querySelector 返回第一个匹配的Element
* document.querySelectorAll 返回所有匹配的Element组成的NodeList，可以通过[].slice.call() 把它转化成 Array
* 匹配不到任何Element的时候，jq返回空数组， document.querySelector返回null ，所以当找不到的时候可以用 || 来设置默认值，如 document.querySelector(selector) || []

---

* Query by selector

        $('selector');

        document.querySelectorAll('selector'); 


* Query by class

        $('.css');

        document.querySelectorAll('.css');

        document.getElementsByClasName('css');

* Query by id

        $('#id');

        document.querySelector('#id');

        document.getElementById('id');

* Query by attribute

        $('a[target=_blank]');

        document.querySelectorAll('a[target=_blank]');
* Find somethings

        * Find nodes
        
                $el.find('li');
                
                el.querySelectorAll('li');
        
        * Find body
        
                $('body');
                
                document.body;
                
        * Find Attribute
        
                $el.attr('foo');
                
                e.getAttribute('foo');
                
        * Find data attribute
        
                $el.data('foo');
                
                el.getAttribute('data-foo');
                
                el.dataset['foo'];
                
* Sibling/Previous/Next Elements

        * sibling elements
        
                $el.siblings();
                
                [].filter.call(el.parentNode.children,function(child){
                    return child !== el;
                }
                
        * previous elements
        
                $el.prev();
                
                el.previousElementSibling;
        
        * next elements
        
                $el.next();
                
                el.nextElementSibling;
                
* Closest 获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上。
        
        $el.closest(queryString);

        function closest(el,selector){
            var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
            while(el){
                if(matchesSelector.call(el.selector)){
                    reuturn el;
                }else{
                    el.el.parentElement;
                }
            }
            return null;
        }
        
* From
    
        * input/textarea        

            $('#my-input').val();

            document.querySelector('#my-input').value;
            
        * Get index of e.currentTarget between .radio
        
            $(e.currentTarget