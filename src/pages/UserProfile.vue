<template>
  <div>
    <h1>User Profile</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <p>Name: {{ user.displayName }}</p>
      <p>Email: {{ user.email }}</p>
      <!-- Add other user attributes here -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      loading: false,
      error: null,
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      this.loading = true;
      // Assuming you have a method to get the current user's ID token
      this.$auth.currentUser.getIdToken().then((idToken) => {
        this.$axios
          .get("http://localhost:3000/api/users", {
            // Ensure this URL is correct
            headers: { Authorization: `Bearer ${idToken}` },
          })
          .then((response) => {
            this.user = response.data; // Adjust this according to how your API sends data
            this.loading = false;
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
            this.error = "Failed to load user data.";
            this.loading = false;
          });
      });
    },
  },
};
</script>
