<template>
  <Contacts />
</template>

<script>
import Contacts from "@/components/Contacts.vue";
import MainPage from "@/components/MainPage.vue";
export default {
  name: "HomeView",
  components: {
    MainPage,
    Contacts
},
};
</script>