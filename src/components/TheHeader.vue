<template>
    <header class="header">
        <div class="container header__container">
            <div class="wrapper header__wrapper_change">
                <div class="btnwrapper header__btn_changetext">
                    <button @click="$store.commit('changeCards', 'text')" class="btn header__btn_changetextbtn" :class="$store.state.male === 'woman' ? 'header__btn_changetextbtn_woman' : 'header__btn_changetextbtn_man'">
                        Поменять поздравление
                    </button>
                    <button @click="$store.commit('changeCards', 'image')" class="btn header__btn_changetextbtn" :class="$store.state.male === 'woman' ? 'header__btn_changetextbtn_woman' : 'header__btn_changetextbtn_man'">
                        Поменять фон
                    </button>
                </div>
                <div class="btnwrapper header__btn_changemale">
                    <button @click="$store.state.male = 'man', $store.commit('changeBody'), $store.dispatch('getDataBase')" class="btn header__btn_changemale header__btn_changemale_man" :class="$store.state.male === 'woman' ? '' : 'header__btn_changemale_man_border'">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.575 12.8055L27.8775 7.5H21V4.5H33V16.5H30V9.621L24.6945 14.9265C26.4253 17.1953 27.2292 20.037 26.9435 22.8762C26.6579 25.7155 25.3039 28.3401 23.1558 30.2186C21.0077 32.097 18.2261 33.089 15.3741 32.9937C12.5221 32.8983 9.8129 31.7227 7.79512 29.7049C5.77733 27.6871 4.60172 24.9779 4.50635 22.1259C4.41098 19.2739 5.40297 16.4923 7.28145 14.3442C9.15993 12.1961 11.7845 10.8422 14.6238 10.5565C17.463 10.2708 20.3047 11.0747 22.5735 12.8055H22.575ZM15.75 30C17.938 30 20.0365 29.1308 21.5836 27.5836C23.1308 26.0365 24 23.938 24 21.75C24 19.562 23.1308 17.4635 21.5836 15.9164C20.0365 14.3692 17.938 13.5 15.75 13.5C13.562 13.5 11.4636 14.3692 9.91638 15.9164C8.36921 17.4635 7.50001 19.562 7.50001 21.75C7.50001 23.938 8.36921 26.0365 9.91638 27.5836C11.4636 29.1308 13.562 30 15.75 30Z" fill="#1178B3"/>
                        </svg>
                    </button>
                    <button @click="$store.state.male = 'woman', $store.commit('changeBody'), $store.dispatch('getDataBase')" class="btn header__btn_changemale header__btn_changemale_woman" :class="$store.state.male === 'woman' ? 'header__btn_changemale_woman_border' : ''">                    
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 23.901C13.6739 23.5179 11.0987 22.0758 9.29528 19.8665C7.49183 17.6571 6.59465 14.8454 6.7852 11.9998C6.97574 9.15418 8.23978 6.48713 10.3217 4.53795C12.4036 2.58877 15.1481 1.50293 18 1.50001C20.8555 1.49725 23.6051 2.58042 25.6915 4.5299C27.7779 6.47938 29.0449 9.1493 29.2357 11.9984C29.4265 14.8474 28.5267 17.6624 26.7189 19.8727C24.911 22.0829 22.3303 23.523 19.5 23.901V27H27V30H19.5V36H16.5V30H9.00001V27H16.5V23.901ZM18 21C20.188 21 22.2865 20.1308 23.8336 18.5836C25.3808 17.0365 26.25 14.938 26.25 12.75C26.25 10.562 25.3808 8.46355 23.8336 6.91638C22.2865 5.3692 20.188 4.50001 18 4.50001C15.812 4.50001 13.7136 5.3692 12.1664 6.91638C10.6192 8.46355 9.75001 10.562 9.75001 12.75C9.75001 14.938 10.6192 17.0365 12.1664 18.5836C13.7136 20.1308 15.812 21 18 21Z" fill="#C300C7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import ('../assets/header.scss')

export default {
}
</script>

<style>

</style>