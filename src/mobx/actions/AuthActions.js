import showAlert from "../../utils/showAlert";
import api from "../../api/auth";

export const userLogin = async (payload) => {
  try {
    const res = await api.userLogin(payload);
    return res.data.token
  } catch (err) {
    showAlert("Login error", err.response.data.message);
  }
};
