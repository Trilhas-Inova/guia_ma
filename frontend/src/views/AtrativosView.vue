<!-- <template>
    <div class="list_destinos">
      <CardComponent
        v-for="(destino, index) in  "
        :key="index"
        :id="destino.id"
        :imagemUrl="destino.imagemUrl"
        :nome="destino.nome"
        :descricao="destino.descricao"
        buttonText="Atrativos"
      />
    </div>
  </template> -->
<script>
export default {
props: ['destinationId'],
created() {
    // Aqui você pode fazer a chamada para a API para buscar atrativos com base no destinationId
    this.fetchAtrativos();
  },
  methods: {
    async fetchAtrativos() {
      try {
        const response = await fetch(`http:localhost:3000/atrativos/${this.destinationId}`);
        console.log(this.destinationId);
        const data = await response.json();
        console.log(data);
        result = data;
      } catch (error) {
        console.error('Erro ao buscar atrativos:', error);
      }
    }
  }
};
</script>