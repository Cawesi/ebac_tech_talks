AOS.init();

const dataEvento = new Date("Jun 5, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diasEmMilesegundos = 1000 * 60 * 60 * 24;
    const horaEmMinuto = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const dias = Math.floor(distanciaEvento / diasEmMilesegundos);
    const horas = Math.floor((distanciaEvento % diasEmMilesegundos) / horaEmMinuto);
    const minutos = Math.floor((distanciaEvento % horaEmMinuto) / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaEvento / minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundosAteEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = "Evento expirado."
    }

}, 1000);