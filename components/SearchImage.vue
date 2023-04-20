<template>
    <div>
      <v-img :src="imageUrl" alt="Imagem" v-if="imageUrl" title="Imagem relacionada" contain/>
    </div>
</template>
  
  <script>
  export default {
    props: {
      phrase: {
        type: String,
        required: true,
      },
    },
  
    data() {
      return {
        imageUrl: '',
      };
    },
  
    watch: {
      phrase: {
        immediate: true,
        handler(newValue) {
          this.searchImage(newValue);
        },
      },
    },
  
    methods: {
      async searchImage(phrase) {
        phrase = "Biologia exemplo de " + phrase
        try {
          const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAj3k62Qnir_yd-gqVy_HRvDEzXXkoWXV4&cx=24753fccd0ab94731&searchType=image&q=${encodeURIComponent(phrase)}`);
          const data = await response.json();
          this.imageUrl = data.items[0].link;
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  