<template>
    <div class="list_destinos">
      <CardComponent
        v-for="(destino, index) in destinos"
        :key="index"
        :id="destino._id"
        :imagemUrl="destino.imagemUrl"
        :nome="destino.nome"
        :descricao="destino.descricao"
        buttonText="Atrativos"
      />
    </div>
  </template>
  
  <script>
  import CardComponent from '../components/CardComponent.vue';
  
  export default {
    components: {
      CardComponent
    },
    data() {
      return {
        destinos: []
      };
    },
    created() {
      this.fetchDestinos();
    },
    methods: {
      async fetchDestinos() {
        try {
            const response = await fetch('http://localhost:3000/destinos'); 
            const data = await response.json();
            console.log(data);
            this.destinos = data; 
          
        } catch (error) {
          console.error('Erro ao buscar destinos:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
    .list_destinos{
        height: 88vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
  </style>
  
  