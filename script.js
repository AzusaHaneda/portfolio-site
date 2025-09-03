// ページが開いたときに実行される
document.addEventListener("DOMContentLoaded", () =>{
    console.log("ページが読み込まれました！");
});

// ボタンを押したら挨拶が出る
const btn = document.getElementById("helloBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
    msg.textContent = "見てくれてありがとうございます✨"
})