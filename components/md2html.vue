<script>
var markdownText = "# Hello World\nThis is a Markdown text."; // Markdown文本
var converter = new showdown.Converter(); // 创建转换器对象
var htmlContent = converter.makeHtml(markdownText); // 将Markdown转换为HTML
document.getElementById("md-content").innerHTML = htmlContent; // 将HTML内容添加到指定元素中
</script>

<template>
</template>
