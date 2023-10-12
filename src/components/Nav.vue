<template >
  <div class="nav-wrapper">
    <b-nav vertical class="w-20">
      <router-link to="/" tag="b-nav-item" exact-active-class="active">Dashboard</router-link>
      <router-link to="add-data" tag="b-nav-item">Add Data</router-link>
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        text="Compare"
        toggle-class="nav-link-custom"
        right
      >
        <router-link to="by-marks" tag="b-dropdown-item">By Marks</router-link>
        <router-link to="by-subjects" tag="b-dropdown-item"
          >By Subjects</router-link
        >
      </b-nav-item-dropdown>
      <b-nav-item tag="b-nav-item" @click.prevent="logout">Logout</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>




