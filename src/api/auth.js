import axios from "axios";

export default {
  async userLogin(payload) {
    return await axios.post(
      `${process.env.REACT_APP_API_URL}/api/user/login`,
      payload
    );
  },
  async userRegister(payload) {
    return await axios.post(
      `${process.env.REACT_APP_API_URL}/api/user/register`,
      payload
    );
  },
};
