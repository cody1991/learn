学习JavaScript数据结构与算法 书

	O(1) 常数的
	O(log(n)) 对数的 
	O((log(n))c) 对数多项式的
	O(n) 线性的
	O(n2) 二次的
	O(nc) 多项式的
	O(cn) 指数的

如何衡量算法的效率?通常是用资源，例如CPU(时间)占用、内存占用、硬盘占用和网络占用。当讨论大O表示法时，一般考虑的是CPU(时间)占用。

	function increment(num){
		return ++num
	}

	increment(1)

	执行时间 X，更换了num也没变化，和参数无关

---

	function sequentialSearch(array, item){
        for (var i=0; i<array.length; i++){
            if (item === array[i]){ //{1}
                return i;
	} }
	return -1; }

	和数组大小有关，n个元素最大开销n，复杂度是n

---

	冒泡

	两次循环的时间 n的平方