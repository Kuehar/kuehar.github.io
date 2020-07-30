<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>How to Contribute</h1>
      <h2>as a Technical Support Engineer</h2>
      <p>
        私がテクニカルサポートエンジニアとしてふさわしい点は二点あると考えています。
      </p>
      <p>
        一点目は技術が好き故に自主的に勉強を重ね、他の多くの新卒よりも一年間で多くのことを学び、発信し続けてきたことです。
        現段階では大学でコンピューターサイエンスを学んできた人達に知識等では敵わないかも知れませんが、入社後、ほとんど0から学び始めたということを考えると、その成長力には目をみはるものがあると思います。
        そしてこの継続して学び続ける能力は、数ある職種の中でもとりわけ知識をお客様より多く必要とされるテクニカルサポートエンジニアのような職種では最も重要な素質の一つであると私は考えています。
      </p>
      <p>
        そして二点目は貴社で働き、PaaSを使われるお客様へのサポートがしたいという熱意に溢れている事です。
        キャリア一年目が終わるという通常では考えられないタイミングで転職の面接を受けることは私にとっては大きなチャレンジです。
        しかし、転職フェアでCSSの存在を知って以来、調べれば調べるほどMicrosoftのCSSに入りたい、ワクワクが止まらないという思いからこのような自身の思いを余すことなく伝える為のサイトまで作ってしまいました。
        この熱意は貴社に入社し、業務を行う際に成果をあげるときの原動力になるに違いありません。
      </p>
      <hr class="my-3" />
      <h2>as a Team Member</h2>
      <p>
        ここではチームメンバーとしてどのような働きをするのかという軸で二点メリットを挙げます。
        まず一点目は生産性上げることへの強い意識を持っているということです。
        具体例としては、営業のインターンをしていた際に、顧客データを元に作成した営業効率をあげるツールを管理することでチームの高い生産性を維持し、チームとして世界二位の営業成績を達成しました。
      </p>
      <p>
        そして二点目にチャレンジングな性格であるということです。ファーストペンギンという言葉にある通り、勇気を持ち、失敗を恐れずにチャレンジする姿勢を持つメンバーが集団の中に一人でもいると他のメンバーもチャレンジしやすい雰囲気を作ることにつながると考えます。
        具体的な例としては上でも述べましたが、正にこの転職活動が例です。普通ならば転職活動自体を意識しないタイミングでチャレンジしてこのような素晴らしい機会を得られています。
        このような精神は貴社に入ってからも、チームにより活発な雰囲気を与えると考えています。
      </p>
      <hr class="my-3" />
      <h3>
        ここまで読んでいただきありがとうございました、
        お互いにとって良いご縁となれば幸いです。
      </h3>
      <div id="app">
        <v-app id="inspire">
          <div>
            <v-stepper non-linear value="3">
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
a {
  text-decoration: none;
}
h3 {
  text-align: right;
  padding: 5% 0;
}
</style>
