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

      <b-button type="" variant="success" class="m-1" @click.prevent="autofill"
        >Autofill</b-button
      >
      <b-button type="submit" variant="primary" class="m-1">Submit</b-button>
      <b-button type="reset" variant="danger" class="m-1">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  created() {
    this.form.id = 1;
    this.form.marks = {
      Math: 0,
      Science: 0,
      English: 0,
      SS: 0,
      Gujarati: 0,
    };
    this.subjects = ["Math", "Science", "English", "SS", "Gujarati"];
  },

  data() {
    return {
      form: {
        id: 0,
        marks: {},
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const marksAsNumbers = {};
      for (const subject in this.form.marks) {
        marksAsNumbers[subject] = parseInt(this.form.marks[subject]);
      }
      this.$store.commit("setMarks", {
        id: this.form.id,
        marks: marksAsNumbers,
      });
      console.log(this.$store.state.thisStudent);
      this.onReset(event);
    },
    onReset(event) {
      event.preventDefault();
      this.form.marks = {
        Math: 0,
        Science: 0,
        English: 0,
        SS: 0,
        Gujarati: 0,
      };
      this.$nextTick(() => {
        this.show = true;
      });
    },
    isMarksValid(subject) {
      const marks = this.form.marks[subject];
      return marks >= 0 && marks <= 100;
    },
    autofill() {
      for (let sub of this.subjects) {
        console.log(sub);
        this.form.marks[`${sub}`] = this.getRandomNumber();
      }
    },
    getRandomNumber() {
      const random = Math.random();
      const randomNumber = Math.floor(random * 101);
      return randomNumber;
    },
  },
  computed: {},
};
</script>
