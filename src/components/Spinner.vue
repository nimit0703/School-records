<template>
  <div class="spinner">
    <div class="d-flex justify-content-center">
      <b-spinner variant="primary" label="Text Centered" style="width: 5rem; height: 5rem"></b-spinner>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Place it on top of other content */
  backdrop-filter: blur(5px); /* Apply a blur effect to the background */
}
</style>
