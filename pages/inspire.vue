<template>
  <v-layout>
    <v-flex class="text-center">
      <blockquote class="blockquote">
        <h1>MicrosoftでCSSとして働きたい!</h1>
        <p>
          面接で熱意を伝えるのも重要だが、
        </p>
        <p>
          <strong>
            エンジニアとして技術が好きだという点をアピールしたい!
          </strong>
        </p>
        <p>
          という経緯で生まれたのがこのサイトです。
        </p>
        <p>
          履歴書や職務経歴書だけでは分からない部分をいつでも確認できるように、
          このサイトでは私自身や志望動機、そして組織の中でどのように貢献するかといった点に焦点を当てています。
        </p>
        <hr class="my-3" />
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--textalign-end"
            height="200px"
            src="/information.jpg"
          >
            <v-card-title>About me</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">Chapter1</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>自身が働く上で大事にしていること、</div>
            <div>将来的なキャリアプランについて</div>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/aboutme" color="blue" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--textalign-end"
            height="200px"
            src="/microsoft.png"
          >
            <v-card-title>Why Microsoft?</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">Chapter2</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>私がMicrosoftのどこに惹かれたか、</div>
            <div>なぜCSSでなければならないのか</div>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/why" color="blue" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--textalign-end"
            height="200px"
            src="/contribute.jpg"
          >
            <v-card-title>How to contribute</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">Chapter3</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>自身の強みを生かしてどのように貢献するか</div>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/contribute" color="blue" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
        <footer></footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<style>
img {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
}
</style>
