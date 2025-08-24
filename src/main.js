const app = Vue.createApp({
  data() {
    return {
      //Tareas de ejemplo para mostrar al iniciar el app, mostrando el visual de como se ve las tareas en sus distintos estados
      tareas: [
        { texto: 'Comprar una libra de chontaduro', completada: false },
        { texto: 'Pagar la cuota alimentaria (Opcional)', completada: false },
        { texto: 'Hacerme youtuber y estafar gente', completada: true }
      ],
      //Reset y definicion de variables
      nuevaTarea: '',
      modalAbierto: false,
      tareaAEliminar: null
    };
  },
  methods: {
    //Metodo para agregar una tarea a la lista
    agregarTarea() {
      if (this.nuevaTarea.trim() !== '') {
        this.tareas.push({ texto: this.nuevaTarea, completada: false });
        this.nuevaTarea = '';
      }
    },
    //Metodo para llamar al modal
    abrirModal(index) {
      this.modalAbierto = true;
      this.tareaAEliminar = index;
    },
    //Metodo para cerrar el modal
    cerrarModal() {
      this.modalAbierto = false;
      this.tareaAEliminar = null;
    },
    //Metodo para eliminar la tarea tras confirmarse en el modal
    confirmarEliminar() {
      if (this.tareaAEliminar !== null) {
        this.tareas.splice(this.tareaAEliminar, 1);
      }
      this.cerrarModal();
    },
    //Metodo para llamar a funcion cambio de estilo para tarea completada
    toggleCompletada(index) {
      this.tareas[index].completada = !this.tareas[index].completada;
    }
  }
});

app.mount('#app');
