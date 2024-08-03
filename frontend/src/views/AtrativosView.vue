<template>
    <div><iframe src="url_direction" id="mapa" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</template>

<style  scoped>
    iframe{
        max-width: 100%;
    }
</style>

<script>

export default {
  props: ['id'], // Recebe o parâmetro da URL como uma prop
  computed: {
    destinationId() {
      return this.id; // Obtém o parâmetro da prop
    }
  },
created() {
    // Aqui você pode fazer a chamada para a API para buscar atrativos com base no destinationId
    this.fetchAtrativos();
  },
  methods: {
    async fetchAtrativos() {
      try {
        const response = await fetch(`http:localhost:3000/atrativos/${this.destinationId}`);
        const data = await response.json();
        console.log(data);
        // Lógica para armazenar e exibir os atrativos
      } catch (error) {
        console.error('Erro ao buscar atrativos:', error);
      }
    }
  }
};
</script>