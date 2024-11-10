function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

let count = 0;
const maxCount = 33;
const words = [
  "سبحان الله",
  "الحمد لله",
  "لا إله إلا الله",
  "الله أكبر",
  "استغفر الله",
];
let currentWordIndex = 0;

const counterElement = document.getElementById("counter");
const wordElement = document.getElementById("word");
const incrementButton = document.getElementById("increment-btn");

incrementButton.addEventListener("click", () => {
  count++;

  if (count >= maxCount) {
    count = 0; // إعادة تصفير العداد
    currentWordIndex = (currentWordIndex + 1) % words.length; // تغيير الكلمة
    wordElement.textContent = words[currentWordIndex];
  }

  counterElement.textContent = count;
});