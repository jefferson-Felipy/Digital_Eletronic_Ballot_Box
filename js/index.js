"use strict";

const candidatos = [
    {
        nome: 'LULA',
        numero: '13',
        partido: 'PT(Partido dos Trabalhadores).',
        cargo: 'PRESIDENTE'
    },
    {
        nome: 'BOLSONARO',
        numero: '22',
        partido: 'PL(Partido Liberal).',
        cargo: 'PRESIDENTE'
    },
    {
        nome: 'CIRO GOMES',
        numero: '12',
        partido: 'PDT(Partido Democratico Trabalhista).',
        cargo: 'PRESIDENTE'
    },
    {
        nome: 'SIMONE TEBET',
        numero: '15',
        partido: 'MDB',
        cargo: 'PRESIDENTE'
    },
    {
        nome: 'PADRE KELMON',
        numero: '14',
        partido: 'PTB(Partido Trabalhista Brasileiro).',
        cargo: 'PRESIDENTE'
    }
];

const cargo_cand = document.querySelector('.cargo_cand');
const name_cand = document.querySelector('.name_cand');
const partido_cand = document.querySelector('.partido_cand');
const div_two = document.querySelector('.div_two');

const cand_field = document.querySelector('.cand_field');
const cand_field_two = document.querySelector('.cand_field_two');

const number_cand_field_one = document.querySelector('.number_cand_field_one');
const number_cand_field_two = document.querySelector('.number_cand_field_two');
const img_field = document.querySelector('.img_field');

let cand_inc = '';
let votacao = '';

let b = false;
let c = false;

const exib_books = (value) => {
    if (number_cand_field_one.textContent == '' &&  b == false) {
        cand_field.innerHTML = '';
        b = true;
        cand_field_two.innerHTML += "<p class='number_cand_field_one'>"+value+"</p>";
    }
    else if (number_cand_field_two.textContent == '' && c == false ) {
        c = true;
        cand_field_two.innerHTML += "<p class='number_cand_field_one'>"+value+"</p>";
    }
};

const click_btn = (value) => {
    exib_books(value);
    cand_inc += value;
    
    if ((cand_inc.length == 2) && (cand_inc === "13")) {
        votacao = '13';
        cargo_cand.textContent = candidatos[2].cargo;
        name_cand.textContent = `Nome: ${candidatos[0].nome}`;
        partido_cand.textContent = `Partido: ${candidatos[0].partido}`;
        img_field.innerHTML += "<img id='img_cand' src='./public/images/lula.jpg' alt='Candidato Lula'>";
        div_two.innerHTML = "<p class='msg_voto'>Aperte a tecla: <p class='msg_confirma'>CONFIRMA para CONFIRMAR o voto</p><p class='msg_corrige'>CORRIGE para CORRIGIR o voto</p></p>";
    }
    else if ((cand_inc.length == 2) && (cand_inc === "22")) {
        votacao = '22';
        cargo_cand.textContent = candidatos[1].cargo;
        name_cand.textContent = `Nome: ${candidatos[1].nome}`;
        partido_cand.textContent = `Partido: ${candidatos[1].partido}`;
        img_field.innerHTML += "<img id='img_cand' src='./public/images/bolsonaro.jpg' alt='Candidato Bolsonaro'>";
        div_two.innerHTML = "<p class='msg_voto'>Aperte a tecla: <p class='msg_confirma'>CONFIRMA para CONFIRMAR o voto</p><p class='msg_corrige'>CORRIGE para CORRIGIR o voto</p></p>";
    }
    else if ((cand_inc.length == 2) && (cand_inc === "12")) {
        votacao = '12';
        cargo_cand.textContent = candidatos[2].cargo;
        name_cand.textContent = `Nome: ${candidatos[2].nome}`;
        partido_cand.textContent = `Partido: ${candidatos[2].partido}`;
        img_field.innerHTML += "<img id='img_cand' src='./public/images/ciro.jpg' alt='Candidato Ciro'>";
        div_two.innerHTML = "<p class='msg_voto'>Aperte a tecla: <p class='msg_confirma'>CONFIRMA para CONFIRMAR o voto</p><p class='msg_corrige'>CORRIGE para CORRIGIR o voto</p></p>";
    }
    else if ((cand_inc.length == 2) && (cand_inc === "15")) {
        votacao = '15';
        cargo_cand.textContent = candidatos[3].cargo;
        name_cand.textContent = `Nome: ${candidatos[3].nome}`;
        partido_cand.textContent = `Partido: ${candidatos[3].partido}`;
        img_field.innerHTML += "<img id='img_cand' src='./public/images/simone.jpg' alt='Candidata Simone'>";
        div_two.innerHTML = "<p class='msg_voto'>Aperte a tecla: <p class='msg_confirma'>CONFIRMA para CONFIRMAR o voto</p><p class='msg_corrige'>CORRIGE para CORRIGIR o voto</p></p>";
    }
    else if ((cand_inc.length == 2) && (cand_inc === "14")) {
        votacao = '14';
        cargo_cand.textContent = candidatos[4].cargo;
        name_cand.textContent = `Nome: ${candidatos[4].nome}`;
        partido_cand.textContent = `Partido: ${candidatos[4].partido}`;
        img_field.innerHTML += "<img id='img_cand' src='./public/images/kelmon.jpg' alt='Candidato Kelmon'>";
        div_two.innerHTML = "<p class='msg_voto'>Aperte a tecla: <p class='msg_confirma'>CONFIRMA para CONFIRMAR o voto</p><p class='msg_corrige'>CORRIGE para CORRIGIR o voto</p></p>";
    }
    else {
        if (cand_inc.length == 2) {
            votacao = 'Nulo';
            cargo_cand.textContent = 'PRESIDENTE';
            name_cand.textContent = 'Nome: Nulo';
            partido_cand.textContent = 'Partido: Nulo';
            img_field.innerHTML += "<img id='img_cand' src='./public/images/nulo.png' alt='Nulo'>";
            div_two.innerHTML = "<p class='msg_voto'>Aperte a tecla: <p class='msg_confirma'>CONFIRMA para CONFIRMAR o voto</p><p class='msg_corrige'>CORRIGE para CORRIGIR o voto</p></p>";
        }
    }

};

