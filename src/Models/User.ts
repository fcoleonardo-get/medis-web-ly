interface userobject{
       id: number
       full_name: string
       phone: string
       birth_date: Date
       peso: number
       altura: number
       cpf: string
       email: string
       sexo: string
}

export class User {
       #id: number
       #fullname: string
       #cpf: string
       #email: string
       #birth_date: Date
       #phone: string
       #password: string
       #sexo: string
       #peso: number
       #altura: number

       constructor(fullname?: string, cpf?: string, email?: string, birth_date?: Date, phone?: string, password?: string, sexo?: string, peso?: number, altura?: number, id?: number){
              this.#fullname = fullname  
              this.#cpf = cpf
              this.#email = email
              this.#birth_date = birth_date
              this.#phone = phone
              this.#password = password
              this.#sexo = sexo
              this.#peso = peso
              this.#altura = altura
              this.#id = id
       }

       get id(){
              return this.#id
       }

       get fullname(){
              return this.#fullname
       }

       get cpf(){
              return this.#cpf
       }

       get email(){
              return this.#email
       }

       get birth_date(){
              return this.#birth_date
       }

       get phone(){
              return this.#phone
       }

       get password(){
              return this.#password
       }

       get sexo(){
              return this.#sexo
       }

       get peso(){
              return this.#peso
       }

       get altura(){
              return this.#altura
       }

       toObject(){
              return{
                     full_name : this.fullname,
                     cpf : this.cpf,
                     email : this.email,
                     birth_date : this.birth_date,
                     phone : this.phone,
                     password : this.password,
                     sexo : this.sexo, 
                     peso: this.peso,
                     altura: this.altura  
              }
       }

       updatePassword(password: string){
              return new User(this.fullname, this.cpf, this.email, this.birth_date, this.phone, password, this.sexo, this.peso, this.altura, this.id)       
       }

       updateMedidas(peso: number, altura: number){
              return new User(this.fullname, this.cpf, this.email, this.birth_date, this.phone, this.password, this.sexo, peso, altura, this.id)  
       }

       setFullName(fullname: string){
              this.#fullname = fullname
       }

       setPhone(phone: string){
              this.#phone = phone
       }

       setDataNascimento(birth_date: Date){
              this.#birth_date = birth_date
       }

       setPeso(peso: number){
              this.#peso = peso
       }

       setAltura(altura: number){
             this.#altura = altura
       }

       toClass(user: userobject){
              return new User(user.full_name, user.cpf, user.email, user.birth_date, user.phone, this.password, user.sexo, user.peso, user.altura, user.id)  
       }

}
