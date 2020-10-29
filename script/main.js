var senha = document.getElementById('senha');

function mostrarOcultar(){
    if(senha.type=="password"){
        senha.type="text";
        motor(1);
    }else{
        senha.type="password";
        motor(2);
    }
}

function motor(y){
    if(y==1){
        document.getElementById('mostrar-ocultar').innerHTML=('<label id="mostrar-ocultar" for="mostrar">Ocultar</label>');
    }else{
        document.getElementById('mostrar-ocultar').innerHTML=('<label id="mostrar-ocultar" for="mostrar">Mostrar</label>');
    }
}