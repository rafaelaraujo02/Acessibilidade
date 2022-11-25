let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
/* 
const leaorato = {
  historia: " Certa vez, um leão estava dormindo na selva quando um rato começou a correr para cima e para baixo em seu corpo apenas para se divertir. Isso perturbou o sono do leão, e ele acordou muito zangado, ele estava prestes a comer o rato quando o rato pediu desesperadamente ao leão que o libertasse. “Eu prometo a você, um dia serei de grande ajuda se você me salvar.” O leão riu da confiança do rato e o deixou ir. Um dia, alguns caçadores entraram na floresta e levaram o leão com eles. Eles o amarraram contra uma árvore. O leão estava lutando para sair e começou a choramingar. Logo, o rato passou e notou o leão em apuros. Rapidamente, ele correu e roeu as cordas para libertar o leão. Os dois correram e o leão ficou livre.",
};
document.querySelector("#lerHistoria").addEventListener("click", () => {
  speech.text = leaorato.historia;
  window.speechSynthesis.speak(speech);
});
*/
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#rate").addEventListener("input", () => {
  const rate = document.querySelector("#rate").value;
  speech.rate = rate;
  document.querySelector("#rate-label").innerHTML = rate;
});

document.querySelector("#volume").addEventListener("input", () => {
  const volume = document.querySelector("#volume").value;
  speech.volume = volume;
  document.querySelector("#volume-label").innerHTML = volume;
});

document.querySelector("#pitch").addEventListener("input", () => {
  const pitch = document.querySelector("#pitch").value;
  speech.pitch = pitch;
  document.querySelector("#pitch-label").innerHTML = pitch;
});

document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});

document.querySelector("#start").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
});

document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
});

document.querySelector("#cancel").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

document.querySelector("#apagar").addEventListener("click", () => {
  let textarea = document.querySelector('textarea');
  textarea.value = "";

});

// LEÃO E O RATO
document.querySelector("#ouvirLeaoRato").addEventListener("click", () => {
  let leaorato = {
    historia: 
  'Certo dia, estava um Leão a dormir a sesta quando um ratinho começou a correr por cima dele.\n'+ 
  'O Leão acordou, pôs-lhe a pata em cima, abriu a bocarra e preparou-se para o engolir.\n'+
  '\n'+
  'Perdoa-me! - gritou o ratinho - Perdoa-me desta vez e eu nunca o esquecerei.\n'+
  'Quem sabe se um dia não precisarás de mim?\n'+
  '\n'+
  'O Leão ficou tão divertido com esta ideia que levantou a pata e o deixou partir. Dias depois\n'+
  'o Leão caiu numa armadilha. Como os caçadores o queriam oferecer vivo ao Rei, amarraram-no a\n'+ 
  'uma árvore e partiram à procura de um meio para o transportarem. Nisto, apareceu o ratinho.\n'+
  'Vendo a triste situação em que o Leão se encontrava, roeu as cordas que o prendiam.\n'+
  '\n'+
  'E foi assim que um ratinho pequenino salvou o Rei dos Animais.\n'
   };
  speech.text = leaorato.historia;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#lerLeaoRato").addEventListener("click", () => {

  let textarea = document.querySelector('textarea');
  let assinatura = 
  'Certo dia, estava um Leão a dormir a sesta quando um ratinho começou a correr por cima dele.\n'+ 
  'O Leão acordou, pôs-lhe a pata em cima, abriu a bocarra e preparou-se para o engolir.\n'+
  '\n'+
  'Perdoa-me! - gritou o ratinho - Perdoa-me desta vez e eu nunca o esquecerei.\n'+
  'Quem sabe se um dia não precisarás de mim?\n'+
  '\n'+
  'O Leão ficou tão divertido com esta ideia que levantou a pata e o deixou partir. Dias depois\n'+
  'o Leão caiu numa armadilha. Como os caçadores o queriam oferecer vivo ao Rei, amarraram-no a\n'+ 
  'uma árvore e partiram à procura de um meio para o transportarem. Nisto, apareceu o ratinho.\n'+
  'Vendo a triste situação em que o Leão se encontrava, roeu as cordas que o prendiam.\n'+
  '\n'+
  'E foi assim que um ratinho pequenino salvou o Rei dos Animais.\n'
  
  textarea.value = assinatura;
});

document.querySelector("#moralLeaoRato").addEventListener("click", () => {
  let moralLeaorato = {
    moralDaHistoria: "Um pequeno ato de gentileza pode ajudar muito.",
  };
  let textarea = document.querySelector('textarea');
  textarea.value = moralLeaorato.moralDaHistoria;

  speech.text = moralLeaorato.moralDaHistoria;
  window.speechSynthesis.speak(speech);


});

