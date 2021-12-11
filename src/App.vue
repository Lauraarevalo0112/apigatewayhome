<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
  <div id="app" class="app">

    <div class="header">

      <h1> Tienda Home </h1>
      <nav>
        <button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <button v-if="is_auth" v-on:click="loadAccount"> Cuenta </button>
        <button v-if="is_auth" v-on:click="loadProducts"> Productos </button>
        <button v-if="is_auth" v-on:click="loadTransaction"> Transacción </button>
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse </button>
      </nav>
    </div>
    

    <div class="main-component">
      <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>
    

    

  </div>

</template>


<script>
export default {
  name: 'App',

  computed: {
    is_auth: {
      get: function() {
        return this.$route.meta.requiresAuth;
      },
      set: function() { }
    }
  },

  methods:{

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    completedLogIn: function(data) {
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
			alert("Autenticación Exitosa");
			this.loadHome();
    },

    completedSignUp: function(data) {
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadAccount: function () {
			this.$router.push({ name: "account" });
		},

    loadTransaction: function(){
      this.$router.push({ name: "transaction" });
    },

    loadProducts: function(){
      this.$router.push({ name: "products" });
    },

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
      this.loadLogIn();
		},
  }
}
</script>


<style>



  .header{
    margin: 0%;
    padding: 1%;
    width: 100%;
    height: 35vh; 
    min-height: 100px;
    
    background: center / cover no-repeat
    url(https://www.aucklandhomeshow.co.nz/wp-content/uploads/2017/07/banner-header-6-sofa.jpg) ;
    color:#E5E7E9  ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
    font-family: "Sofia", sans-serif;
    font-size: 500%;
    text-shadow: 3px 3px 3px #8eaefa;
  }

  .header nav {
    height: 100%;
    width: 30%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
  }

  .header nav button{
    color: #E5E7E9;
    background: #283e47;
    border: 1px solid #E5E7E9;
    
    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }

  
  .main-component{
    height: auto;
    margin: 2%;
    padding: 0%;
    width: 100%;
    
    
  }





</style>
