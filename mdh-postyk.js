alert ('Вы в программе:"Postyk". Здесь можно создавать посты прямо в браузере, делать скриншоты, и делиться ими в соц. сетях. с уважением, Берлин Андрей.');

let a = prompt('Введите Цвет Фона на английском: blue, red, green, gray и т.п.');
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
let header = document.getElementById('header');
header.style.textAlign = 'center';
header.style.color = 'rgb(255,91,91)';
header.innerHTML=`
<h1>Вы используете: Postyk</h1>
<p>адрес программы:<a href = 'https://html-css-js-node.github.io/postyk/'>https://html-css-js-node.github.io/postyk/</а></p>
`;


let b = prompt('Введите Цвет Шрифта на английском: red, blue, green, gray и т.п.');
let c = prompt('Введите Размер Шрифта: от 0px до 1000px');
let d = prompt('Введите Позицию Текста: center, left, right');
let section = document.getElementById('section');
section.style.color = b;
section.style.fontSize = c;
section.style.textAlign = d;
section.innerHTML = `
<p id="p1"></p>

`;
let h = prompt('Введите Текст:')
let p1 = document.getElementById('p1');
p1.innerHTML = h;

let footer = document.getElementById('footer');
footer.innerHTML=`
<p id="p2">С уважением, Берлин Андрей.</p>`;
footer.style.textAlign = 'center';
footer.style.color= 'rgb(255,91,91)';
