<template>
  <div><v-row justify="center" align="center" class="h-screen main"><v-col cols="4">
        <v-card v-if="items.length > 1" class="pa-5"><v-card-text class="text-center"><span class=" text-h3"> Possui {{
          feature
        }}?</span>
          </v-card-text><v-card-actions><v-row><v-col><v-btn block color="success" @click="answer(true)" size="x-large"
                  variant="outlined">SIM</v-btn></v-col><v-col><v-btn block color="error" @click="answer(false)"
                  size="x-large" variant="outlined">NÃO</v-btn></v-col></v-row></v-card-actions></v-card>
        <v-card v-else class="pa-5"><v-card-text class="text-center"> <span class=" text-h3">A classe é {{ items[0].name
        }}</span></v-card-text><v-card-actions><v-btn @click="reset" size="x-large" block  variant="outlined">JOGAR
              NOVAMENTE</v-btn></v-card-actions></v-card></v-col></v-row>

  </div>
</template>
<style>
.main {
  background-image: url("https://static.vecteezy.com/ti/vetor-gratis/p3/1218609-colecao-de-biologia-icones-gratis-vetor.jpg");
  background-size: cover;
}
</style>
<script>
export default {
  data: () => ({
    feature: null,
    items: []
  }),
  methods: {
    getItems(items, features) {
      items.forEach((item) => {
        var newFeat = features.concat(item.features)
        if (!item.children) this.items.push({ name: item.name, features: newFeat })
        else this.getItems(item.children, newFeat)
      })
    },
    getFeature() {
      // Cria um objeto com todas as features e suas contagens
      var array = this.items
      const features = {};
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        for (let j = 0; j < item.features.length; j++) {
          const feature = item.features[j];
          if (features[feature] === undefined) {
            features[feature] = 1;
          } else {
            features[feature]++;
          }
        }
      }

      // Cria um array com todas as features e suas diferenças
      const featuresWithDiff = [];
      for (const feature in features) {
        const diff = Math.abs(features[feature] - (array.length - features[feature]));
        featuresWithDiff.push({ feature, diff });
      }

      // Ordena o array por diferença e seleciona as 30% primeiras
      const sortedFeatures = featuresWithDiff.sort((a, b) => a.diff - b.diff);
      const numFeaturesToConsider = Math.ceil(sortedFeatures.length * 0.3);
      const featuresToConsider = sortedFeatures.slice(0, numFeaturesToConsider);

      // Sorteia uma das features selecionadas aleatoriamente
      const chosenFeature = featuresToConsider[Math.floor(Math.random() * featuresToConsider.length)].feature;
      return chosenFeature;
    },
    answer(response) {
      this.items = this.items.filter((i) => (i.features.indexOf(this.feature) >= 0) == response)
      this.feature = this.getFeature()
    },
    reset() {
      this.getItems(classes, [])
      this.feature = this.getFeature()
    }
  },
  created() {
    this.reset()
  }
}
</script>
