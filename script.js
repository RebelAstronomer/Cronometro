// Pegando o elemento do cronometro
const $cronometer = document.getElementById('cronometro');
const $container = document.querySelector('.cronometro');
var isCounting = false;

/* Variáveis para o contador */
var hour = 0;
var min = 0;
var sec = 0;
var interval

// Função para iniciar o cronometro
function start() {
    // Checando se já está contando ou não
    // Evita que possa ser chamado diversas vezes
    if (isCounting == false) {
        interval = setInterval(counter,1000);
        isCounting = true;
    }

    // Animação
    checkAnimation("startAnim")
    
}

// Função para pausar o cronometro
function pause() {
    clearInterval(interval);
    isCounting = false;

    // Animação
    checkAnimation("stopAnim");
}

// Função para resetar o conometro
function reset() {
    // Parando de contar
    clearInterval(interval);
    isCounting = false;

    // Animação
    checkAnimation("resetAnim");

    // Resetando as váriaveis
    hour = 0;
    min = 0;
    sec = 0;

    // Aplicando a contagem no contador
    $cronometer.textContent = doubleDigits(hour) + ":" + doubleDigits(min) + ":" + doubleDigits(sec);
}

// Função para contar o tempo passado após a ativação
function counter() {
    // Contando o segundos
    sec += 1;

    // Contando os minutos
    if (sec == 60) {
        min += 1;
        sec = 0;
    }

    // Contando as horas
    if (min == 50) {
        hour += 1;
        min = 0;
    }

    // Aplicando a contagem no contador
    $cronometer.textContent = doubleDigits(hour) + ":" + doubleDigits(min) + ":" + doubleDigits(sec);

}

// Função para adicionar um digito extra caso o número não seja um decimal
function doubleDigits(digit) {
    if (digit < 10) {
        return ('0'+digit);
    }
    else {
        return digit;
    }
}

// Função para mudar de animações
function checkAnimation(newAnim) {

    /*  Checando se tem alguma animação aplicada ao conometro 
        se tiver outra animação, remova ela e adicione a nova.
        Se não tiver apenas adicione a animação */
    if ($container.classList[1] != newAnim) {
        var className = $container.classList[1];
        $container.classList.remove(className);
        $container.classList.add(newAnim);
    }
    else {
        $container.classList.remove(newAnim);
    }

}