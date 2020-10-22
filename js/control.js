document.addEventListener("DOMContentLoaded", function () {
    let formu = document.getElementById("formulario");
    formu.addEventListener('submit', beforeSend);
	// console.log("hola");
});
// console.log("Antes de agregar el evento")
function beforeSend(event) {
	event.preventDefault();
	let focus;
	let user=document.querySelector("#user"),mensaje="",pass=document.querySelector("#pass");
	if (user.value.indexOf("@")==(-1)){
		focus=user;
		mensaje="Debe ingresar su mail de usuario.";
	}

	if (pass.value.length==0){
		if (!focus){
			focus=pass;
		}
		mensaje+="\nLa contraseña no es valida";
	}

	if (mensaje!=""){
		windowTop(mensaje,"rojo",focus);
		return;
	} else {
		windowTop("Usuario y contraseña valida. Puede Ingresar.","verde")
	}
	
	return setTimeout(()=>{this.submit(console.log("hola"));},3000);
}


function windowTop(mensaje,claseAAgregar,elemFocus=false) {
	let div1=document.querySelector(".modal-propio");
	if (div1){
		destruirElemento(div1);
	}
	let div=document.createElement("div"),body=document.querySelector(".container");
	div.setAttribute("class","modal-propio "+claseAAgregar);
	let p=document.createElement("p");
	p.innerText=mensaje;
	div.appendChild(p);
	body.appendChild(div);
	setTimeout(()=>{
		destruirElemento(div);
		if (elemFocus){
			elemFocus.focus();
		}
	},3000);
}

function destruirElemento(ele){
	let parent=ele.parentElement;
	try{
		parent.removeChild(ele);
	} catch(err){
		// console.log("Segurmanete ya no estaría existiendo el elemento");
	}
}

