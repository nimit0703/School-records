<template>
  <div>
    <b-button v-b-modal.modal-1>Login</b-button>

    <b-modal id="modal-1" title="Login" @hidden="submitForm">
      <label for="inputNumber" class="mr-4"> Enter your Number</label>
      <input type="number" id="inputNumber" v-model.number="id" />
      <p v-if="id === ''" class="text-danger">Please enter a number.</p>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios"; // Import Axios at the top

export default {
  data() {
    return {
      id: "",
      data:""
    };
  },
  methods: {
    fetchData() {
      const apiUrl = "https://randomuser.me/api";
      return axios
        .get(apiUrl)
        .then((response) => {
          const userData = response.data.results[0];
          const name = `${userData.name.first} ${userData.name.last}`;
          const thumbnail = userData.picture.thumbnail;
          const email = userData.email;
          const gender = userData.gender;

          // Return the object
          return {
            name,
            thumbnail,
            email,
            gender,
          };
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle the error as needed
        });
    },
    submitForm() {
      if (this.id === "") {
        alert("Please enter a number.");
      } else {
        this.fetchData().then((randomData) => {
          this.data = {
            name: randomData.name,
            email: randomData.email,
            gender: randomData.gender,
            thumbnail: randomData.thumbnail,
          };
          console.log(this.data);
          this.$store.commit("setThisStudent", [this.id, this.data]);
          this.$store.commit("login");
          this.$router.push('/');

        });
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
