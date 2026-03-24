class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instancia
    aumentaVolume(){
        this.volume += 2;
    }
    // Método de instancia
    dimminuirVolume() {
        thiis.volume -= 2;
    }
    // Método estatico     Os métodos estaticos não tem acesso aos de instancia
    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }
}

const constorle1 =new ControleRemoto('LG');
constorle1.aumentaVolume(); 
constorle1.aumentaVolume(); 
constorle1.aumentaVolume(); 
console.log(constorle1);
ControleRemoto.trocaPilha();    // por ser estatico só epossivel acessar o construtor