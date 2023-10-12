<template>
  <div class="container mt-5">
    <h6>Enrollment no: {{ form.id }}</h6>
    <b-form @submit="onSubmit" v-if="show">
      <b-row class="my-1" v-for="(subject, index) in subjects" :key="index">
        <b-col sm="5" class="mr-4">
          <label :for="`type-${subject}`">{{ subject }}:</label>
        </b-col>
        <b-col sm="6">
          <b-form-input
            :id="`type-${subject}`"
            v-model="form.marks[subject]"
            type="number"
            required
            :disabled="!isEditing"
          ></b-form-input>
          <b-form-invalid-feedback v-if="erroLogInvalidMark">
            Marks must be between 0 and 100.
          </b-form-invalid-feedback>
        </b-col>
      </b-row>

      <b-button type="button" variant="success" class="m-1" @click="autofill"
        >Autofill</b-button
      >
      <b-button
        type="submit"
        variant="primary"
        class="m-1"
        :disabled="hasInvalidMarks"
      >
        Submit
      </b-button>
      <b-button
        type="button"
        variant="danger"
        class="m-1"
        @click="toggleEditing"
        >Update</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  created() {
    const marks = this.$store.getters.getMarksById(this.form.id);
    this.form.marks = marks;
    console.log(this.form.id, marks);

    this.subjects = [
      "Math",
      "Compiler",
      "EngineeringGraphics",
      "DBMS",
      "SoftwareEngineering",
    ];
  },
  beforeUpdate() {
    for (const subject in this.form.marks) {
      if (!this.isMarksValid(subject)) {
        console.error(
          `Invalid data for ${subject}: ${this.form.marks[subject]}`
        );
        this.erroLogInvalidMark = true;
        const ele = document.getElementById(`type-${subject}`);
        ele.classList.add("border-danger");
      } else {
        const ele = document.getElementById(`type-${subject}`);
        ele.classList.remove("border-danger");
      }
    }
  },

  computed: {
    hasInvalidMarks() {
      for (const subject in this.form.marks) {
        if (!this.isMarksValid(subject)) {
          return true; // Disable the "Submit" button if there are invalid marks
        }
      }
      return false; // Enable the "Submit" button if all marks are valid
    },
  },

  data() {
    return {
      erroLogInvalidMark: false,
      isEditing: false,
      form: {
        id: this.$store.state.thisStudent.id,
        marks: {},
      },
      show: true,
    };
  },
  methods: {
    toggleEditing() {
      this.isEditing = !this.isEditing;
    },
    onSubmit(event) {
      if (this.hasInvalidMarks) {
        return; // Prevent form submission if there are invalid marks
      }
      event.preventDefault();
      const marksAsNumbers = {};
      for (const subject in this.form.marks) {
        marksAsNumbers[subject] = parseInt(this.form.marks[subject]);
      }
      this.$store.commit("setMarks", {
        id: this.form.id,
        marks: marksAsNumbers,
      });
      this.$store.commit("setStudent", {
        id: this.form.id,
        marks: marksAsNumbers,
      });
      console.log(this.$store.state.thisStudent);
      this.isEditing = !this.isEditing;
    },
    isMarksValid(subject) {
      const marks = this.form.marks[subject];
      return marks >= 0 && marks <= 100;
    },
    autofill() {
      if (!this.isEditing) {
        return;
      }
      for (let sub of this.subjects) {
        this.form.marks[`${sub}`] = this.getRandomNumber(100);
      }
    },
    getRandomNumber(max) {
      const random = Math.random();
      const randomNumber = Math.floor(random * (1 + max));
      return randomNumber;
    },
  },
};
</script>
