<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://w3s.link/ipfs/bafybeicngpm7xa7twc4l3zga3tt3qbuoh3a2sprrcrmtbybabxelg4aou4/9dac9f5613b882135c2bfcebd77124430bd1f96a433a60ab7647ba9c16f1ec38.png"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Cauldron.Quest</div>
        <div class="text-h3 q-mt-sm q-mb-xs">KZG Token</div>
        <div class="text-caption text-grey">
              </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="green" label="Cauldron" target="_blank" href="https://app.cauldron.quest/swap/9dac9f5613b882135c2bfcebd77124430bd1f96a433a60ab7647ba9c16f1ec38"/>
        <q-btn flat color="red" label="Token Explore" target="_blank" href="https://tokenexplorer.cash/?tokenId=9dac9f5613b882135c2bfcebd77124430bd1f96a433a60ab7647ba9c16f1ec38" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      expanded: ref(false),
      lorem: 'description: Metodo de pago app juegos'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
