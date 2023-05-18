function getToken() {
  const user: any = window.localStorage.getItem("user");

  let token: string;
  let config: object;

  if (!user) {
    token = "";
    config = {
      headers: { token },
    };
  } else {
    token = JSON.parse(user).token;

    config = {
      headers: { token },
    };
  }

  return { token, config };
}

export default getToken;
