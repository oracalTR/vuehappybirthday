<template>
    <main class="main">
        <div class="container main__container">
            <div class="wrapper main__wrapper_change">
                <div :style=" {backgroundImage: 'url(./img/' + $store.state.dataMalePhoto[$store.state.numPhoto] + ')'} "
                 class="card-image main__card-image_change">
                    <p :style="$store.state.dataMalePhoto[$store.state.numPhoto].indexOf('black') > 0 ? {color: '#fff'} : ''" class="card main__card_text" v-html="$store.state.dataMaleText[$store.state.numText].replaceAll('\n', '<br />')">
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ('../assets/main.scss')

export default {

}
</script>

<style>
[v-cloak] {
    display: none;
}
</style>