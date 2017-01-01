document.getElementById("parent-list").addEventListener("click", function(e) {
    console.log(e.target.nodeName);
    // 检查事件源e.targe是否为Li
    if (e.target && e.target.nodeName.toUpperCase() == "LI") {
        // 真正的处理过程在这里
        console.log("List item ", e.target.id.replace("post-"), " was clicked!");
    }
}, false);
