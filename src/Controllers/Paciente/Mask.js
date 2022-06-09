/* Máscaras ER */
export const maskTel = (v) => {
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

export const maskNumber = (v) =>{
    v=v.replace(/\D/g,""); 
    v=v.replace(/^(\d{1})(\d)/g,"$1.$2");
    return v
}

export const maskCep = (cep) =>{
    cep = cep.replace(/\D/g,""); 
    cep = cep.replace(/(\d)(\d{3})$/,"$1-$2"); 
    return cep;
}

export const maskCpf = (cpf) =>{
    cpf=cpf.replace(/\D/g,""); 
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return cpf;
}

export const maskMedi = (m) =>{
    return m = m.replace(/\D/g,""); 
}

