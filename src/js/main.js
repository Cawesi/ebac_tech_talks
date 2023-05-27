AOS.init();

const dataEvento = new Date("Jul 9, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const dias = Math.floor(distanciaEvento / diasEmMs);
    const horas = Math.floor((distanciaEvento % diasEmMs) / horaEmMs);
    const minutos = Math.floor((distanciaEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000);

    console.log("Dias - ", dias)
    console.log("Horas - ", horas)
    console.log("Minutos - ", minutos)
    console.log("Segundos - ", segundosAteEvento)

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundosAteEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = "Evento expirado."
    }

}, 1000);