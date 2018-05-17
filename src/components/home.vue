<template>

<div>
   <header >
        <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
       <div class="container">
          <a class="navbar-brand" href="#">Google Books</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Livro" aria-label="Search" v-model="query">
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit" v-on:click="getBooks">Buscar</button>
          </form>
        </div>
       </div>
      </nav>
    </header>
      <!-- Begin page content -->
    <main role="main" class="container">
      
  <div id="conteudo">
    <div class="row">
      <div v-for="item in info" v-bind:key="item.id" >
        <card v-bind:item="item"></card>
      </div>
    </div>
  </div>
    </main>

    <footer class="footer">
      <div class="container">
        <span class="text-muted"><a href="http://kadupenido.com">Por Kadu Penido.</a></span>
      </div>
    </footer>
 

</div>


</template>

<script>
import getBooks from "../services/books-service";
import Card from "./card";

export default {
  name: "Home",
  data() {
    return {
      info: null,
      query: ""
    };
  },
  components: {
    Card
  },
  methods: {
    getBooks: function() {
      if (!this.query) return;

      var query2 = this.query.replaceAll(" ", "+");

      getBooks(query2)
        .then(res => res.data)
        .then(data => {
          this.info = data.items;
        });
    }
  },
  mounted() {
    this.query = "vue js";
    this.getBooks();
  }
};

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, "g"), replacement);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#conteudo {
  margin-top: 20px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}

.footer > .container {
  padding-right: 15px;
  padding-left: 15px;
}
</style>