const number_cand_field = document.querySelectorAll('.number_cand_field');
const elNumber = document.querySelector('.pisc_number_cand');
const pisc_number = document.querySelector('.pisc_number');

const atualizacao = () => {
    cand_inc = '';
    votacao = '';
    cargo_cand.textContent = 'Cargo Eleitoral';
    name_cand.textContent = '';
    partido_cand.textContent = '';
    img_field.innerHTML += "<img id='img_cand' src='./public/images/aguardando.jpg' alt=Aguardando Votaçao'>";
    div_two.textContent = '';
    cand_field_two.innerHTML = '';

    if(b === true){
        for(let i = 0;i < 2;i++){
            cand_field.innerHTML += "<p class='number_cand_field_one'></p>";
        }
        b = false;
        c = false;
    }
}

//Variaveis que correspondem as opcoes de voto_
let cand_Lula = 0;
let cand_Bolsonaro = 0;
let cand_Ciro = 0;
let cand_Simone = 0;
let cand_Kelmon = 0;
let cand_Nulo = 0;
let cand_Branco = 0;

const branco = () => {
    preload_C_B();
    atualizacao();
    cand_Branco++;
};

const corrigir = () => atualizacao();

const confirmar = () => {
    if ((votacao.length < 2))
        alert('Voce precisa digitar algum numero de dois digitos!');
    if (votacao === '13') {
        preload_C_B();
        atualizacao();
        cand_Lula++;
    }
    else if (votacao === '22') {
        preload_C_B();
        atualizacao();
        cand_Bolsonaro++;
    }
    else if (votacao === '12') {
        preload_C_B();
        atualizacao();
        cand_Ciro++;
    }
    else if (votacao === '15') {
        preload_C_B();
        atualizacao();
        cand_Simone++;
    }
    else if (votacao === '14') {
        preload_C_B();
        atualizacao();
        cand_Kelmon++;
    }
    else if (votacao === 'Nulo') {
        preload_C_B();
        atualizacao();
        cand_Nulo++;
    }
};

//-------------------------- PRELOAD ----------------------------
//Preload do reload da página_
const load = document.querySelector('.load');
window.addEventListener('load', () => {
    setTimeout(() => {
        load.classList.remove('preload');
        load.style.display = 'none';
    }, 5000);
    load.classList.add('preload');
    load.style.display = 'flex';
});

//Preload do botao de confirmar_
const load_confirm = document.querySelector('.load_confirm');
const preload_C_B = () => {
    setTimeout(() => {
        load_confirm.classList.remove('preload');
        load_confirm.style.display = 'none';
    }, 5000);
    load_confirm.classList.add('preload');
    load_confirm.style.display = 'flex';
};

//Prelaod do botao de encerrar votacao_
const load_result = document.querySelector('.load_result');
const the_end = document.querySelector('.the_end');
const informa_eleicao = document.querySelector('.informa_eleicao');
const field_camp = document.querySelector('.field_camp');
const man_Dom = () => {
    load_result.style.display = 'flex';
    informa_eleicao.style.display = 'block';
    field_camp.style.display = 'none';
    the_end.style.display = 'none';
};
the_end.addEventListener('click', () => {
    setTimeout(() => {
        load_result.classList.remove('preload');
        load_result.style.display = 'none';
    }, 5000);
    load_result.classList.add('preload');
    man_Dom();
});
//Reiniciar a votacao_
const reiniciar = () => location.reload();