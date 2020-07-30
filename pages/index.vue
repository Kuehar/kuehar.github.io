<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <!-- <logo /> -->
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          ようこそ！
        </v-card-title>
        <v-card-text>
          <p>
            このサイトはNuxt.jsで作られ、Azureでデプロイされています
          </p>
          <p>
            ソースコードは
            <a
              href="https://github.com/Kuehar/PR_SITE/"
              target="_blank"
              title="chat"
            >
              こちら
            </a>
          </p>
          <p>
            バグを見つけたらお手数ですが
            <a
              href="https://twitter.com/KueharX"
              target="_blank"
              title="contribute"
            >
              Twitter</a
            >にお願いします
          </p>
          <p>
            このサイトを見て頂きありがとうございます、お互いの良い機会となれば幸いです
          </p>
          <div class="text-xs-right">
            <em>&mdash; Ken Uehara</em>
          </div>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            次へ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    VuetifyLogo
  }
}
</script>

<style>
img {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
}
</style>
