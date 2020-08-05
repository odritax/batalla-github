<template>
  <div>
    <h4>{{this.nombre_usuario}}</h4>
    <table class="table table-bordered">
      <tr>
        <td><input class="form-control" type="text" v-model="usuario"></td>
        <td><button class="btn btn-primary" v-on:click="Enviar">Enviar</button></td>
      </tr>
      <tbody class="text-left">
      <tr>
        <td>Public Repositories</td>
        <td>{{this.public_repos}}</td>
      </tr>
      <tr>
        <td>Number of followers</td>
        <td>{{this.followers}}</td>
      </tr>
      <tr>
        <td>Number Following</td>
        <td>{{this.following}}</td>
      </tr>
      <tr>
        <td>Public Gists</td>
        <td>{{this.public_gists}}</td>
      </tr>
      <tr>
        <td class="score">Total Score</td>
        <td class="score">{{this.contador}}</td>
      </tr>
      </tbody>
    </table>
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