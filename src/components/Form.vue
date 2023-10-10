<template>
  <div class="container mt-5">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-row class="my-1" v-for="(subject, index) in subjects" :key="index">
        <b-col sm="6">
          <label :for="`type-${subject}`">{{ subject }}:</label>
        </b-col>
        <b-col sm="6">
          <b-form-input
            :id="`type-${subject}`"
            v-model="form.marks[subject]"
            type="number"
            min="0"
            max="100"
            required
          ></b-form-input>
          <b-form-invalid-feedback v-if="!isMarksValid(subject)">
            Marks must be between 0 and 100.
          </b-form-invalid-feedback>
        </b-col>
      </b-row>

      <b-button type="submit" variant="primary" class="m-1">Submit</b-button>
      <b-button type="reset" variant="danger" class="m-1">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        marks: {}, // Create an object to store marks for each subject
      },
      show: true,
      subjects: ['Math', 'Science', 'English', 'S.S', 'Gujarati'],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.marks = {}; // Clear the marks

      this.$nextTick(() => {
        this.show = true;
      });
    },
    isMarksValid(subject) {
      const marks = this.form.marks[subject];
      return marks >= 0 && marks <= 100;
    },
  },
  computed: {
    nameState() {
      return this.form.name.length > 3;
    },
  },
};
</script>
