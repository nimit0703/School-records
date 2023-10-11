<template>
  <div>
    <b-button v-b-modal.modal-1>Login</b-button>

    <b-modal id="modal-1" title="Login" @hidden="submitForm" >
      <label for="inputNumber">Enter your Number</label>
      <input type="number" id="inputNumber" v-model.number="id" >
      <p v-if="id === ''" class="text-danger">Please enter a number.</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    };
  },
  methods: {
    submitForm() {
      if (this.id === '') {
        alert('Please enter a number.');
      } else {
        this.$store.commit('setThisStudent',this.id)
        this.$store.commit('login')
        this.$router.push('/');
      }
    },
  },
};
</script>
