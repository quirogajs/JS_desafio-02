function calculateTheAverage(nota1, nota2) {
    let average = (nota1 + nota2) / 2;
    return average.toFixed(2);
}

function definesIfItIsApproved(average) {
    let approved = average >= 7;
    return approved;
}

const students = [
    {
        nome: 'Pablo',
        notaPrimeiraProva: 9.5,
        notaSegundaProva: 8.7,
    },
    {
        nome: 'Neymar',
        notaPrimeiraProva: 2.5,
        notaSegundaProva: 1.7,
    },
    {
        nome: 'Lionel',
        notaPrimeiraProva: 6.4,
        notaSegundaProva: 9.5,
    },
    {
        nome: 'Cristiano',
        notaPrimeiraProva: 2.9,
        notaSegundaProva: 6.8,
    }
];

for(let student of students) {
    const average = calculateTheAverage(student.notaPrimeiraProva, student.notaSegundaProva);
    const approved = definesIfItIsApproved(average);

    const approvedMessage = `Parabéns, ${student.nome}! Você foi aprovado no concurso!`;
    const failMessage = `Não foi dessa vez, ${student.nome}. Tente novamente!`;
    const averageMessage = `A média do aluno ${student.nome} é: ${average}`;

    approved ? alert(`${averageMessage}\n${approvedMessage}`) : alert(`${averageMessage}\n${failMessage}`);
};