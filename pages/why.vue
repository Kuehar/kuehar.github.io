<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>Why Microsoft?</h1>
      <h2>なぜMicrosoft?</h2>
      <p>
        まず第一に、企業ミッションである、
      </p>
      <p>
        「Empower every person and every organization on the planet to achieve
        more.（地球上のすべての個人とすべての組織が、より多くのことを達成できるようにする）｣
      </p>
      <p>
        という価値観に共感しました。PaaSは自身の経験からその企業ミッションを具現化したような製品だと信じており、この画期的なサービスを使う時のサポートをすれば働き方はより効率的に変わると確信しました。
      </p>
      <p>
        第二に、制度や職務内容をオープンにしている点が素晴らしいなと感じました。例えば、転職で入社した社員のインタビューを掲載して業務のイメージが掴みやすくしていたり、IaaS部門のブログが存在し、そこでサポートエンジニアの業務内容が事細かに書いてあったり、なぜ今サポートエンジニアが熱いかという記事を現役のサポートエンジニアが書いていたりなど、他のベンダーよりも発信することに重点を置いているように見えます。
      </p>
      <p>
        最後に、英語を使える機会が頻繁にありそうだと感じた点です。技術的なことと一緒で、英語も使いながら伸ばしていきたいと考えています。転職フェアで、私の対応をしてくださったマネージャーの方が英語を使おうと思えば使える機会は多くあると仰っていたので、そこでより興味が沸きました。
      </p>
      <hr class="my-3" />
      <h2>なぜCSS?</h2>
      <p>
        まず第一に、お客さまと直接コミュニケーションが取りたいからです。インターンでの営業の経験から、お客様とコミュニケーションをとり、テクノロジーを駆使して共に問題解決する楽しさを味わったので、そういった機会が欲しいと考えていました。実際に貴社のCSSだとお客様の担当を一人で行うと伺っているので、それぞれのお客様に対してしっかりとコミュニケーションをとることが出来ると考えました。
      </p>
      <p>
        第二の理由としては、外部への発信にも積極的に行っている点に惹かれました。上述のIaaSのブログもさることながら、公式で設計や構築のベストプラクティスの書籍を出していることが他にはない魅力だと思いました。勿論、サポートの的確さや柔軟性も非常に重要な要素だと思いますが、チームの姿勢としてそこに至るまでに解決策や参考にできるドキュメントやナレッジを積極的に発信できるのは理想的だと思います。
      </p>
      <div id="app">
        <v-app id="inspire">
          <div>
            <v-stepper non-linear value="2">
              <v-stepper-header>
                <nuxt-link to="/aboutme">
                  <v-stepper-step editable step="1">
                    About me
                  </v-stepper-step>
                </nuxt-link>
                <v-divider></v-divider>
                <nuxt-link to="/why">
                  <v-stepper-step editable step="2">
                    Why Microsoft?
                  </v-stepper-step>
                </nuxt-link>
                <v-divider></v-divider>
                <nuxt-link to="/contribute">
                  <v-stepper-step step="3" editable>
                    How to Contribute
                  </v-stepper-step>
                </nuxt-link>
              </v-stepper-header>
            </v-stepper>
          </div>
        </v-app>
      </div>
    </v-flex>
  </v-layout>
</template>

<style>
.v-application--wrap {
  min-height: 20px !important;
}
</style>
