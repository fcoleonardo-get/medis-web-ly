export class Endereco {
    #user: number
    #rua: string
    #cep: string
    #latitude: string
    #longitude: string
    #uf: string
    #bairro: string
    #cidade: string

    constructor(user?: number, rua?: string, cep?: string, latitude?: string, longitude?: string, uf?: string, bairro?: string, cidade?: string){
        this.#user = user
        this.#rua = rua
        this.#cep = cep
        this.#latitude = latitude
        this.#longitude = longitude
        this.#uf = uf
        this.#bairro = bairro
        this.#cidade = cidade
    }

    get user(){
        return this.#user
    }

    get rua(){
        return this.#rua
    }

    get cep(){
        return this.#cep
    }

    get latitude(){
        return this.#latitude
    }

    get longitude(){
        return this.#longitude
    }

    get uf(){
        return this.#uf
    }

    get bairro(){
        return this.#bairro
    }

    get cidade(){
        return this.#cidade
    }

    toObject(){
        return{
            user: this.user,
            rua: this.rua,
            cep: this.cep,
            latitude: this.latitude,
            longitude: this.longitude,
            uf: this.uf,
            bairro: this.#bairro,
            cidade: this.#cidade
        }
    }

    updateUser(user){
        return new Endereco(user, this.rua, this.cep, this.latitude, this.longitude, this.uf, this.bairro, this.cidade)
    }
}