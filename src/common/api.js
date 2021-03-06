import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { API_URL } from './config'

Vue.use(VueAxios, axios)
const instance = Vue.axios.create({
  baseURL: '',
  timeout: 1000
})
instance.defaults.headers.get['Content-Type'] = 'application/json'
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
instance.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'

const apiService = {
  // Fetch data from api
  // resource: data category
  // category: child route from baseURL
  async getData (resource, params) {
    try {
      return await instance.get(resource, params)
    } catch (err) {
      throw new Error(err)
    }
  },
  // Push new data into db file
  // resource: data category
  // data: new data which will be pushed into db
  async postData (resource, data) {
    try {
      return await instance.post(resource, data)
    } catch (err) {
      throw new Error(err)
    }
  },
  // Replace data from db
  // resource: data category
  // id: data id
  async replaceData (resource, payload) {
    try {
      return await instance.put(resource, payload)
    } catch (err) {
      throw new Error(err)
    }
  },
  // Update data from db
  // resource: data category
  async updateData (resource, payload) {
    try {
      return await instance.patch(resource, payload)
    } catch (err) {
      throw new Error(err)
    }
  },
  // Delete data from db
  // resource: data category
  async deleteData (resource, payload) {
    try {
      return await instance.delete(resource, {
        data: `${payload}`
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default apiService
