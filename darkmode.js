// 获取深色模式切换按钮和页面元素
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// 添加事件监听器来切换深色模式
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});
