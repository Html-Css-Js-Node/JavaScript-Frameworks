let a = prompt('Введите Цвет Фона:');
let body = document.getElementById("body");
body.innerHTML = `
<style id = "style">
</style>
<header id="header">
</header>
<section id="section">
</section>
<footer id="footer">
</footer>
`;
body.style.background = a;

let b = prompt('Введите Цвет Шрифта:');
let c = prompt('Введите Размер Шрифта:');
let d = prompt('Введите Позицию Текста:');
let section = document.getElementById('section');
section.style.color = b;
section.style.fontSize = c;
section.style.textAlign = d;
section.innerHTML = `
<p id="p"></p>

`;
let h = prompt('Введите Текст:')
let p = document.getElementById('p');
p.innerHTML = h;