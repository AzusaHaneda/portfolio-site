//　ページが開いたときに実行される
document.addEventListener("DOMContentLoaded", () =>{
    console.log ("ページが読み込まれました！");
});

// ボタンを押したら挨拶が出る
const btn = document.getElementById("helloBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
    msg.textContent = "見てくれてありがとうございます✨"
})

//　セクションの可視範囲でナビをハイライト
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".site-nav a");

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") ===`#${id}`))
    });
}, { threshold: 0.6});

sections.forEach(sec => io.observe(sec));

