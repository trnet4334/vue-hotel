import { db } from './firebase'

const firebaseApi = {
  // Fetch data from api
  // resource: data category
  // category: child route from baseURL
  async getData (resource, params) {},
  // Push new data into db file
  // resource: data category
  // data: new data which will be pushed into db
  async postData (resource, data) {
    await db.collection(resource).add(data)
      .then(() => {
        console.log('Successfully submit')
      }).catch((e) => {
        console.log(e)
      })
  },
  // Replace data from db
  // resource: data category
  // id: data id
  async replaceData (resource, payload) {},
  // Update data from db
  // resource: data category
  async updateData (resource, payload) {},
  // Delete data from db
  // resource: data category
  async deleteData (resource, payload) {}
}

export default firebaseApi
