export const isequalpassword = (s1,s2) =>{
    if(s1 === s2){
        return true;
    }else{
        return false;
    }
}

export const filterRespostaUser = (data) => {
    const user_id = localStorage.getItem('user_id')
    let respostas = data.filter((item)=>{
        return item.paciente.id == user_id
    })
    return respostas
}

export const getAgravamentosIds = () =>{
    const agravamentos = document.getElementsByName('agravamento')
    let ids = []
    for(let i = 0; i < agravamentos.length; i++){
        if(agravamentos[i].checked){
            ids.push(agravamentos[i].value)
        }
    }
    return ids
}

export const formatDate = (date) =>{
    let data = new Date(date)
    return ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()
}

export const formatDateHora = (date) =>{
    let data = new Date(date)
    const hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours()
    const min = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()
    const seg = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()

    return hora + ":" + min + ":" + seg
}