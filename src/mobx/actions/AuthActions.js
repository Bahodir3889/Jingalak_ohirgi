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

export const userRegister = async (payload) => {
  try {
    const res = await api.userRegister(payload);
    return res.data
  } catch (err) {
    showAlert("Register error", err.response.data.message);
  }
};
