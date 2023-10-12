<template>
  <div class="d-flex-column align-items-center" style="width: 30vw">
    <div class="d-flex justify-content-center">
      <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <a href="#"> Update</a>
    </div>
    <div class="d-flex-column justify-content-center mt-5 ml-3">
      <div class="d-flex my-2">
        <div class="profileData bg-light ">Name </div>
        <span class="ml-3" style="font-size: smaller;"> : {{userData.name}}</span>
      </div>
      <div class="d-flex my-2">
        <div class="profileData bg-light ">Enrollment No </div>
        <span class="ml-3" style="font-size: smaller;"> : 19041010{{userData.id}}</span>
      </div>
      <div class="d-flex my-2">
        <div class="profileData bg-light ">School:</div>
        <span class="ml-3" style="font-size: smaller;"> : Ambe School </span>
      </div>
      <div class="d-flex my-2">
        <div class="profileData bg-light ">email </div>
        <span class="ml-3 " style="font-size: smaller;"> : {{userData.email}}</span>
      </div>
      <div class="d-flex my-2">
        <div class="profileData bg-light ">Gender </div>
        <span class="ml-3" style="font-size: smaller;"> : {{userData.gender}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  beforeCreate() {
    this.userData = this.$store.state.thisStudent;
  },
  created() {
    this.mainProps = {
      src: this.userData.img,
      blankColor: "#777",
      width: "125vw",
      height: "125vw",
      class: "m1",
    };
  },
};
</script>
<style scoped>
.profileData {
  width: 10vw;
  padding-left: 5px;
 
}
</style>
