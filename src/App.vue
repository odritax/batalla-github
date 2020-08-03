<template>
  <div id="app">
    <img id="logo" src="@/assets/git.png" alt="">
    <h1>Welcome to GitHub Battle</h1>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-sm-12 col-md-4">
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
      <div class="col-md-4"></div>
    </div>
     <h2>Followers</h2>  
    <img class="img"  v-for="(follower, i) in avatar_followers" :key="i" :src="follower.avatar_url">
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        usuario:'',
        nombre_usuario: '',
        followers: 0,
        following: 0,
        public_repos: 0,
        public_gists: 0,
        contador: 0,
        avatar_followers: []
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
      })
      .catch((error) => {
        alert(error);
      });
     this.axios.get(`https://api.github.com/users/${this.usuario}/followers`)
    .then((datos) => {
      console.log(datos)
      const data = datos.data;
      this.avatar_followers = data;
    })
    .catch((error) => {
      alert(error);
    });

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
