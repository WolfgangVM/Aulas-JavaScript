function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        bnClear: document.querySelector('.btn-clear'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', (e)=> {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;
            try {
                conta = eval(conta);    //muito importante a função eval() possui diversas brexas de segurança 
                                        // se usar lembrar de adicionar varias condições para barrar o uso indesejado
                
                if (!conta) {
                    alert('contta invalida!');
                    return;
                }

                this.display.value = conta;
            }catch(e) {
                alert('conta invalida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();