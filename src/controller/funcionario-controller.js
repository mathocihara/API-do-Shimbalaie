
import Funcionario from "../models/funcionario-model.js"
import funcionario from "../DAO/FuncionarioDao.js"

const funcionarioController = (app, bdsqlite) =>{
    const daoFuncionario = new funcionario(bdsqlite);

    // criação de outra caminho 
app.get("/funcionario", (req, res) =>{
    const data = async()=>{
        try{
            const funcionarios = await daoFuncionario.listarFuncionarios();
            res.status(200).json(funcionarios)
        } catch(error){
            res.status(404).json(error)
        } 
    }
        data(); 
    })



app.get("/funcionario/:id", (req, res) =>{
    const data = async()=>{
        try{
            const funcionarios = await daoFuncionario.listarFuncionariosID(req.params.id);
            res.status(200).json(funcionarios)
        } catch(error){
            res.status(404).json(error)
        } 
    }
        data(); 
    })




app.post("/funcionario", (req, res) =>{
    const body = req.body;
    const novoFuncionario = new Funcionario(body.id, body.primeiroNome, body.segundoNome, body.sobreNome, body.cargo, body.ativo, body.status)
    const data = async()=>{
        try{
            const funcionarios = await daoFuncionario.CadastrarFuncionarios(novoFuncionario);
            res.status(201).json(funcionarios)
        } catch(error){
            res.status(404).json(error)
        } 
    }
        data(); 
    })



app.put("/funcionario/:id", (req, res) =>{
 const body = req.body;
const id = parseInt(req.params.id);

    //    const funcionarioDadoAntigo = resultado; 
    const data = async()=>{
        try{
            const funcionarioDadoAntigo = await  daoFuncionario.listarFuncionariosID(id);
                    const atualizadoFuncionario = new Funcionario(body.id  || funcionarioDadoAntigo[0].id, 
            body.primeiroNome || funcionarioDadoAntigo[0].primeiroNome, 
            body.segundoNome || funcionarioDadoAntigo[0].segundoNome, 
            body.sobreNome || funcionarioDadoAntigo[0].sobreNome,
            body.cargo || funcionarioDadoAntigo[0].cargo,
            body.ativo || funcionarioDadoAntigo[0].ativo, 
            body.status || funcionarioDadoAntigo[0].status)

            const funcionarios = await daoFuncionario.AlterarFuncionario(atualizadoFuncionario);
            res.status(201).json(funcionarios)
        } catch(error){
            res.status(404).json(error)
        } 
    }
        data(); 
    })


    





app.delete("/funcionario/:id", (req, res) =>{
    const data = async()=>{
        try{
            const funcionarios = await daoFuncionario.DeletarFuncionario(req.params.id);
            res.status(201).json(funcionarios)
        } catch(error){
            res.status(404).json(error)
        } 
    }
        data(); 
    })



};


export default funcionarioController;    