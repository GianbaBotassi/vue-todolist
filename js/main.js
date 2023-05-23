// Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del task
// - done, un booleano (true/false) che indica se il task è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni task.
// Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)

const {createApp} = Vue;

createApp({
    data(){
        return{
            newTask: '',  // variabile per input task
            error: false,  // variabile di stato per errore v-if
            taskList:[
                {
                    task : "Cucinare per festa di compleanno",
                    done : false
                },
                {
                    task : "Mangiare tanta verdura",
                    done : true
                },
                {
                    task : "Bahala na",
                    done : true
                },
                {
                    task : "Fare il giardiniere",
                    done : false
                },
            ]
        }
    },
    methods:{
        addObjectToArray(){   //verifico se newTask non è vuota e che abbia + di 5 caratteri
            if(this.newTask !== '' && this.newTask.length >= 5){
                this.taskList.unshift({task : this.newTask, done : false});
                this.error = false     //se vero error rimane su false
            }else{
                this.error = true;    //se falso error diventa true ed appare messaggio con v-if
            }
            this.newTask = '';    //ogni volta azzero variabile input
            console.log(this.taskList)
    },
    removeObjectToArray(indice){
        this.taskList.splice(indice, 1);    //associo ad indice elemento cliccato per eliminarlo dall'array

    },
    setDoneProperty(item){
        item.done = !item.done      //proprietà done viene cambiata se viene cliccata
    }
    }
}).mount('#app');
