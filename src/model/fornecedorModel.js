class Fornecedor {
    constructor(nome, cnpj, email, endereço) {
        this.nome = nome,
        this.cnpj = this.validaCnpj(cnpj),
        this.email = this.validaEmail(email),
        this.endereço = endereço
    }

    validaCnpj(cnpj) {
        let re = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
        if((cnpj.match(re)) || (cnpj.length == 14)) {
            return cnpj 
        } else {
            throw new Error("Cnpj inválido");
        }
    }
    validaEmail(email) {
        let re = /\S+@\S+\.\S+/;
        if (email.match(re)) {
          return email; 
        } else {
          throw new Error("Email inválido") 
        }
    }
   
}



module.exports = Fornecedor