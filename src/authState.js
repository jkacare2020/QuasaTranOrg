// import Vue from "vue";
// import { auth } from "./firebase/firebase"; // Use the already initialized auth instance

// const state = Vue.observable({
//   user: null,
//   authLoading: true,
// });

// // Use onAuthStateChanged with the initialized auth instance
// import { onAuthStateChanged } from "firebase/auth";
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("User authenticated globally");
//     state.user = user;
//   } else {
//     console.warn("User not authenticated globally");
//     state.user = null;
//   }
//   state.authLoading = false;
// });

// export default state;
