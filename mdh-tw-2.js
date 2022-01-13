let body = document.getElementById('body');
body.innerHTML = `<header id="header"></header> <section id="section"></section><footer id="footer"></footer>`;
let header = document.getElementById('header');
header.innerHTML = `<h1>Время:</h1>
            <div id="timedate">
                <a id="mon">Января</a>
                <a id="d">1</a>,
                <a id="y">0</a><br />
                <a id="h">12</a> :
                <a id="m">00</a> :
                <a id="s">00</a>
                <a id="mi">000</a>
            </div>`;
    // START CLOCK SCRIPT


  Number.prototype.pad = function (n)  {
            for (var r = this.toString(); r.length < n; r = 0 + r);
            return r;
        };

        function updateClock() {
            var now = new Date();
            /*  var milli = now.getMilliseconds(),*/
            let sec = now.getSeconds(),
                min = now.getMinutes(),
                hou = now.getHours(),
                mo = now.getMonth(),
                dy = now.getDate(),
                yr = now.getFullYear();
            var months = ["Января", "Февраля", "Марта", "Апреля", "Майя", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
            var tags = ["d", "mon", "y", "h", "m", "s", "mi"],
                corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)];
            for (var i = 0; i < tags.length; i++)
                document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
        }

        function initClock() {
            updateClock();
            window.setInterval("updateClock()",1);
        }

        // END CLOCK SCRIPT

