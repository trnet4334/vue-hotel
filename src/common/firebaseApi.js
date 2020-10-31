import { db } from './firebase'
import * as _ from 'lodash'

const firebaseApi = {
  // Fetch all matched members data from api
  // resource: data category
  // category: child route from baseURL
  async getMembersData (resource, params) {
    let _temp = true
    const ref = db.collection(resource)
      .where('email', '==', params)
    await ref.get()
      .then(querySnapshot => {
        _temp = !_.isEmpty(querySnapshot)
      }).catch(err => {
        console.log(err)
      })
    return _temp
  },
  // Fetch all matched reservation data from api
  // resource: data category
  // category: child route from baseURL
  async getReservedData (resource, params) {
    const _temp = []
    const ref = db.collection(resource)
      .where('email', '==', params.email)
      .where('lastName', '==', params.lastName)
    await ref.get()
      .then((querySnapshot) => {
        if (_.isEmpty(querySnapshot)) {
          // console.log('No data')
          return -1
        } else {
          querySnapshot.forEach((doc) => {
            _temp.push({ id: doc.id, ...doc.data() })
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
  // Update data from db
  // resource: data category
  async updateData (resource, payload) {
    const ref = db.collection(resource).doc(payload.id)
    await ref.update({
      status: payload.status,
      lastUpdateTime: payload.lastUpdateTime
    })
      .then(() => { console.log('') })
      .catch((err) => { console.log(err) })
  },
  // Delete data from db
  // resource: data category
  async deleteData (resource, payload) {}
}

export default firebaseApi
