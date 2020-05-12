class Cuenta{
    constructor(usuario,contraseña){
        this.usuario=usuario;
        this.contraseña=contraseña;
    };
    verificar(){
        if (this.usuario==="André"&&this.contraseña==="12345") {
            return("sesion iniciada")
        } else {
            return("El usuario o la contraseña son incorrectos")
        }
    };
};
function go() {
    var cuenta=new Cuenta(document.getElementById("usuario").value,document.getElementById("contraseña").value)
    document.getElementById("resultado").value=cuenta.verificar()
}