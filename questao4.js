class Student{
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota)
    {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto(){
        return this.primeiroNome + " " + this.segundoNome;
    }

    media(){
        return (this.primeiraNota * 0.4) + (this.segundaNota * 0.4);
    }

    situacao(){
        if (this.media() >= 6){
            alert(this.nomeCompleto() + "\nNota: " + this.media() + "\nAprovado");
        }else{
            alert(this.nomeCompleto() + "\nNota: " + this.media() + "\nReprovado");
        }
    }
}

//Creating classes
student1 = new Student("Beatriz","Gomes",10 ,8);
student2 = new Student("Guilherme","Bonato", 9,6);
student3 = new Student("Priscila","Silva",3 ,5);
student4 = new Student("Mariana","Alves", 4,10);
student5 = new Student("Bruno","Bonatti",7 ,3);

//Array of students
var studentsArray = [
    student1,
    student2,
    student3,
    student4,
    student5
];


//Iteração
studentsArray.forEach(show);

function show(item){
    item.situacao();
    console.log("here");
}