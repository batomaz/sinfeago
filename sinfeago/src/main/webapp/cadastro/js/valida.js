

// TELEFONE
function tel_mask(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que n�o � d�gito
	v=v.replace(/(\d{0})(\d)/,"$1($2")    //Coloca ( antes do primeiro d�gitos
	v=v.replace(/(\d{2})(\d)/,"$1) $2")    //Coloca ) entre o segundo e o terceiro d�gitos
	v=v.replace(/(\d{4})(\d)/,"$1-$2")    //Coloca - entre o sexto e o s�timo d�gitos
	return v
}

// CEP
function cep_mask(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que n�o � d�gito
	v=v.replace(/(\d{2})(\d)/,"$1.$2")    //Coloca ponto entre o segundo e o terceiro d�gitos
	v=v.replace(/(\d{3})(\d)/,"$1-$2")    //Coloca tra�o entre o quinto e o sexto d�gitos
	return v
}

// DATA
function data_mask(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que n�o � d�gito
	v=v.replace(/(\d{2})(\d)/,"$1/$2")    //Coloca / entre o segundo e o terceiro d�gitos
	v=v.replace(/(\d{2})(\d)/,"$1/$2")    //Coloca / entre o quarto e o quinto d�gitos
	return v
}

// EMAIL
function email(){
var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
if(!filter.test(document.getElementById("field-email").value)){
alert('Por favor, digite o email corretamente');
document.getElementById("field-email").value="";
return false
}
}


// CPF
function validarCPF( cpf ){
	var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
	
	if(!filtro.test(cpf))
	{
		window.alert("CPF inv\u00e1lido. Tente novamente.");
		
		return false;
	}
   
	cpf = remove(cpf, ".");
	cpf = remove(cpf, "-");
	
	if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
		cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
		cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
		cpf == "88888888888" || cpf == "99999999999")
	{
		alert("CPF inv\u00e1lido. Tente novamente.");
		document.getElementById("field-CPF").value="";
		return false;
   }

	soma = 0;
	for(i = 0; i < 9; i++)
	{
		soma += parseInt(cpf.charAt(i)) * (10 - i);
	}
	
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	if(resto != parseInt(cpf.charAt(9))){
		alert("CPF inv�lido. Tente novamente.");
		document.getElementById("txtCPF").value="";
		return false;
	}
	
	soma = 0;
	for(i = 0; i < 10; i ++)
	{
		soma += parseInt(cpf.charAt(i)) * (11 - i);
	}
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	
	if(resto != parseInt(cpf.charAt(10))){
		alert("CPF inv�lido. Tente novamente.");
		document.getElementById("field-CPF").value="";
		return false;
	}
	
	return true;
 }
 
function remove(str, sub) {
	i = str.indexOf(sub);
	r = "";
	if (i == -1) return str;
	{
		r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
	}
	
	return r;
}

function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}

function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}

function cpf_mask(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que n�o � d�gito
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o terceiro e o quarto d�gitos
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o setimo e o oitava d�gitos
	v=v.replace(/(\d{3})(\d)/,"$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo d�gitos
	return v
}


// APENAS N�MEROS (N�O UTILIZADO NO C�DIGO)
function apenasNumeros(x){
var tecla=(window.event)?event.keyCode:x.which;
if((tecla>45 && tecla<58)) return true;
if((tecla>92 && tecla<106)) return true;
if (tecla==8 || tecla==9 || tecla==0) return true;
else{
	return false;
}
}

function formatar(mascara, documento){
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)

    if (texto.substring(0,1) != saida){
        documentos += texto.substring(0,1);
    }
}

// CAMPOS OBRIGATÓRIOS

function obriga(){
  if (document.crudForm.field-email.value == ''){
	    alert('Preencha o campo e-mail.');
	    document.crudForm.field-email.focus();
	    return false;
  }
  }