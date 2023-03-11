import axios from './axios';

class Auth {
  async login(email, password) {
    const response = await axios.post('/auth/login', { email, password });
    localStorage.setItem('accessToken', response.data.access_token);
  }

  async register(user) {
    const userData = {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password: user.password,
      password_confirmation: user.password,
      adult_agree: user.isAdult,
      terms_agree: user.termsAgree,
    };

    await axios.post('/auth/register', userData);
  }

  async logout() {
    await axios.post('/auth/logout');
    localStorage.removeItem('accessToken');
  }

  async me() {
    const response = await axios.get('/api/me');

    return {
      id: response.data.data.id,
      email: response.data.data.email,
      firstName: response.data.data.first_name,
      lastName: response.data.data.last_name,
    };
  }

  refresh() {}
}

export default new Auth();
