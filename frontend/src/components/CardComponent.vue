<template>
    <div class="card">
        <p invisible>{{ id }}</p>
      <img :src="imagemUrl" :alt="name" class="card-image" />
      <div class="card-body">
        <h3 class="card-title">{{ nome }}</h3>
        <p class="card-description">{{ descricao }}</p>
        <button class="card-button" @click="goToAtrativos">{{ buttonText }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imagemUrl: {
        type: String,
        required: true
      },
      nome: {
        type: String,
        required: true
      },
      descricao: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        default: 'Visitar'
      }
    },
    methods: {
    goToAtrativos() {
      // Redireciona para a página de atrativos, passando o ID como parâmetro na URL
      this.$router.push({ name: 'atrativos', params: { destinationId: this.id } });
    }
  }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-body {
    padding: 16px;
  }
  
  .card-title {
    font-size: 1.25rem;
    margin: 0;
  }
  
  .card-description {
    font-size: 1rem;
    color: #555;
  }
  
  .card-button {
    margin-top: 16px;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .card-button:hover {
    background-color: #0056b3;
  }
  </style>
  