<template>
  <div><v-row justify="center" align="center" class="h-screen main"><v-col style="max-width:600px"><v-img contain
          src="https://img.freepik.com/vetores-premium/aladdin-o-genio-do-macaco-da-lampada-magica-vetor-premium-ilustracao-do-estilo-aladin_620829-47.jpg?w=360" height="300"></v-img>
        <v-card v-if="items.length > 1" class="pa-5"><v-card-text class="text-center"><span class=" text-h4"> {{
          ['Possui', 'Tem', 'Apresenta'][Math.floor(Math.random() * 3)] }} {{
    feature
  }}?</span>
            <!-- <SearchImage :phrase="feature" /> -->
          </v-card-text><v-card-actions><v-row><v-col><v-btn block color="success" @click="answer(true)" size="x-large"
                  variant="outlined">SIM</v-btn></v-col><v-col><v-btn block color="error" @click="answer(false)"
                  size="x-large" variant="outlined">NÃO</v-btn></v-col></v-row></v-card-actions></v-card>
        <v-card v-else class="pa-5"><v-card-text class="text-center">
            <div v-if="items.length == 1"><span class=" text-h4">A classe é {{ items[0].name
            }}</span><v-img :src="imagesDataset[items[0].name]" class="pt-4"></v-img></div><span v-else class="text-h4">Classe não
              encontrada</span>
          </v-card-text><v-card-actions><v-btn @click="reset" size="x-large" block variant="outlined">JOGAR
              NOVAMENTE</v-btn></v-card-actions></v-card></v-col></v-row>

  </div>
</template>
<style>
.main {
  background-color: rgb(255, 173, 176);
  background-size: cover;
}
</style>
<script>
export default {
  data: () => ({
    feature: null,
    items: [],
    history: []
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
          if (!features[feature]) {
            features[feature] = 1;
          } else {
            features[feature]++;
          }
        }
      }
      delete features.undefined
      // Cria um array com todas as features e suas diferenças
      const featuresWithDiff = [];
      for (const feature in features) {
        const diff = Math.abs(features[feature] - (array.length - features[feature]));
        featuresWithDiff.push({ feature, diff });
      }

      var realFeats = featuresWithDiff.filter((f) => this.history.indexOf(f) < 0)
      // Ordena o array por diferença e seleciona as 30% primeiras
      const sortedFeatures = realFeats.sort((a, b) => a.diff - b.diff);
      if (this.items.length > 3)
        var numFeaturesToConsider = Math.ceil(sortedFeatures.length * 0.3);
      else var numFeaturesToConsider = 1
      const featuresToConsider = sortedFeatures.slice(0, numFeaturesToConsider);

      // Sorteia uma das features selecionadas aleatoriamente
      const chosenFeature = featuresToConsider[Math.floor(Math.random() * featuresToConsider.length)].feature;
      this.history.push(chosenFeature)
      return chosenFeature;
    },
    answer(response) {
      this.items = this.items.filter((i) => (i.features.indexOf(this.feature) >= 0) == response)
      this.feature = this.getFeature()
    },
    reset() {
      this.history = []
      this.items = []
      this.getItems(classes, [])
      this.feature = this.getFeature()
    }
  },
  created() {
    console.log("initialized")
    this.reset()
  }
}
</script>
