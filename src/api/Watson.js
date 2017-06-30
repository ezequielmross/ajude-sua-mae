import axios from 'axios'

axios.defaults.baseURL = `https://ajude-sua-mae.herokuapp.com/`
axios.defaults.headers.common['Content-Type'] = 'application/json'

export default {
  sendMessage (message) {
    return axios.post('message/', {
      input: {
        text: message
      }
    })
  }
}