// RAPOSA E AS UVAS
document.querySelector("#ouvirRaposaUva").addEventListener("click", () => {
  let historia = {
    contexto: "Uma raposa passou embaixo de um pé carregado com lindas uvas. Ficou com muita vontade de comer aquelas uvas. Deu muitos saltos, tentou subir na parreira, mas não conseguiu. Depois de muito tentar foi-se embora, dizendo: Eu nem estou ligando para as uvas. Elas estão verdes, mesmo...",
  };
  speech.text = historia.contexto;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#lerRaposaUva").addEventListener("click", () => {

  let textarea = document.querySelector('textarea');
  let assinatura = 
  'Numa manhã de outono, enquanto uma raposa descansava debaixo de uma plantação de uvas,\n'+
  'viu alguns ramos de uvas bonitas e maduras, diante dos seus olhos. Com desejo de comer algo\n'+ 
  'refrescante e diferente do que estava acostumada, a raposa se levantou, ergueu as patas para\n'+
  'pegar e comer as uvas.\n'+
  '\n'+
  'O que a raposa não sabia era que os ramos das uvas estavam muito mais altos do que ela\n'+
  'imaginava. Então, buscou um meio de alcançá-los. Pulou, pulou, mas seus dedos não\n'+
  'conseguiam nem tocá-los.\n'+
  '\n'+
  'Havia muitas uvas, mas a raposa não podia alcançá-las. Voltou a correr e a saltar outra vez, mas\n'+
  'o salto foi curto. Ainda assim a raposa não se deu por vencida. Novamente correu e saltou, e nada.\n'+
  'As uvas pareciam estar cada vez mais distantes e mais altas.\n'+
  '\n'+
  'Cansada pelo esforço e se sentindo impossibilitada de conseguir alcançar as uvas, a raposa se\n'+
  'convenceu de que era inútil repetir a tentativa. As uvas estavam muito altas e a raposa sentiu-se\n'+ 
  'muito frustrada. Esgotada e resignada, a raposa decidiu desistir das uvas.\n'+
  '\n'+
  'Quando a raposa estava quase retornando para o bosque se deu conta que um pássaro que voava por ali,\n'+
  'tinha observado toda a cena e se sentiu envergonhada. Acreditando ter feito um papel ridículo para\n'+
  'conseguir alcançar as uvas, a raposa se dirigiu ao pássaro e disse: Eu teria conseguido alcançar as\n'+ 
  'uvas se elas estivessem maduras. Eu me enganei no começo, pensando que estavam maduras, mas quando me\n'+
  'dei conta que ainda estavam verdes, desisti de alcançá-las. As uvas verdes não são um bom alimento\n'+
  'para um paladar tão refinado como o meu.\n'+
  '\n'+
  'E foi assim que a raposa seguiu o seu caminho, tentando se convencer de que não foi por falta de\n'+
  'esforço que ela não tinha conseguido comer aquelas uvas deliciosas. E sim porque estavam verdes.\n'
  
  textarea.value = assinatura;
});

document.querySelector("#moralRaposaUva").addEventListener("click", () => {
  let moralHistoria = {
    moralHistoria: "A breve história nos fala sobre a cobiça e sobre como algumas pessoas lidam com a frustração mascarando o sentimento de desapontamento.",
  };
  speech.text = moralHistoria.moralHistoria;
  window.speechSynthesis.speak(speech);
});

// REI AKBAR
document.querySelector("#ouvirAkbar").addEventListener("click", () => {
  let historia = {
    contexto: "Um dia, o rei Akbar fez uma pergunta em sua corte que deixou todos no tribunal perplexos. Enquanto todos tentavam descobrir a resposta, Birbal entrou e perguntou qual era o problema. Eles repetiram a pergunta para ele. A pergunta era: Quantos corvos existem na cidade? Birbal sorriu imediatamente e foi até Akbar. Ele anunciou a resposta; ele disse que havia vinte e um mil quinhentos e vinte e três corvos na cidade. Quando questionado sobre como ele sabia a resposta, Birbal respondeu: Peça a seus homens para contar o número de corvos. Se houver mais, então os parentes dos corvos devem estar visitando as cidades próximas. Se houver menos, então os corvos de nossa cidade devem estar visitando seus parentes que moram fora da cidade. Satisfeito com a resposta, Akbar presenteou Birbal com um rubi e uma corrente de pérolas.",
  };
  speech.text = historia.contexto;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#lerAkbar").addEventListener("click", () => {

  let textarea = document.querySelector('textarea');
  let assinatura = 
  'Um dia, o rei Akbar fez uma pergunta em sua corte que deixou todos no tribunal perplexos.\n'+
  'Enquanto todos tentavam descobrir a resposta, Birbal entrou e perguntou qual era o problema.\n'+
  'Eles repetiram a pergunta para ele. A pergunta era: Quantos corvos existem na cidade? Birbal sorriu imediatamente e foi até Akbar.\n'+
  'Ele anunciou a resposta; ele disse que havia vinte e um mil quinhentos e vinte e três corvos na cidade.\n'+
  '\n'+
  'Quando questionado sobre como ele sabia a resposta, Birbal respondeu: Peça a seus homens para contar o número de corvos.\n'+
  'Se houver mais, então os parentes dos corvos devem estar visitando as cidades próximas.\n'+
  'Se houver menos, então os corvos de nossa cidade devem estar visitando seus parentes que moram fora da cidade.\n'+
  'Satisfeito com a resposta, Akbar presenteou Birbal com um rubi e uma corrente de pérolas.\n'
  
  textarea.value = assinatura;
});

