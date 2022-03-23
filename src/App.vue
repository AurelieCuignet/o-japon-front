<template>
  <div id="nav">
  </div>
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.errors {
    color: #750a20;
    background-color: #eac7ce;
    border-color: crimson;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
}
.success {
    color: #215e5e;
    background-color: #d5ffff;
    border-color: teal;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
body {
  background-color: black;
}

nav a.router-link-exact-active {
  color: #ce1137;
}*/
body {
  background-color: #1D1D1D;
}
</style>
