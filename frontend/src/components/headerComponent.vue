<script setup>
    
</script>

<template>
    <header>
        <div class="header_component">
            <ul>
                <RouterLink to="/"><li>Home</li></RouterLink> 
                <RouterLink to="/destinos"><li>Destino</li></RouterLink>
                <RouterLink to="/atrativos"><li>Atrativos</li></RouterLink>
            </ul>
        </div>
    </header>
</template>


<style scoped>

</style>

<style scoped>
    header{
        height: 8vh;
        background-color:  #312F2F;
        display: flex;
        color: white;
        justify-content:space-between;
        align-items: center;
    }
    .header_component{
        max-width: 1300px;
        margin: 0 auto  ;
    }

    ul{
       display: flex;
       list-style: none;
       width: 500px;
       justify-content: space-between;
    }
</style>