import axios from "axios";

export const useApi = () => {
  const auth = {
    token: "salman",
  };
  const url = "http://localhost:4000/";

  const post = async (path, body) => {
    debugger;
    const data = await axios
      .post(
        url + path,
        body,
        auth && auth.token
          ? {
              headers: {
                "x-access-token": localStorage.getItem("accessToken"),
              },
            }
          : ""
      )
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
    return data;
  };
  const get = async (path, params) => {
    const data = await axios
      .get(url + path, {
        headers: {
          "x-access-token": auth?.token,
        },
        params,
      })
      .then((resp) => {
        return resp;
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
    return data;
  };

  return { post, get };
};

export default useApi;
