export interface Aplicacao {
    id: String
    image: String
    online: Boolean
    linkAcesso: String,
    linkRepo: String,
    criadoEm: Date,
    custoMensal: Int32Array,
    retornoMensal: Int32Array,
    status: Array<String>
}