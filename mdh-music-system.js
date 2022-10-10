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
let style = document.getElementById("style");
style.innerHTML = `
iframe {

            border: 1px solid black;

            width: 100%;
        }
        
        .output {
            background: #eee;
        }


`;
let header = document.getElementById("header");
header.innerHTML = `
<h1>
Музыкальная система - Нейрон
</h1>


`;
let section = document.getElementById("section");
section.innerHTML = `
        <iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="500" src="https://webappandroid.github.io/ai-piano-1/">
        </iframe>


        <p>Это интерактивное Пианино-1 с Исскуственным Интеллектом (ИИ). Если вы нажмете на клавишу пианино, то ИИ создаст дополнительную мелодию.<a href="https://webappandroid.github.io/ai-piano-1/" target="_blank"> Открыть на полный экран в новом окне.</a></p>

        <br><br>
<iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="500" src="https://webappandroid.github.io/ai-piano-2/">
    </iframe>

        <p>Это интерактивное Пианино-2 с Исскуственным Интеллектом (ИИ). Если вы нажмете на клавишу пианино, то ИИ создаст дополнительную мелодию.<a href="https://webappandroid.github.io/ai-piano-2/" target="_blank"> Открыть на полный экран в новом окне.</a></p>
        <br><br><iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="500" src="https://webappandroid.github.io/Ai-Neural-Drum-Machine/">
    </iframe>

        <p>Это интерактивный Барабан с Исскуственным Интеллектом (ИИ). Если вы нажмете на клавишу обновить, то ИИ создаст дополнительную мелодию.<a href="https://webappandroid.github.io/Ai-Neural-Drum-Machine/" target="_blank"> Открыть на полный экран в новом окне.</a></p>
        <br>
        <br>


`;
