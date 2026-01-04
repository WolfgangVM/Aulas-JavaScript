function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.key === 'Enter'){ // ma aula usa-se keyCode, mas essa função foi removida portanto, usa-se key ou code apenas, no caso do 'Enter' serve comom alternattiva ao input '13' que é igaul a 'Enter'
                this.realizaConta();
            }
        });
            
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };
    this.realizaConta = () =>{
        try{
            const conta = eval(this.display.value);

            if (!conta){
                alert('conta inválida!');
                return;
            }
            this.display.value = conta;

        }catch(e){
            alert('conta inválida!');
            return;
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();   // focus garante que ao precionar enter não faça confusão
    };
    this.clear = () => this.display.value = ''; 
    this.del = () => this.display.value = this.display.value.slice(0, -1);

}

const calculadora = new Calculadora();
calculadora.inicia();