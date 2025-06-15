let nomeDoAfiliado = "Ayano30k CEO";
let idAfiliado = "30K-001F";
let saldoComissao = 75.00;
let retiraSaldo = document.querySelector("#valor");
let NomeIdAfiliado = document.querySelector(".id");
let saldoTotal = document.querySelector("#saldo");

function CarregaInformacoesAfiliado() {
    NomeIdAfiliado.textContent=`Afiliado: ${nomeDoAfiliado} | ID: #30K-001F`;
    saldoTotal.textContent=`${saldoComissao}`
}

function solicitarSaque() {

    if (retiraSaldo.value <= 0) {
       alert("Erro informe uma valor valido!!")
        
    }else if (retiraSaldo.value <= saldoComissao ){
    alert(`Solicitação de saque efetuado no valor de ${retiraSaldo.value}`)
        
    } else{
        alert('Erro tente Novamente')
    }


   
}

CarregaInformacoesAfiliado()
