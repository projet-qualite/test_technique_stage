<template>
    <div class="hello">
        <h1>{{voiture}}</h1>
    </div>
</template>


<script>
    //import router from '../router'

    export default {
        name: 'Detail',
        data () {
            return {
                voiture: null
            }
        },
        created() {
            this.voiture = this.$route.params.voiture;
            
        }
       
        
    }
</script>