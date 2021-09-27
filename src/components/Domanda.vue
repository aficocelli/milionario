<template>
    <div>
        <div class="questions">
            <h2 class="question text-white" >{{domande[questionNumber].Q}}</h2>
        </div>

        
        <div class="answers">
            <div v-for="(item, index) in domande[questionNumber].R" :key="item" v-bind:class="{ 'answer': isActive, 'blink_error': index == test, 'blink_success': index == test1, 'disabled':test2}" v-on:click.once="answerClick(index, $event)">
                <h3>{{item}}</h3>
            </div>
            
        </div>
     
        <b-container class="bv-example-row mt-5">
            <b-row> 
                <b-col class="text-center"><h2 class="text-white scoreTitle">Score: {{score}} punti</h2></b-col>  
            </b-row>
        </b-container>

        
            
        

        <b-modal no-close-on-backdrop ref="perso" id="modal-1" hide-footer hide-header title="BootstrapVue">
            <h1 class="my-4 text-center">HAI PERSO!</h1>
            <h2 class="text-center">Il tuo punteggio è: {{score}} punti</h2>
            <b-row align-v="center">
                <button class="mt-3 btn-color1" @click="reloadPage()">Gioca ancora</button>
            </b-row>
        </b-modal>
        
    </div>
</template>

<script>


export default {
    data(){
        return{
            domande: [
                {
                    Q: "Chi ha scritto la 'Divina Commedia'?",
                    R: ["Boccaccio", "Dante", "Leopardi", "Quasimodo"],
                    E: 1
                },
                {
                    Q:"Chi è il regista di 'Pulp Fiction'?",
                    R:["Martin Scorsese", "Steven Spielberg", "Quentin Tarantino", "Federico Fellini"],
                    E:2
                },
                {
                    Q:"Città veneta famosa per la grappa",
                    R:["Bassano", "Rovigo", "Padova", "Treviso"],
                    E:0
                },
                {
                    Q:"Secondo gli alchimisti permetterebbe di trasmutare in oro i metalli vili",
                    R:["Zaffiro Blu", "Pietra Filosofale", "Tanzanite", "Quarzo Dumortierite"],
                    E:1
                },
                {
                    Q:"Quanti occhi ha un lombrico?",
                    R:["2", "1", "4", "Nessuno"],
                    E:3
                },
                {
                    Q:"A quale razza appartiene Spock di Star Trek",
                    R:["Venusiana", "Marziana", "Vulcaniana", "Saturniana"],
                    E:2
                }


            ],

            questionNumber: Math.round(2*Math.random()),

            questionDone:[],

            isActive: true,

            hasError: false,

            hasSuccess: false,

            test: null,

            test1: null,

            test2: false,

            time:false,

            score: 0,

    

        }
    },

    methods:{
        answerClick: function(index, $event){
            
            console.log($event);

            this.show = false;

            this.test2 = true;

            if(index==this.domande[this.questionNumber].E){

            

            this.test1 = index;
            
            this.score += 10;
            
            setTimeout(() => {

                

                this.domande.splice(this.questionNumber, 1)

            

                this.questionNumber = Math.round((this.domande.length -1)*Math.random())
                
                this.test1 = null;

                this.test2 = false;

                

            }, 3000);

            
                

            } else{
            
                console.log(index);
                this.test = index;

                this.$refs['perso'].show();
            }
           
            
        },
        
        reloadPage: function(){

            window.location.reload();
        }
    },

    
}

</script>

<style >

.question{
    margin-top:100px;
    margin-bottom:50px;
    text-align: center;
    
    font-size:44px;
    font-weight: bold;
    
    
}
.answers{

    display:flex;
    justify-content: center;
    flex-wrap: wrap;


}
.answer{
    width:calc((100% - 40px) / 2);
    text-align: center;
    background-color: lightgrey;
    border: 1px solid black;
    margin: 10px;
    cursor:pointer;
    border-radius:20px;
    font-weight: bold;
    font-size:24px;
    border:5px solid goldenrod;
    clip-path: polygon(11% 3%, 88% 3%, 92% 47%, 88% 95%, 11% 95%, 7% 50%);
}

.blink_error {
/* background-color:red; */
    animation:2s blinker-error linear infinite;
}
@keyframes blinker-error { 
0% { background-color: red; }
50% { background-color: white; }
100% { background-color:red; }
}


.blink_success {
    /* background-color:green; */
animation:2s blinker linear infinite;
}
@keyframes blinker { 
0% { background-color: green; }
50% { background-color: white; }
100% { background-color:green; }
}

.scoreTitle{
    font-size:44px;
}

.disabled {
  pointer-events: none;
}


</style>


