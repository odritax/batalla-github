<template>
  <div>
    <h4>{{this.nombre_usuario}}</h4>
    <b-table-simple class="table table-bordered">
      <b-tr>
        <b-td><b-input class="form-control" type="text" v-model="usuario"></b-input></b-td>
        <b-td> <b-button variant="primary" v-on:click="Enviar">Enviar</b-button></b-td>
      </b-tr>
      <b-tbody class="text-left">
      <b-tr>
        <b-td>Public Repositories</b-td>
        <b-td>{{this.public_repos}}</b-td>
      </b-tr>
      <b-tr>
        <b-td>Number of followers</b-td>
        <b-td>{{this.followers}}</b-td>
      </b-tr>
      <b-tr>
        <b-td>Number Following</b-td>
        <b-td>{{this.following}}</b-td>
      </b-tr>
      <b-tr>
        <b-td>Public Gists</b-td>
        <b-td>{{this.public_gists}}</b-td>
      </b-tr>
      <b-tr>
        <b-td class="score">Total Score</b-td>
        <b-td class="score">{{this.contador}}</b-td>
      </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>
<script>
export default {
  name:'Usuario',
  props:{
    player: String,
  },
  data() {
      return {
        usuario:'',
        nombre_usuario: '',
        followers: 0,
        following: 0,
        public_repos: 0,
        public_gists: 0,
        contador: 0
      }
    },
    methods: {
     Enviar(){
       this.axios.get(`https://api.github.com/users/${this.usuario}`)
      .then((datos) => {
        const data= datos.data;
        this.nombre_usuario=data.login
        this.followers=data.followers
        this.following=data.following
        this.public_repos=data.public_repos
        this.public_gists=data.public_gists
        this.contador=data.followers+data.following+data.public_repos+data.public_gists
        if(this.player==1){
          const gamer={usuario:this.nombre_usuario,puntaje:this.contador}
         this.$store.commit('Update1',gamer)
        }else{
         const gamer={usuario:this.nombre_usuario,puntaje:this.contador}
         this.$store.commit('Update2',gamer)
        }
      })
      .catch((error) => {
        alert(`Error: Usuario no encontrado ${error}`);
        const elements=document.getElementsByClassName('form-control');
        for(var i=0; i<elements.length;i++){
          elements[i].value="";
        }
        console.log(`Something went wrong: ${error}`);
          this.isLoading = false;     // we'll still want this regardless
      });
     }
    }
}
</script>