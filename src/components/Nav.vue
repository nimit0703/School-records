<template>
    <div class="">
      <b-nav pills>
        <router-link to="/" tag="b-nav-item" exact>Dashboard</router-link>
        <router-link to="add-data" tag="b-nav-item">Add Data</router-link>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Stats"
          toggle-class="nav-link-custom"
          right
        >
          <router-link to="by-marks" tag="b-dropdown-item">By Marks</router-link>
          <router-link to="by-subjects" tag="b-dropdown-item">By Subjects</router-link>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
  </template>
  
  <script></script>
  