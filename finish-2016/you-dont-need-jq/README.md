[oneuijs/You-Dont-Need-jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README.zh-CN.md)

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
        
            $(e.currentTarget).index('.radio');

            [].indexOf.call(document.querySelectAll('.radio'),e.currentTarget);

---

* CSS

        * get style

            $el.css('color');

            // 注意：此处为了解决当 style 值为 auto 时，返回 auto 的问题

            var win = el.ownerDocument.defaultView;

            win.getComputedStyle(el,null).color;

        * set style

            $el.css({color:#'ff0011'});

            el.style.color = '#ff0011';

        * add class

            $el.addClass(className);

            el.classList.add(className);

        * remove class

            $el.removeClass(claaName);

            el.classList.remove(className);

        * has class

            $el.hasClass(className);

            el.classList.contains(className);

        * toggle class

            $el.toggleClass(className);

            el.classList.toggle(className);

* width & height

        * window height

            $(window).height();

            // 不含 scrollbar，与 jQuery 行为一致

            window.document.documentElement.clientHeight;

            // 含 scrollbar

            window.innerHeight;

        * document height

            $(document).height();

            document.documentElement.scrollHeight;

        * element height

            $el.height();

            // 与jq一致（一直为content区域的高度）
            function getHeight(el){
                const styles = this.getComputedStyles(el);
                const height = el.offsetHieght;
                const borderTopWidth = parseFloat(styles.borderTopWidth);
                const borderBottomWidth = parseFloat(styles.borderBottomWidth);
                const paddingTop = parseFloat(styles.paddingTop);
                const paddingBottom = parseFloat(styles.paddingBottom);
                return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
            }

            // 精确到整数（border-box 时为 height 值，content-box 时为 height + padding + border 值）

            el.clientHeight;

            // 精确到小数（border-box 时为 height 值，content-box 时为 height + padding + border 值）

            el.getBoundingClientRect().height;

        * iframes height

            $('iframes').contents().height();

            iframe.contentDocument.documentElement.scrollHeight;

* position & offset

        * position

            $el.position();

            {left:el.offsetLeft,top:el.offsetTop}

        * offset

            $el.offset();

            function getOffset(el){
                const box = el.getBoundingClientRect();
                return {
                    top:box.top + window.pageYOffset - document.documentElement.clientTop,
                    left:box.left + window.pageXOffset - document.documentElement.clientLeft
                }
            }

* scroll Top

        $(window).scrollTop();

        (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop); 

---

DOM Manipulation

* Remove

        $el.remove();

        el.parentNode.removeChild(el);

* text

        * get text

            $el.text();

            el.textContent;

        * set text

            $el.text(string);

            el.textContent = string;

* HTML

        * get HTML

            $el.html();

            el.innerHTML;

        * set HTML

            $el.html(string);

            el.innerHTML = htmlString;

* append 插入到子节点末尾

        $el.append("<div id='container'>hello</div>");

        let newEl = document.createElement('div');

        newEl.setAttribute('id','container');

        newEl.innerHTML = 'hello';

        el.appendChild(newEl);

* prepend

        $el.prepend("<div id='container'>hello</div>");

        let newEl = document.createElement('div');

        newEl.setAttribute('id','container');

        newEl.innerHTML = 'hello';

        el.insertBefore(newEl,el.firstChild);

* insertBefore 在选种元素前插入新节点

        $newEl.insertBefore(queryString);

        const target = document.querySelector(queryString);

        target.parentNode.insertBefore(newEl,target);

* insertAfter 在选中元素后插入新节点

        $newEl.insertAfter(queryString);

        const target = document.querySelector(queryString);

        target.parentNode.insertBefore(newEl,target.nextSibling);

--- 

Events

* Bind an event with on

        $el.on(eventName,eventHandler);

        el.addEventListener(eventName,eventHandler);

* Unbind an event with off

        $el.off(eventName,eventHandler);

        el.removeEventListener(eventName,eventHandler);

* trigger

        $(el).trigger('custom-event',{key1:'data'});

        if(window.CustomEvent){
            const event = new CustomEvent('custom-event',{detail:{key1:'data'}});
        }else{
            const event = document.createEvent('CustomEvent');
            event.initCustomEvent('custom-event',true,true,{key1:'data'});
        }

        el.dispatchEvent(event);

---

Utilities

* isArray

        $.isArray(range);

        Array.isArray(range);

* trim

        $.trim(string);

        string.trim();

* object assign

        $.extend({},defaultOpts,opts);

        Object.assign({},defaultOpts,opts);

* contains

        $.contains(el,child);

        el !== child && el.contains(child)