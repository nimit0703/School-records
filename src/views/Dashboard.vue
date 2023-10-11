<template>
    <div class="mt-3">
        <div class="d-flex">
            <StudentData class="shadow-sm"></StudentData>
            <StudentProfile class="ml-5 p-3 shadow-sm "></StudentProfile>
        </div>
    </div>
</template>
<script>
import StudentData from '../components/StudentData.vue';
import StudentProfile from '../components/StudentProfile.vue';

export default{
    components:{
        StudentData,
        StudentProfile
    }
}
</script>