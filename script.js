
function toggleLang() {
  alert("当前为简体中文版。英文页面将在未来上线。");
}
function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: 'Shinsenden Izakaya',
      url: window.location.href
    });
  } else {
    alert("您的浏览器不支持分享功能，请手动复制链接。");
  }
}