// погода
let section = document.getElementById('section');
section.innerHTML = `<h1>Погода:</h1>


        <div id="app" class="app">
            <div class="icon icon__loading">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
                  <circle cx="245.333" cy="245.333" r="160" fill="#ffc107"/>
                  <g fill="#ffd54f">
                    <path d="M245.333 64C251.224 64 256 59.224 256 53.333V10.667C256 4.776 251.224 0 245.333 0s-10.667 4.776-10.667 10.667v42.667c.001 5.89 4.776 10.666 10.667 10.666zM245.333 426.667c-5.891 0-10.667 4.776-10.667 10.667V480c0 5.891 4.776 10.667 10.667 10.667S256 485.891 256 480v-42.667c0-5.891-4.776-10.666-10.667-10.666zM480 234.667h-42.667c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667H480c5.891 0 10.667-4.776 10.667-10.667 0-5.892-4.776-10.667-10.667-10.667zM64 245.333c0-5.891-4.776-10.667-10.667-10.667H10.667C4.776 234.667 0 239.442 0 245.333S4.776 256 10.667 256h42.667C59.224 256 64 251.224 64 245.333zM140.096 84.395a10.665 10.665 0 009.259 5.333 10.515 10.515 0 005.333-1.429c5.102-2.946 6.849-9.469 3.904-14.571l-21.333-36.949c-2.979-5.082-9.514-6.787-14.596-3.808-5.035 2.951-6.763 9.401-3.878 14.474l21.311 36.95zM350.571 406.272c-2.98-5.082-9.515-6.786-14.597-3.806-5.033 2.952-6.761 9.4-3.878 14.473l21.333 36.949a10.665 10.665 0 009.259 5.333 10.515 10.515 0 005.333-1.429c5.102-2.946 6.849-9.469 3.904-14.571l-21.354-36.949zM411.605 160a10.515 10.515 0 005.333-1.429l36.949-21.333c5.22-2.731 7.238-9.176 4.507-14.396-2.731-5.22-9.176-7.238-14.396-4.507-.266.139-.525.289-.778.45l-36.949 21.333c-5.102 2.946-6.849 9.47-3.904 14.571a10.665 10.665 0 009.237 5.333V160zM73.728 332.096l-36.949 21.333c-5.102 2.946-6.849 9.469-3.904 14.571a10.665 10.665 0 009.237 5.333 10.515 10.515 0 005.333-1.429l36.949-21.333c5.22-2.731 7.238-9.176 4.507-14.396-2.731-5.22-9.176-7.238-14.396-4.507-.266.139-.525.289-.778.45l.001-.022zM36.779 137.237l36.949 21.333a10.514 10.514 0 005.312 1.429 10.668 10.668 0 005.333-19.904l-36.949-21.333c-4.972-3.16-11.564-1.692-14.724 3.279s-1.692 11.564 3.279 14.724c.253.161.512.311.778.45l.022.022zM453.888 353.429l-36.949-21.333c-4.972-3.16-11.564-1.692-14.724 3.279s-1.692 11.564 3.279 14.724c.253.161.513.311.778.45l36.949 21.333a10.517 10.517 0 005.333 1.429c5.891 0 10.666-4.776 10.666-10.667 0-3.811-2.033-7.332-5.333-9.237v.022zM336 88.299a10.517 10.517 0 005.333 1.429 10.669 10.669 0 009.259-5.333l21.333-36.949c2.911-5.121 1.119-11.633-4.002-14.544-5.073-2.883-11.521-1.156-14.473 3.878l-21.333 36.949c-2.949 5.095-1.211 11.617 3.883 14.57zM154.667 402.368c-5.102-2.945-11.625-1.198-14.571 3.904l-21.333 36.949c-2.945 5.102-1.198 11.625 3.904 14.571a10.517 10.517 0 005.333 1.429 10.668 10.668 0 009.259-5.333l21.333-36.949c2.94-5.105 1.186-11.627-3.919-14.567l-.006-.004z"/>
                    </g>
                    </svg>
                <div class="icon__text">ПРИВЕТ:) Загружаем данные...</div>
            </div>
            <div class="icon icon__geolocation">
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.59 20.59L43.41 3.41a4.83 4.83 0 00-6.82 0L4 36l24 24 32.59-32.59a4.83 4.83 0 000-6.82z" fill="#aab2bd"/>
                  <path d="M28 60l-.59.59a4.83 4.83 0 01-6.82 0L3.41 43.41a4.83 4.83 0 010-6.82L4 36z" fill="#838f9b"/>
                  <path d="M57 17l-1.29 1.29c-.46.46-1.07.71-1.71.71s-1.25-.25-1.71-.71l-6.58-6.58c-.46-.46-.71-1.07-.71-1.71s.25-1.25.71-1.71L47 7z" fill="#fcd770"/>
                  <path d="M9.996 36L36.992 9.002 54.99 27.001 27.994 53.997z" fill="#69d6f4"/>
                  <path d="M25.993 42.999l3-3 3 3-3 3z" fill="#ff826e"/>
                  <path d="M19.995 36.999l3-3 3 3-3 3zM31.993 37l3-3 3 3-3 3z" fill="#fcd770"/>
                  <path d="M25.995 31l3-3 3 3-3 3z" fill="#ff826e"/>
                  <path d="M30 16c0 .59-.04 1.16-.11 1.73C29.04 24.65 23.14 30 16 30a13.7 13.7 0 01-5.05-.95C5.71 27.03 2 21.95 2 16 2 8.27 8.27 2 16 2c5.95 0 11.03 3.71 13.05 8.95.62 1.57.95 3.27.95 5.05z" fill="#ffeaa7"/>
                  <path d="M24 13.97c0 1.95-.72 3.84-2.01 5.29L16 26l-5.99-6.74A7.975 7.975 0 018 13.97C8 9.57 11.57 6 15.97 6h.06c2.2 0 4.19.89 5.63 2.34A7.902 7.902 0 0124 13.97z" fill="#ff826e"/>
                  <circle cx="16" cy="14" fill="#e6e9ed" r="4"/>
                  <path d="M61.293 19.879L44.121 2.707C43.021 1.606 41.557 1 40 1s-3.021.606-4.121 1.707l-6.515 6.515C26.883 4.351 21.831 1 16 1 7.729 1 1 7.729 1 16c0 5.831 3.351 10.883 8.222 13.364l-6.515 6.515C1.606 36.979 1 38.443 1 40s.606 3.021 1.707 4.121l17.172 17.172A5.787 5.787 0 0024 63a5.868 5.868 0 004.121-1.707l33.172-33.172C62.394 27.021 63 25.557 63 24s-.606-3.021-1.707-4.121zM46.414 9L47 8.414 55.586 17l-.586.586c-.53.531-1.47.529-1.998.002l-6.59-6.59A1.4 1.4 0 0146 10c0-.372.151-.737.414-1zM37 10.414L53.586 27 28 52.586 11.414 36l5.022-5.022c7.922-.229 14.312-6.62 14.542-14.542zM3 16C3 8.832 8.832 3 16 3s13 5.832 13 13-5.832 13-13 13S3 23.168 3 16zm18.293 43.879L4.121 42.707a3.804 3.804 0 01-.109-5.281l22.562 22.562A3.852 3.852 0 0124 61a3.804 3.804 0 01-2.707-1.121zm38.586-33.172L28 58.586 5.414 36l5.798-5.798c.823.278 1.679.481 2.559.613L8.586 36 28 55.414 56.414 27 37 7.586l-6.184 6.184a14.917 14.917 0 00-.613-2.559l7.091-7.091c1.446-1.446 3.968-1.446 5.414 0L45.586 7 45 7.586c-.645.644-1 1.502-1 2.414s.354 1.769.998 2.412l6.59 6.59c.643.644 1.5.998 2.412.998s1.77-.355 2.414-1l.586-.586 2.879 2.879C60.602 22.016 61 22.978 61 24s-.398 1.984-1.121 2.707z"/>
                  <path d="M30.586 37L35 41.414 39.414 37 35 32.586zM35 38.586L33.414 37 35 35.414 36.586 37zM24.586 43L29 47.414 33.414 43 29 38.586zM29 44.586L27.414 43 29 41.414 30.586 43zM29 35.414L33.414 31 29 26.586 24.586 31zM30.586 31L29 32.586 27.414 31 29 29.414zM23 32.586L18.586 37 23 41.414 27.414 37zM21.414 37L23 35.414 24.586 37 23 38.586zM22.734 19.929A8.962 8.962 0 0025 13.97C25 9.024 20.976 5 15.97 5 11.024 5 7 9.024 7 13.97c0 2.199.805 4.315 2.266 5.959L16 27.505zM9 13.97C9 10.126 12.126 7 16.03 7A6.977 6.977 0 0123 13.97a6.956 6.956 0 01-1.761 4.63L16 24.495 10.761 18.6A6.958 6.958 0 019 13.97z"/>
                  <path d="M21 14c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5zm-8 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM34.287 15.71l1.414-1.414L49.7 28.294l-1.414 1.414zM31.287 18.71l1.414-1.414L46.7 31.294l-1.414 1.414zM31.287 24.709l1.414-1.414 10.998 10.998-1.414 1.414z"/>
                  </svg>
                <div class="icon__text">Требуется доступ к геопозиции!</div>
            </div>
            <div class="icon icon__error">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M477.486 424.797H34.514C15.452 424.797 0 409.345 0 390.283V38.488C0 19.427 15.452 3.974 34.514 3.974h442.973C496.548 3.974 512 19.427 512 38.488v351.795c0 19.062-15.452 34.514-34.514 34.514z" fill="#53515e"/>
                  <path d="M364.402 339.5a8.169 8.169 0 01-8.169-8.169V82.374a8.17 8.17 0 0116.338 0V331.33a8.17 8.17 0 01-8.169 8.17z" fill="#474756"/>
                  <path d="M477.486 3.974H34.514C15.452 3.974 0 19.427 0 38.488V86.97h512V38.488c0-19.061-15.452-34.514-34.514-34.514z" fill="#6f4bef"/>
                  <path d="M323.799 54.227H171.836a8.17 8.17 0 010-16.338h151.963a8.17 8.17 0 010 16.338z" fill="#4628b2"/>
                  <circle cx="45.589" cy="46.06" r="10.92" fill="#ffdc64"/>
                  <circle cx="87.67" cy="46.06" r="10.92" fill="#86e56e"/>
                  <circle cx="127.42" cy="46.06" r="10.92" fill="#ffdc64"/>
                  <circle cx="467.58" cy="46.06" r="10.92" fill="#ff80bd"/>
                  <path d="M460.791 316.909H53.767c-17.436 0-31.571 14.135-31.571 31.571v74.045a34.418 34.418 0 0012.318 2.272h442.973a34.376 34.376 0 0014.876-3.364V348.48c0-17.436-14.135-31.571-31.572-31.571z" fill="#474756"/>
                  <circle cx="49.796" cy="130.059" r="8.169" fill="#aaa8c1"/>
                  <path d="M189.169 138.23H82.198a8.17 8.17 0 010-16.338h106.971a8.17 8.17 0 010 16.338z" fill="#00aaf0"/>
                  <g fill="#3c3b44">
                    <path d="M478.499 130.061h-80.425a8.17 8.17 0 010-16.338h80.425a8.17 8.17 0 018.169 8.169 8.167 8.167 0 01-8.169 8.169zM478.499 165.189h-80.425a8.17 8.17 0 010-16.338h80.425a8.17 8.17 0 010 16.338zM478.499 200.316h-80.425a8.17 8.17 0 010-16.338h80.425a8.17 8.17 0 010 16.338zM478.499 235.445h-80.425a8.17 8.17 0 010-16.338h80.425a8.17 8.17 0 018.169 8.169 8.168 8.168 0 01-8.169 8.169zM478.499 270.573h-80.425c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h80.425a8.169 8.169 0 018.169 8.169 8.168 8.168 0 01-8.169 8.169zM478.499 305.7h-80.425c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h80.425c4.512 0 8.169 3.657 8.169 8.169s-3.656 8.169-8.169 8.169z"/>
                    </g>
                    <circle cx="49.796" cy="164.369" r="8.169" fill="#aaa8c1"/>
                    <path d="M138.336 172.542H82.198a8.17 8.17 0 010-16.338h56.138a8.17 8.17 0 010 16.338z" fill="#00aaf0"/>
                    <circle cx="49.796" cy="265.67" r="8.169" fill="#aaa8c1"/>
                    <path d="M166.711 273.84H82.198c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h84.513c4.512 0 8.169 3.657 8.169 8.169s-3.657 8.169-8.169 8.169z" fill="#86e56e"/>
                    <circle cx="49.796" cy="299.17" r="8.169" fill="#aaa8c1"/>
                    <g fill="#00aaf0">
                      <path d="M166.711 307.334H82.198c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h84.513c4.512 0 8.169 3.657 8.169 8.169s-3.657 8.169-8.169 8.169zM223.638 273.84h-29.843c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h29.843c4.512 0 8.169 3.657 8.169 8.169s-3.657 8.169-8.169 8.169z"/>
                      </g>
                      <path d="M227.973 172.542h-56.137a8.17 8.17 0 010-16.338h56.137a8.17 8.17 0 010 16.338z" fill="#ffdc64"/>
                      <circle cx="49.796" cy="198.679" r="8.169" fill="#aaa8c1"/>
                      <path d="M193.795 206.852h-77.514a8.17 8.17 0 010-16.338h77.514a8.17 8.17 0 010 16.338z" fill="#ff80bd"/>
                      <circle cx="49.796" cy="231.359" r="8.169" fill="#aaa8c1"/>
                      <path d="M257.657 239.529H116.281a8.17 8.17 0 010-16.338h141.376a8.17 8.17 0 010 16.338z" fill="#ffdc64"/>
                      <path d="M305.487 206.852h-77.514a8.17 8.17 0 010-16.338h77.514a8.17 8.17 0 010 16.338z" fill="#86e56e"/>
                      <path d="M440.54 508.025H74.019c-15.701 0-28.43-12.728-28.43-28.43v-115.24c0-15.701 12.728-28.43 28.43-28.43H440.54c15.701 0 28.43 12.728 28.43 28.43v115.239c0 15.702-12.729 28.431-28.43 28.431z" fill="#ff6b5c"/>
                      <path d="M440.54 335.927h-17.159c0 74.744-60.592 135.337-135.337 135.337H45.589v8.332c0 15.701 12.728 28.43 28.43 28.43H440.54c15.701 0 28.43-12.728 28.43-28.43v-115.24c0-15.701-12.729-28.429-28.43-28.429z" fill="#ff5450"/>
                      <g fill="#fff">
                      <path d="M104.572 455.934v-70.32c0-1.698.737-3.007 2.215-3.931 1.476-.922 3.247-1.384 5.315-1.384h39.424c1.698 0 2.99.739 3.876 2.215.885 1.477 1.329 3.211 1.329 5.205 0 2.142-.462 3.951-1.384 5.427-.924 1.476-2.198 2.215-3.821 2.215h-29.678v18.715h16.611c1.623 0 2.896.664 3.821 1.993.922 1.329 1.384 2.917 1.384 4.761 0 1.7-.442 3.212-1.329 4.541-.886 1.329-2.178 1.993-3.876 1.993h-16.611v18.826h29.678c1.623 0 2.896.738 3.821 2.215.922 1.476 1.384 3.285 1.384 5.425 0 1.993-.444 3.729-1.329 5.206-.886 1.477-2.178 2.215-3.876 2.215h-39.424c-2.068 0-3.839-.46-5.315-1.385-1.478-.923-2.215-2.233-2.215-3.932zM164.259 455.934v-70.431c0-1.402.498-2.62 1.494-3.655.997-1.033 2.271-1.55 3.821-1.55h22.923c18.162 0 27.242 7.9 27.242 23.698 0 11.517-4.468 19.01-13.399 22.48l13.51 24.474c.369.517.554 1.182.554 1.993 0 2.142-1.163 4.172-3.489 6.091-2.325 1.921-4.78 2.878-7.364 2.878-2.585 0-4.429-1.068-5.537-3.21l-15.172-29.458h-7.309v26.689c0 1.699-.85 3.009-2.548 3.93-1.699.925-3.728 1.385-6.091 1.385-2.364 0-4.393-.46-6.091-1.385-1.696-.92-2.544-2.23-2.544-3.929zm17.275-39.977h10.962c3.249 0 5.721-.794 7.42-2.381 1.698-1.587 2.546-4.226 2.546-7.918 0-3.691-.849-6.33-2.546-7.918-1.7-1.587-4.172-2.381-7.42-2.381h-10.962v20.598zM228.931 455.934v-70.431c0-1.402.498-2.62 1.494-3.655.997-1.033 2.271-1.55 3.821-1.55h22.923c18.162 0 27.242 7.9 27.242 23.698 0 11.517-4.468 19.01-13.399 22.48l13.51 24.474c.369.517.554 1.182.554 1.993 0 2.142-1.163 4.172-3.489 6.091-2.325 1.921-4.78 2.878-7.364 2.878-2.585 0-4.429-1.068-5.537-3.21l-15.172-29.458h-7.309v26.689c0 1.699-.85 3.009-2.548 3.93-1.699.925-3.728 1.385-6.091 1.385-2.364 0-4.393-.46-6.091-1.385-1.696-.92-2.544-2.23-2.544-3.929zm17.275-39.977h10.962c3.249 0 5.721-.794 7.42-2.381 1.698-1.587 2.547-4.226 2.547-7.918 0-3.691-.849-6.33-2.547-7.918-1.7-1.587-4.172-2.381-7.42-2.381h-10.962v20.598zM292.718 435.779v-29.346c0-9.005 2.473-15.614 7.419-19.822 4.945-4.208 11.518-6.312 19.712-6.312 8.267 0 14.875 2.104 19.822 6.312 4.945 4.208 7.419 10.817 7.419 19.822v29.346c0 9.008-2.474 15.614-7.419 19.822-4.947 4.208-11.555 6.312-19.822 6.312-8.195 0-14.767-2.104-19.712-6.312-4.946-4.208-7.419-10.813-7.419-19.822zm17.275 0c0 7.383 3.284 11.074 9.856 11.074 6.644 0 9.966-3.691 9.966-11.074v-29.346c0-7.381-3.322-11.073-9.966-11.073-6.573 0-9.856 3.692-9.856 11.073v29.346zM358.164 455.934v-70.431c0-1.402.498-2.62 1.495-3.655.997-1.033 2.271-1.55 3.821-1.55h22.923c18.162 0 27.242 7.9 27.242 23.698 0 11.517-4.468 19.01-13.399 22.48l13.51 24.474c.369.517.554 1.182.554 1.993 0 2.142-1.163 4.172-3.489 6.091-2.325 1.921-4.78 2.878-7.364 2.878-2.585 0-4.429-1.068-5.537-3.21l-15.172-29.458h-7.309v26.689c0 1.699-.85 3.009-2.548 3.93-1.699.925-3.728 1.385-6.091 1.385-2.364 0-4.393-.46-6.091-1.385-1.697-.92-2.545-2.23-2.545-3.929zm17.276-39.977h10.962c3.249 0 5.721-.794 7.42-2.381 1.698-1.587 2.547-4.226 2.547-7.918 0-3.691-.849-6.33-2.547-7.918-1.7-1.587-4.172-2.381-7.42-2.381H375.44v20.598z"/>
                      </g>
                      </svg>
                <div class="icon__text">ПОПРОБУЙ ЕЩЁ РАЗ...<span id="error-message"></span></div>
            </div>
            <div id="content" class="content"></div>
        </div>
`;

