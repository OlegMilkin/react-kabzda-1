import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'bfad1697-8f63-40c0-990f-d2c44784401c'
  }
});

export const usersAPI = {
  getUsers(itemsPerPage = 10, currentPage = 1) {
    return instance.get(`users?count=${itemsPerPage}&page=${currentPage}`)
      .then(response => response.data)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data)
  },
  follow(id) {
    return instance.post(`follow/${id}`, {})
      .then(response => response.data)
  }
}

export const profileAPI = {
  getUserProfile(paramsId) {
    return instance.get(`profile/${paramsId}`)
      .then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(response => response.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {
      status: status
    })
      .then(response => response.data)
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append("image", file)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export const authAPI = {
  getUserData() {
    return instance.get('auth/me').then(response => response.data)
  },
  loginUser(email, password, rememberMe = false) {
    return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data)
  },
  logout() {
    return instance.delete('auth/login')
  }
}