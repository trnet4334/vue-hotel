import { db } from './firebase'
import * as _ from 'lodash'

const firebaseApi = {
  // Fetch data from api
  // resource: data category
  // category: child route from baseURL
  async getData (resource, params) {
    const _temp = []
    const ref = db.collection(resource)
      .where('email', '==', params.email)
      .where('lastName', '==', params.lastName)
    await ref.get()
      .then((querySnapshot) => {
        if (_.isEmpty(querySnapshot)) {
          console.log('No data')
        } else {
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            Object.assign(data, { id: doc.id })
            _temp.push(data)
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    return _temp
  },
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
  async updateData (resource, payload) {
    console.log(payload)
    const ref = db.collection(resource).doc(payload.id)
    await ref.update({
      status: payload.status,
      lastUpdateTime: payload.lastUpdateTime
    })
      .then(() => { console.log('Successfully') })
      .catch((err) => { console.log(err) })
  },
  // Delete data from db
  // resource: data category
  async deleteData (resource, payload) {}
}

export default firebaseApi
