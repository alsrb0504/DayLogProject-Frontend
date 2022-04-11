export function setAuthHeader() {}

export function getAuthHeader() {
  const access_token = localStorage.getItem("access_token");

  if (access_token) {
    return {
      Authorization: `Bearer ${access_token}`,
    };
  } else {
    return {};
  }
}
