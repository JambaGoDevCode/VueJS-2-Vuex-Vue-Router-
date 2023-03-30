Vue.createApp({
  data() {
    return {
      valor: "",
    };
  },
  methods: {
    exibirAlerta() {
      alert("Estou alertando agora!");
    },
    alterarValor(event) {
      this.valor = event.target.value;
    },
  },
}).mount("#desafio");
