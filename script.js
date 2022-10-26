const { createApp } = Vue
 const creata = createApp ({
    data(){
        return{
            message : 'Ciao ho usato Vue',
            bgClass : 'bg-image'
        }
    }
})
creata.mount('#app')