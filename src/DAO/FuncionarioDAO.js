
class funcionarioDao{
    constructor(bd){
        this.bd = bd
    }

    listarFuncionarios(){
        return new Promise((resolve, reject)=>{
            this.bd.all(`SELECT * FROM FUNCIONARIO`, (error, resultado) =>{
                if (error)
                    reject(error);
                else 
                    resolve(resultado)
                })
            } )
        }

        listarFuncionariosID(id){
            return new Promise((resolve, reject)=>{
                this.bd.all(`SELECT * FROM FUNCIONARIO WHERE id = ${id}`, (error, resultado)=>{
                    if(error) reject(error);
                    else resolve(resultado);
                })
            })
    }

    
    CadastrarFuncionarios(Funcionario){
        return new Promise((resolve, reject)=>{
            this.bd.run
            (`INSERT INTO FUNCIONARIO (id, primeiroNome,segundoNome,sobreNome,
            cargo,ativo,status) VALUES(?, ?, ?, ?, ?, ?, ? )`,
            [Funcionario.id, 
            Funcionario.primeiroNome,
            Funcionario.segundoNome, 
            Funcionario.sobreNome, 
            Funcionario.cargo, 
            Funcionario.ativo, 
            Funcionario.status],
            (error) =>{
                if(error) reject(error);
                else resolve("Deu certo inserir FUNCIONARIO")
            })
        })

    }

        AlterarFuncionario(atualizadoFuncionario){
            return new Promise((resolve, reject)=>{
            this.bd.run(`UPDATE FUNCIONARIO SET primeiroNome = ?,segundoNome = ?,sobreNome = ?,
            cargo = ?,ativo = ?,status = ? WHERE id = ? `, [atualizadoFuncionario.primeiroNome,
                atualizadoFuncionario.segundoNome, 
                atualizadoFuncionario.sobreNome, 
                atualizadoFuncionario.cargo, 
                atualizadoFuncionario.ativo, 
                atualizadoFuncionario.status,
                atualizadoFuncionario.id ], 
             (error)=>{
                if(error) reject(error.message);
                else resolve("Deu certo mudar FUNCIONARIO");
            })
            
    });
}

        DeletarFuncionario(id){
            return new Promise((resolve, reject)=>{
            this.bd.run(`DELETE FROM FUNCIONARIO WHERE id = ${id}`, (error)=>{
                if(error) reject;
                else resolve("Deu certo deletar FUNCIONARIO");
            })

        });
    }

}
        
    


    export default funcionarioDao;
