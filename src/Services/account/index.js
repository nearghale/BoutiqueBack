import axios from "axios";

const base = "https://boutiquepool13.herokuapp.com/account/";

export const Create = async (user) => {
  await axios.post(base).then((res) => console.log(res));
};

export const GetUser = async (email) => {
  const proxyurl = "https://boutiquepool13.herokuapp.com/";
  const url = "https://boutiquepool13.herokuapp.com/"; // site that doesn’t send Access-Control-*
  fetch(proxyurl + url)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const Update = async (user) => {
  await axios
    .post(
      base + user.email,
      { user },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => console.log("error", err));
};

export const Delete = async (email) => {
  await axios
    .post(base + email, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => console.log("error", err));
};
