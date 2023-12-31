import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/users/";
export default class UserService {
  getUserPhotoById = (id) => {
    return axios.get(API_URL + `${id}/get-profile-image`, {
      responseType: "blob",
      headers: authHeader(),
    });
  };

  uploadUserPhotoById = (id, formData) => {
    return axios.post(API_URL + `${id}/profile-image`, formData, {
      headers: {
        ...authHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
  };
}
