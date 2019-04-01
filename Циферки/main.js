var tableEl = document.getElementById('game_table');
var timerEl = document.getElementById('timer');
var startEl = document.getElementById('start');
var restartEl = document.getElementById('restart');
var paused = false;
var now = 0;
var timer;
var rows = 5;
var columns = 5;
var time = 75;
var restTime = time;
startEl.addEventListener('click', gameStart);
restartEl.addEventListener('click', gameRestart);
tableEl.addEventListener('click', init);
function gameStart() {
    startEl.style.display = 'none';
    restartEl.style.display = 'block';
    create();
    timerEl.innerHTML = 'Времени осталось: ' + restTime;
    timer = setInterval(timeStep, 1000);
}
function gameRestart() {
    restTime = time;
    now = 0;
    clearInterval(timer);
    gameStart();
}
function timeStep() {
    restTime--;
    if (restTime > 0) {
        timerEl.innerHTML = 'Времени осталось: ' + restTime;
    } else {
        clearInterval(timer);
        timerEl.innerHTML = 'Вы проиграли';
        paused = true;
    }
}
function init(event) {
    var targ = event.target //элемент, на котором произошло событие
    var check = targ.classList.contains('td') &&
        !targ.classList.contains('select') && !paused;
    if (check) {
        var val = +targ.innerHTML;
        console.log(val, now)
        if (val === now + 1) {
            now += 1;
            targ.classList.add('select');
            if (val === rows * columns) {
                timerEl.innerHTML = 'Вы выиграли';
                clearInterval(timer);
            }
        }	
    }
}
function create() {
    startEl.style.display = 'none';
    var numbers = getNumbers();
    var html = '';
    for (var i = 0; i < rows; i++) {
        html += '<tr>';
            for (var j = 0; j < columns; j++) {
                html += '<td class="td" style="' 
                    + getRandomStyle() + '">' 
                    + getRandomNumber(); + '</td>'
            }
        html += '</tr>';
    }
    tableEl.innerHTML = html;
    function getRandomNumber() {
        var n = randomInterval(0, numbers.length - 1);
        var res = numbers[n]
        numbers.splice(n, 1);
        return res;
    }
}
function getRandomStyle() {
    return 'font-size:' + randomInterval(14, 40) + 'px;'
        + 'color:' + getRandomColor();
}
function getNumbers() {
    var numbers = [];
    for (var i = 0; i < rows*columns; i++) {
        numbers[i] = i + 1;
    }
    return numbers;
}
function randomInterval(min, max) {
    return Math.round(Math.random() * (max - min) + min);
} 
function getRandomColor() {
  return 'rgb(' + randomInterval(0, 255) + ',' + 
    randomInterval(0, 255) + ',' + randomInterval(0, 255) + ')';
}