const TEXTS = {
            FEELS_LIKE: 'ощущается как',
            ICON_ALT: 'погодные условия',
            ERROR_DID_NOT_SUPPORT: 'Geolocation API не поддерживается на вашем устройстве',
            ERROR_GET_WEATHER_DATA: 'Не удалось получить данные о погоде от API',
            ERROR_POSITION_UNAVAILABLE: 'Информация о геопозиции недоступна',
            ERROR_TIMEOUT: 'Запрос геопозиции завершился по таймауту',
            ERROR_UNKNOWN: 'Неизвестная ошибка',
        };

        /**
         * Состояния приложения
         * - загрузка
         * - требутеся доступ к геопозиции
         * - ошибка
         */
        const STATE = {
            LOADING: 'loading',
            GEOLOCATION: 'geolocation',
            ERROR: 'error',
        };

        /**
         * Кеширование запросов к API через localStorage
         * Кеш считается устаревшим, когда с момента запроса прошло 15 минут
         * или измелись координаты пользователя
         * Признак того, что кеш устарел или отсутствует - метод get возвращает null
         */
        const storage = {
            _name: 'weather-data',

            /**
             * @param {Object} coords
             * @param {number} coords.latitude
             * @param {number} coords.longitude
             * @returns {Object|null}
             */
            get(coords) {
                const store = localStorage.getItem(this._name);

                // в localStorage еще ничего не сохранили (первый запуск)
                if (!store) {
                    return null;
                }

                // с момента последнего запроса api прошло больше 15 минут - кеш устарел
                if (this._itsBeen15Minutes()) {
                    return null;
                }

                // за 15 минут пользователь успел оказаться в другом городе...
                // или разработчик изменил координаты через DevTools для откладки - кеш устарел :)
                if (this._isDifferentCoors(coords)) {
                    return null;
                }

                return this._getStore().data;
            },

            /**
             * @param {Object} coords
             * @param {number} coords.latitude
             * @param {number} coords.longitude
             *
             * @param {Object} data
             */
            set(coords, data) {
                localStorage.setItem(this._name, JSON.stringify({
                    coords,
                    data,
                    lastChangeTime: new Date(),
                }));
            },

            /**
             * @returns {Object}
             */
            _getStore() {
                return JSON.parse(localStorage.getItem(this._name));
            },

            /**
             * @returns {boolean}
             */
            _itsBeen15Minutes() {
                const {
                    lastChangeTime
                } = this._getStore();

                const diffMs = new Date() - new Date(lastChangeTime);
                const fifteenMinutesMs = 1000 * 60 * 15;

                return diffMs > fifteenMinutesMs ? true : false;
            },

            /**
             * @param {Object} coords
             * @param {number} coords.latitude
             * @param {number} coords.longitude
             * @returns {boolean}
             */
            _isDifferentCoors({
                latitude: lat,
                longitude: lon
            }) {
                const {
                    coords: {
                        latitude,
                        longitude
                    }
                } = this._getStore();

                const threshold = 0.01;
                const latDiff = Math.abs(latitude - lat);
                const lonDiff = Math.abs(longitude - lon);

                if (latDiff > threshold || lonDiff > threshold) {
                    return true;
                }

                return false;
            },

        };

        /*
            Загрузка приложения происходит в четыре этапа:
            1. Показать пользователю лоадер
            2. Попробовать получить информацию о геопозиции
            3. Для полученной геопозиции запросить текущую погоду и прогноз на сутки
            4. Отрисовать полученные данные

            Если геопозиция недоступка, или запрос к API завершился ошибкой,
            то вместо лоадера показываем заглушку с ошибкой, т.к. отрисоывать нечего.

            Кроме того, кешируем ответ API на 15 минут, чтобы не отъедать личшние ресурсы
        */
        setAppState(STATE.LOADING);
        getGeodata();

        /*
            Запрос за данными и обработка ошибок
        */

        /**
         * Запрос геоданных через Geolocation API
         */
        function getGeodata() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(renderWeather, showError);
            } else {
                setErrorMessage(TEXTS.ERROR_DID_NOT_SUPPORT)
                setAppState(STATE.ERROR);
            }
        }

        /**
         * Получить данные о погоде для текущий геолокации и показать информацию пользователю
         * @param {Object} geodata
         * @param {Object} geodata.coords
         */
        function renderWeather({
            coords
        }) {
            getWeatherData(coords)
                .then((data) => {
                    const [currentWeatherData, nextDayForecastData] = data;
                    render({
                        currentWeatherData,
                        nextDayForecastData
                    });
                })
                .catch((error) => {
                    console.error(error);
                    setErrorMessage(TEXTS.ERROR_GET_WEATHER_DATA);
                    setAppState(STATE.ERROR);
                });
        }

        /**
         * @param {Object} coords
         * @param {number} coords.latitude
         * @param {number} coords.longitude
         */
        function getWeatherData(coords) {
            const cache = storage.get(coords);

            if (cache) {
                return Promise.resolve(cache);
            }

            return fetchWeather(coords)
                .then((resp) => {
                    if (!resp || hasFailedResponses(resp)) {
                        throw new Error('API response has error')
                    }

                    storage.set(coords, resp);
                    return resp;
                })
        }

        /**
         * @param {Object} coords
         * @param {number} coords.latitude
         * @param {number} coords.longitude
         */
        function fetchWeather({
            latitude: lat,
            longitude: lon
        }) {
            const apiToken = 'a4b0a5328237e10edbccf6745ccbbc3e';
            const apiParams = new URLSearchParams({
                lat,
                lon,
                appid: apiToken,
                lang: 'ru',
                units: 'metric',
            });

            const schema = 'https://'
            const currentWeatherUrlAPI = `${schema}api.openweathermap.org/data/2.5/weather`;
            const nextDayForecastUrlAPI = `${schema}api.openweathermap.org/data/2.5/forecast`;

            const currentWeatherRequestUrl = `${currentWeatherUrlAPI}?${apiParams}`;
            const nextDayForecastRequestUrl = `${nextDayForecastUrlAPI}?${apiParams}`;

            return Promise.all([
                fetch(currentWeatherRequestUrl),
                fetch(nextDayForecastRequestUrl),
            ]).then(([firstResp, secondResp]) => {
                return Promise.all([
                    firstResp.json(),
                    secondResp.json(),
                ]);
            });
        }

        /**
         * Промежуточные состояния приложения до его полной загрузки
         * Как только приложение загрузилось - убираем промежуточные состояния
         * @param {string} state '' | LOADING | GEOLOCATION | ERROR
         */
        function setAppState(state) {
            const app = document.getElementById('app');

            const classPrefix = 'app_state_';
            const classLoading = `${classPrefix}${STATE.LOADING}`;
            const classGeolocation = `${classPrefix}${STATE.GEOLOCATION}`;
            const classError = `${classPrefix}${STATE.ERROR}`;

            switch (state) {
                case STATE.LOADING:
                    {
                        app.classList.add(classLoading);
                        break;
                    }
                case STATE.GEOLOCATION:
                    {
                        app.classList.remove(classLoading);
                        app.classList.add(classGeolocation);
                        break;
                    }
                case STATE.ERROR:
                    {
                        app.classList.remove(classLoading);
                        app.classList.add(classError);
                        break;
                    }
                default:
                    {
                        app.classList.remove(classLoading);
                    }
            }
        }

        /**
         * Отобразить информацию об ошибке в интерфейсе
         * @param {string} message
         */
        function setErrorMessage(message) {
            document.getElementById('error-message').innerText = message;
        }

        /**
         * Получает список ответов от API и проверяет, что все завершились успешно
         * Признак успеха поле cod, которое содержит код в виде строки или числа
         * @param {Array} responses
         * @returns {boolean}
         */
        function hasFailedResponses(responses) {
            const isNotOk = ({
                cod
            }) => Number(cod) !== 200;
            const failedResponses = responses.filter(isNotOk);

            if (failedResponses.length > 0) {
                logFailedResponses(failedResponses);
                return true;
            }

            return false;
        }

        /**
         * Вывести информация о неудачных запросах
         * @param {Object} failedResponses
         */
        function logFailedResponses(failedResponses) {
            failedResponses.forEach(({
                cod,
                message
            }) => {
                console.error('Respons Failed:', cod, message);
            });
        }

        /**
         * Обработчик ошибок для Geolocation API в getCurrentPosition
         * @param {Ojbect} error
         */
        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    {
                        setAppState(STATE.GEOLOCATION);
                        break;
                    }
                case error.POSITION_UNAVAILABLE:
                    {
                        setErrorMessage(TEXTS.ERROR_POSITION_UNAVAILABLE);
                        setAppState(STATE.ERROR);
                        break;
                    }
                case error.TIMEOUT:
                    {
                        setErrorMessage(TEXTS.ERROR_TIMEOUT);
                        setAppState(STATE.ERROR);
                        break;
                    }
                case error.UNKNOWN_ERROR:
                    {
                        setErrorMessage(TEXTS.ERROR_UNKNOWN);
                        setAppState(STATE.ERROR);
                        break;
                    }
            }
        }

        /*
            Отрисовка приложения
        */

        /**
         * Отрисовать приложение и убрать состояние загрузки
         * @param {Oject} data
         * @param {Oject} data.currentWeatherData
         * @param {Oject} data.nextDayForecastData
         */
        function render({
            currentWeatherData,
            nextDayForecastData
        }) {
            const fragment = document.createDocumentFragment();
            fragment.appendChild(renderCurrentWeather(currentWeatherData))
            fragment.appendChild(renderForecast(nextDayForecastData))

            const content = document.getElementById('content');
            content.appendChild(fragment);
            setAppState('');
        }

        /**
         * Отрисовать блок с текущей погодой
         * @param {Object} data
         * @returns {DOM.Element}
         */
        function renderCurrentWeather(data) {
            const {
                name: cityName
            } = data;
            const {
                temp,
                icon,
                description,
                feelsLike
            } = normalizeDataForUI(data);

            const blockName = 'current-weather';
            const b = (elem) => `${blockName}__${elem}`;

            const weather = [
                createElem('div', b('temp'), temp),
                createIcon(icon, b('icon'))
            ];

            const content = [
                createElem('div', b('city'), cityName),
                createContainer(b('weather'), weather),
                createElem('div', b('description'), description),
                createElem('div', b('feels-like'), `${TEXTS.FEELS_LIKE} ${feelsLike}`),
            ];

            return createContainer(blockName, content);
        }

        /**
         * Отрисовать прогноз погоды на сутки вперед
         * @param {Object} data
         * @returns {HTMLElement}
         */
        function renderForecast(data) {
            const nextDayIntervals = getNextDayWeather(data);

            const blockName = 'forecast';
            const b = (elem) => `${blockName}__${elem}`;

            const content = nextDayIntervals.map((weather) => {
                const {
                    time,
                    icon,
                    description,
                    temp,
                    feelsLike
                } = weather;
                const content = [
                    createElem('span', b('time'), time),
                    createIcon(icon, b('icon')),
                    createElem('span', b('description'), description),
                    createElem('span', b('temp'), temp),
                    createElem('span', b('feels-like'), feelsLike),
                ];

                return createContainer(b('hours'), content);
            });

            return createContainer(blockName, content);
        }

        /**
         * Хелпер для создания HTML контейнера c элементами внутри
         * @param {Object} data
         * @param {Array<HTMLElement>}
         * @returns {HTMLElement}
         */
        function createContainer(className, content) {
            const container = createElem('div', className);
            content.forEach((elem) => {
                container.appendChild(elem);
            });
            return container;
        }

        /**
         * Хелпер для создания HTML элемента с классом и текстом
         * @param {string} tag
         * @param {string} className
         * @param {string} textContent
         * @returns {HTMLElement}
         */
        function createElem(tag, className, textContent) {
            const elem = document.createElement(tag);
            elem.classList.add(className);

            if (textContent) {
                elem.textContent = textContent;
            }

            return elem;
        }

        /**
         * Хелпер для создания иконки с погодой
         * @param {string} iconId
         * @param {string} className
         * @returns {HTMLElement}
         */
        function createIcon(iconId, className) {
            const src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
            const img = document.createElement('img');
            img.classList.add(className);
            img.alt = TEXTS.ICON_ALT;
            img.src = src;

            return img;
        }

        /**
         * Получить погоду на следующие сутки из ответа API с прогнозом на 5 дней
         * @param {Object} data
         * @param {Array} list
         */
        function getNextDayWeather({
            list: weatherList
        }) {
            const intervalHours = 1;
            const dayLenHours = 48;
            const intervalsCount = dayLenHours / intervalHours;
            const dayIntervals = weatherList.slice(0, intervalsCount);

            return dayIntervals.map(normalizeDataForUI);
        }

        /**
         * Взять из данных API только нужные поля для отрисовки в интерфейсе
         * @param {Object} weatherObject
         * @returns {Object}
         */
        function normalizeDataForUI(weatherObject) {
            const {
                main,
                weather: [primaryWeather],
                dt: timestemp
            } = weatherObject;
            return {
                time: normalizeTime(timestemp),
                temp: normalizeTemp(main.temp),
                feelsLike: normalizeTemp(main.feels_like),
                icon: primaryWeather.icon,
                description: primaryWeather.description,
            }
        }

        /**
         * Преобразовать timestemp из ответа API во время в формате HH:MM
         * @param {number} timestemp
         */
        function normalizeTime(timestemp) {
            const date = new Date(timestemp * 1000);
            const hours = date.getHours();
            return `${String(hours).padStart(2, '0')}:00`;
        }

        /**
         * Округлить значение температуры и добавить знак
         * @param {number} temp
         */
        function normalizeTemp(temp) {
            const degree = Math.round(temp);
            const sign = degree === 0 ? '' : (degree > 0 ? '+' : '-');
            return `${sign}${Math.abs(degree)}`;
        }
        
 let footer = document.getElementById('footer');
 footer.innerHTML = `<p>С уважением, Берлин Андрей. ©2020-2025</p>`;

