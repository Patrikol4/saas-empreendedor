export interface User {
    id: String
    name: String
    email: String
    password: String
    journal: String
    createdAt: Date
    role?: Array<String>

}

export interface UserRole { 
    id: String
    nomeCategoria: String // essa pode ser desde Admin, até cliente 
    ativa: Boolean // se a categoria está ativa no sistema 
}