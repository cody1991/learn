// 决定是否用模板替换挂载元素。如果设为 true（这是默认值），模板将覆盖挂载元素，并合并挂载元素和模板根节点的 attributes。如果设为 false 模板将覆盖挂载元素的内容，不会替换挂载元素自身。

new Vue({
	el: '#replace',
	template: '<p class="bar">replaced</p>'
});

new Vue({
	el: '#insert',
	template: '<p class="bar">replaced</p>',
	replace: false
})