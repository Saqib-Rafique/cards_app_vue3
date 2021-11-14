<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Cards</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/cards" class="nav-link">List Cards</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cards/new" class="nav-link">Add Card</router-link>
        </li>
      </div>
    </nav>
  </div>
<router-view/>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
