<template>
  <div class="d-flex-column align-items-center" style="width: 25vw">
    <div class="d-flex justify-content-center">
      <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
    </div>
    <div class="d-flex justify-content-center">
      <a href="#"> Update</a>
    </div>
    <div class="d-flex-column justify-content-center mt-5 ml-3">
      <div class="d-flex my-2">
        <div class="profileData bg-light ">Name </div>
        <span class="ml-3"> : Ronak J. Patel</span>
      </div>
      <div class="d-flex my-2">
        <div class="profileData bg-light ">Enrollment No </div>
        <span class="ml-3"> : 19041010{{userData.id}}</span>
      </div>
      <div class="d-flex my-2">
        <div class="profileData bg-light ">School:</div>
        <span class="ml-3"> : Ambe School </span>
      </div>
      <div class="d-flex my-2">
        <div class="profileData bg-light ">STD </div>
        <span class="ml-3"> : 9th</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // mainProps: { src:'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',blankColor: '#777', width: '125vw', height: '125vw', class: 'm1' }
    };
  },
  beforeCreate() {
    this.userData = this.$store.state.thisStudent;
  },
  created() {
    this.mainProps = {
      src: "https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png",
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
  padding-left: 1px;
 
}
</style>
