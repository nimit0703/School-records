<template>
    <div>
        <Form></Form>
    </div>
</template>

<script>
import Form from '../components/Form.vue'

export default{
    components:{
        Form,
    },
    beforeDestroy() {
    console.log("bySubject before destroy", )
    this.$store.state.showSpinner = true;

    setTimeout(() => {
      this.$store.state.showSpinner = false;
    },700);
  },
}
</script>