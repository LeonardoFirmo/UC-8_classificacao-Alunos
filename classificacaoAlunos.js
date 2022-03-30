let quantidadeAlunos = ["Raiane","Maria","João","Lucas"]


for (let i = 0; i < quantidadeAlunos.length; i++) {
    
   

    if (i == 0) {
        console.log(`${quantidadeAlunos[i]}  é o aluno de número ZERO!`)
        
    }else if (i % 2 == 0 ){
        console.log(`${quantidadeAlunos[i]} é um aluno PAR!`)


    }else if (i % 2 == 1){
        console.log(quantidadeAlunos[i] + ' é um aluno ÍMPAR!')
    }


    
}