let style = document.getElementById('style');
style.innerHTML=` @keyframes pulse {
            from {
                transform: scale3d(1, 1, 1);
            }
            50% {
                transform: scale3d(1.05, 1.05, 1.05);
            }
            to {
                transform: scale3d(1, 1, 1);
            }
        }
        
        @keyframes shake {
            from,
            to {
                transform: translate3d(0, 0, 0);
            }
            10%,
            30%,
            50%,
            70%,
            90% {
                transform: translate3d(-10px, 0, 0);
            }
            20%,
            40%,
            60%,
            80% {
                transform: translate3d(10px, 0, 0);
            }
        }
        
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translate3d(100%, 0, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
        
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translate3d(-100%, 0, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
        
        body {
            all: unset;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
        }
        
        #body {
            background:#c7c7c7;
        }
        
        header {
            background: #00000000;
            text-align: center;
            color: #000000;
        }
        
        section {
            background:#c7c7c7;
            text-align: center;
            color: #303030;
        }
        
        .app {
            background: #849297;
            font-size: 20px;
            min-width: 320px;
            max-width: 420px;
            margin: 0 auto;
            color:#ffffff;
        }
        
        @media (min-width: 1024px) and (min-height: 768px) {
            .app {
                margin-top: 150px;
            }
        }
        
        .icon {
            display: none;
            padding-top: 100px;
            flex-direction: column;
            align-items: center;
        }
        
        .icon svg {
            width: 200px;
        }
        
        .icon__loading svg {
            animation: pulse 2s infinite;
        }
        
        .icon__geolocation svg,
        .icon__error svg {
            animation: shake 1s;
        }
        
        .icon__text {
            margin-top: 20px;
        }
        
        .app_state_loading .icon__loading {
            display: flex;
        }
        
        .app_state_geolocation .icon__geolocation {
            display: flex;
        }
        
        .app_state_error .icon__error {
            display: flex;
        }
        
        .app_state_loading .content,
        .app_state_geolocation .content,
        .app_state_error .content {
            display: none;
        }
        
        .content {
            margin-top: 30px;
        }
        
        .current-weather {
            min-height: 170px;
            display: flex;
            flex-direction: column;
            align-items: center;
            animation: fadeInLeft 1s;
        }
        
        .current-weather__city {
            font-size: 32px;
            line-height: 32px;
            font-weight: bold;
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        
        .current-weather__weather {
            margin-bottom: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .current-weather__temp {
            font-size: 54px;
            line-height: 54px;
            font-weight: bold;
        }
        
        .current-weather__temp::after {
            content: '°';
        }
        
        .current-weather__icon {
            width: 100px;
            height: 100px;
        }
        
        .current-weather__description,
        .current-weather__feels-like {
            max-width: 250px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .current-weather__description::first-letter,
        .current-weather__feels-like::first-letter {
            text-transform: capitalize;
        }
        
        .forecast {
            margin: 30px 20px;
            animation: fadeInRight 1s;
        }
        
        .forecast__hours {
            display: flex;
            align-items: center;
        }
        
        .forecast__time {
            width: 54px;
            text-align: left;
            font-size: 14px;
        }
        
        .forecast__icon {
            width: 50px;
            margin: -9px 5px;
        }
        
        .forecast__description {
            margin-right: auto;
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        @media (min-width: 320px) {
            .forecast__description {
                max-width: 100px;
            }
        }
        
        @media (min-width: 375px) {
            .forecast__description {
                max-width: 154px;
            }
        }
        
        .forecast__temp,
        .forecast__feels-like {
            width: 32px;
            text-align: right;
        }
        
        .forecast__temp {
            font-weight: bold;
        }
        
        .forecast__feels-like {
            opacity: .7;
        }
        
        #timedate {
            background:#fbfbfb;
            color: rgb(19, 12, 86);
            font: 40px "Segoe UI", "Frutiger", "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
            text-align: center;
            /*  width: 50%;
  margin: 50px auto;
  color:rgb(0,0,0);*/
            /* border: 5px solid #ed1f24;
  padding: 5px;*/
        }`;