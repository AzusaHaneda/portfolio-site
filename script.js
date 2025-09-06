// 年号
document.getElementById('y')?.append(new Date().getFullYear());

// 現在ページのナビ強調
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(a=>{
  const href = a.getAttribute('href');
  if ((here === '' && href === 'index.html') || href === here) {
    a.classList.add('is-active');
  }
});
