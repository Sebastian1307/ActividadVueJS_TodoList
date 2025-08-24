const app = Vue.createApp({
  data() {
    return {
      tareas: [
        { texto: 'Comprar una libra de chontaduro', completada: false },
        { texto: 'Pagar la cuota alimentaria (Opcional)', completada: false },
        { texto: 'Hacerme youtuber y estafar gente', completada: true }
      ],
      nuevaTarea: '',
      modalAbierto: false,
      tareaAEliminar: null
    };
  },
  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim() !== '') {
        this.tareas.push({ texto: this.nuevaTarea, completada: false });
        this.nuevaTarea = '';
      }
    },
    abrirModal(index) {
      this.modalAbierto = true;
      this.tareaAEliminar = index;
    },
    cerrarModal() {
      this.modalAbierto = false;
      this.tareaAEliminar = null;
    },
    confirmarEliminar() {
      if (this.tareaAEliminar !== null) {
        this.tareas.splice(this.tareaAEliminar, 1);
      }
      this.cerrarModal();
    },
    toggleCompletada(index) {
      this.tareas[index].completada = !this.tareas[index].completada;
    }
  }
});

app.mount('#app');