document.querySelector("#moralReiAkbar").addEventListener("click", () => {
  let moralHistoria = {
    moralHistoria: "Ter uma explicação para sua resposta é tão importante quanto ter uma resposta.",
  };
  speech.text = moralHistoria.moralHistoria;
  window.speechSynthesis.speak(speech);
});

// Derick e o Lápis
document.querySelector("#ouvirDerick").addEventListener("click", () => {
  let historia = {
    contexto: "Um menino chamado Derick ficou chateado porque tinha se saído mal no teste de inglês. Ele estava sentado em seu quarto quando sua avó veio e o confortou. Sua avó se sentou ao lado dele e lhe deu um lápis. Derick olhou para a avó intrigado e disse que não merecia um lápis depois de seu desempenho no teste. Sua avó explicou: Você pode aprender muitas coisas com este lápis porque ele é igual a você. Assim como todo o bem que vem do lápis vem de dentro dele, você também encontrará força para superar esse obstáculo. E, finalmente, assim como este lápis fará sua marca em qualquer superfície. Derick foi imediatamente consolado e prometeu a si mesmo que faria melhor.",  
  };
  speech.text = historia.contexto;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#lerDerick").addEventListener("click", () => {

  let textarea = document.querySelector('textarea');
  let assinatura = 
  'Um menino chamado Derick ficou chateado porque tinha se saído mal no teste de inglês.\n'+
  'Ele estava sentado em seu quarto quando sua avó veio e o confortou. Sua avó se sentou ao lado dele e lhe deu um lápis.\n'+
  '\n'+
  'Derick olhou para a avó intrigado e disse que não merecia um lápis depois de seu desempenho no teste.\n'+
  'Sua avó explicou: Você pode aprender muitas coisas com este lápis porque ele é igual a você.\n'+
  '\n'+
  'Assim como todo o bem que vem do lápis vem de dentro dele, você também encontrará força para superar esse obstáculo.\n'+
  'E, finalmente, assim como este lápis fará sua marca em qualquer superfície.\n'+
  'Derick foi imediatamente consolado e prometeu a si mesmo que faria melhor.\n'
  
  textarea.value = assinatura;
});

document.querySelector("#moralDerick").addEventListener("click", () => {
  let moralHistoria = {
    moralHistoria: "Todos nós temos força para ser quem desejamos ser!",
  };
  speech.text = moralHistoria.moralHistoria;
  window.speechSynthesis.speak(speech);
});

//BOTOES DE AUMENTAR E DIMINUIR FONTE
//DECLARA A VARIAVELD E TAMANHO DA FONTE

window.onload = function() {
  var elementBody = document.querySelector('textarea');
  var elementBtnIncreaseFont = document.getElementById('increase-font');
  var elementBtnDecreaseFont = document.getElementById('decrease-font');
  // Padrão de tamanho, equivale a 100% do valor definido no Body
  var fontSize = 100;
  // Valor de incremento ou decremento, equivale a 10% do valor do Body
  var increaseDecrease = 10;

  // Evento de click para aumentar a fonte
  elementBtnIncreaseFont.addEventListener('click', function(event) {
      fontSize = fontSize + increaseDecrease;
      elementBody.style.fontSize = fontSize + '%';
  });

  // Evento de click para diminuir a fonte
  elementBtnDecreaseFont.addEventListener('click', function(event) {
      fontSize = fontSize - increaseDecrease;
      elementBody.style.fontSize = fontSize + '%';
  });
}

//SENTIMENTO

//RAIVA
document.querySelector("#ouvirRaiva").addEventListener("click", () => {
  let ouvir = "Estou com raiva";
  speech.text = ouvir;
  window.speechSynthesis.speak(speech);
});

//FELICIDADE
document.querySelector("#ouvirFelicidade").addEventListener("click", () => {
  let ouvir = "Estou feliz";
  speech.text = ouvir;
  window.speechSynthesis.speak(speech);
});

//SONO
document.querySelector("#ouvirSono").addEventListener("click", () => {
  let ouvir = "Estou com sono";
  speech.text = ouvir;
  window.speechSynthesis.speak(speech);
});

//DOENTE
document.querySelector("#ouvirDoente").addEventListener("click", () => {
  let ouvir = "Estou doente";
  speech.text = ouvir;
  window.speechSynthesis.speak(speech);
});

//FOME
document.querySelector("#ouvirFome").addEventListener("click", () => {
  let ouvir = "Estou com fome";
  speech.text = ouvir;
  window.speechSynthesis.speak(speech);
});

//SEDE
document.querySelector("#ouvirSede").addEventListener("click", () => {
  let ouvir = "Estou com sede";
  speech.text = ouvir;
  window.speechSynthesis.speak(speech);
});

//TRISTE
document.querySelector("#ouvirTriste").addEventListener("click", () => {
  let ouvir = "Estou triste";
  speech.text = ouvir;
  window.speechSynthesis.speak(speech);
});

//MEDO
document.querySelector("#ouvirMedo").addEventListener("click", () => {
  let ouvir = "Estou com medo";
  speech.text = ouvir;
  window.speechSynthesis.speak(speech);
});