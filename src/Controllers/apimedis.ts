import axios from "axios";
import { Endereco } from './../Models/Endereco';
import { User } from "../Models/User";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(async config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  });

export async function createUser(user: User) {
    const payload: object = user.toObject()
    return await api.post('/users/store/', payload)  
}

export async function updateUser(user: User) {
    
    const formdata = new FormData()
    formdata.append('full_name', user.fullname)
    formdata.append('phone', user.phone)
    formdata.append('peso', `${user.peso}`)
    formdata.append('altura', `${user.altura}`)
    formdata.append('birth_date' , `${user.birthdate}`)
 
    const config = {
        headers: {'Content-Type': 'multipart/form-data' }
    }

    return await await api.patch(`/users/${user.id}/`,formdata, config)   
}

export async function createEndereco(endereco: Endereco) {
    const payload: object = endereco.toObject()
    return await api.post('/users/criar_endereco/', payload) 
}

export async function login(email: string, password: string) {
    const payload: object = {
         email: email,
         password: password
    }
    return await api.post('/login/', payload)  
}

export async function listaAgravamentos() {
    return await api.get('/agravametos/')
}

export async function getUserRequest(userid: string) {
    return await api.get(`/users/${userid}/`)
}

export async function getPerguntas() {
    return await api.get('/perguntas/')   
}

export async function salveResposta(id: number, resposta: boolean) {
    const payload = {
        pergunta: id,
        resposta: resposta
    }
    return await api.post('/respostas/responder/', payload)
}

export async function editarResposta(id: number, resposta: boolean) {
    const payload = {
        resposta: resposta
    }
    return await api.patch(`/respostas/${id}/`, payload)
}

export async function getRespostas() {
    return await api.get('/respostas/')
}

export async function insertAgravamentos(agravamentos: Array<number>) {
    const payload ={
        agravamentos:agravamentos
    }
    return await api.post('/users/clear_add_agravamento/', payload)
}

export async function salveTriagem() {
    return await api.post('/triagem/store/')
}

export async function linhaDoTempo() {
    return await api.get('/triagem/linha_do_tempo/')
}

export async function mapacasos() {
    return await api.get('/users/mapa_de_casos/')
}

export async function recuperarSenha(email:string) {
    return await api.post('/users/recuperar_senha/',{email:email})
}