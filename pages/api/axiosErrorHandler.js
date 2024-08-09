// import { message } from "antd";
// import { signOut } from "next-auth/react";
// import customMessage from "./CustomError"

function handleApiError(error) {
  // message.config({});
  if (error.response) {
    // The request was made and the server responded with a status code
    if (
      !(
        error.response.status === 401 ||
        error.response.status === 409 ||
        error.response.status === 404 ||
        error.response.status === 500 ||
        error.response.status === 400
      )
    ) {
      // showStyledErrorMessage();
      // customMessage.error(error.response.data.errors?.[0] || error?.response?.data?.error)
      // message.error(
      //   error.response.data.errors?.[0] || error?.response?.data?.error
      // );
    }

    if (
      error.response.status === 409 ||
      error.response.status === 404 ||
      error.response.status === 400
    ) {
      if (error.response.data?.hasOwnProperty("message")) {
        // customMessage.error(error.response.data.message);
        // message.error(error.response.data.message);
      }

      if (error.response.data?.hasOwnProperty("error")) {
        // message.error(error.response.data.error);
        // customMessage.error(error.response.data.error);
      }
    }

    if (error.response.status === 401) {
      localStorage.clear();
      // signOut({ redirect: false }).then(() => {
      //   window.location.href = "/"; // Redirect to the sign-in page
      // });
    }
    return Promise.reject(error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("Request error:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error:", error.message);
  }
  return Promise.reject("An error occurred");
}

export default handleApiError;
