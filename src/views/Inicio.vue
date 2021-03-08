<template>
    <div>
        <h1>Ruta protegida</h1>
        <p>{{usuario.email}}</p>
    </diV>

</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'inicio',
    computed: {
        ...mapState(['usuario'])
    }
}

</script>