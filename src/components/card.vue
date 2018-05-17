<template>
<div class="col-md-auto">
    <div class="card">
        <div class="box-img">
          <a v-bind:href="item.accessInfo.webReaderLink" class="card-link">
            <img class="card-img-top" v-if="item.volumeInfo.imageLinks" v-bind:src="item.volumeInfo.imageLinks.thumbnail">
          </a>
        </div>
  <div class="card-body">
    <h5 class="card-title">{{ item.volumeInfo.title }}</h5>
    <p class="card-text">{{ item.volumeInfo.description | capitalize }}</p>
    <p><i>{{ item.volumeInfo.authors | formatArray }}</i></p>
    <p style="font-size:0.7em;"><i>{{ item.volumeInfo.publisher }}</i></p>
    <a v-bind:href="item.accessInfo.webReaderLink" class="card-link">Ler</a>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      if (value.length > 200) return value.substring(0, 200) + " ...";
    },
    formatArray: function(value) {
      if (!value) return "";
      var ret = "";
      for (let i = 0; i < value.length; i++) {
        const e = value[i];
        ret += e;
        if (i + 1 < value.length) ret += ", ";
      }
      return ret;
    }
  },
  methods: {}
};
</script>

<style scoped>
.card {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  width: 350px;
  min-height: 500px;
}

.card-text {
  font-size: 0.7em;
}

.box-img {
  text-align: center;
  margin: 0 auto;
}

.box-img img {
  width: 128px;
}
</style>

