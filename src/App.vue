<template>
  <div id="app">
    <img id="logo" src="@/assets/git.png" alt="">
    <h1>Welcome to GitHub Battle</h1>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-4">
        <Usuario player="1"/>
      </div>
      <div class="col-md-4">
        <Usuario player="2"/>
      </div>
      <div class="col-md-2"></div>
    </div>
    <button v-on:click="Batalla" data-toggle="modal" data-target=".modal" class="btn btn-danger">Duelo a muerte con cuchillos!</button>
     <!-- modalcito -->
     <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{mensaje}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Usuario from '@/components/Usuario.vue'
  export default {
    name: 'App',
    components:{
      Usuario
    },
    data(){
      return{
        mensaje:''
      }

    },
    methods:{
      Batalla(){
        const player1=this.$store.state.player1.puntaje
        const player2=this.$store.state.player2.puntaje
        if(player1>player2){
         // alert('Player 1 win');
         this.mensaje= `${this.$store.state.player1.usuario} GANASTE! `;
        }else if(player1==player2){
         this.mensaje= `EMPATE`;
        }else{
         this.mensaje= `${this.$store.state.player2.usuario} GANASTE! `;
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img{
  width: 50px;
}
#logo{
  width: 150px;;
}
.text-left{
 text-align: left;
}
.score{
  font-weight: bold;
  font-size: 18pt;
  color: tomato;
}
</style>
