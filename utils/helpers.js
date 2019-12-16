// import jwtDecode from "jwt-decode";
// import router from "@/router";

export default {
  // getAccessToken() {
  //   const token = localStorage.getItem("token");
  //   if (!token) return null;
  //   const decoded = jwtDecode(token);
  //   if (decoded.exp < Math.floor(Date.now() / 1000)) return null;
  //   return token;
  // },
  // isAuthenticated() {
  //   return !!this.getAccessToken();
  // },
  // logout() {
  //   localStorage.clear();
  //   router.replace({ name: "home" });
  // },
  isMobile() {
    if(process.client) {
      return window.innerWidth < 701;
    }else{
      return 700;
    }
  }
};