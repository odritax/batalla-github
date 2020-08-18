<template>
  <div id="app">
    <img id="logo" src="@/assets/git.png" alt="">
    <h1>Welcome to GitHub Battle</h1>
    <b-row>
      <b-col col md="2"></b-col>
      <b-col col md="4">
        <Usuario player="1"/>
      </b-col>
      <b-col col md="4">
        <Usuario player="2"/>
      </b-col>
      <b-col col md="2"></b-col>
    </b-row>
    <b-button variant="danger" v-on:click="Batalla"  v-b-modal="'my-modal'">Duelo a muerte con cuchillos!</b-button>
     <!-- modalcito -->
    <b-modal id="my-modal" hide-footer><p class="text-center">{{mensaje}}</p></b-modal>
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
