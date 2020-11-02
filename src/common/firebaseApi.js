import { db } from './firebase'

const firebaseApi = {
  // Fetch all matched members data from api
  // resource: data category
  // category: child route from baseURL
  async getMembersData (resource, params) {
    let _temp = false
    const ref = db.collection(resource)
      .where('email', '==', params)
    await ref.get()
      .then(querySnapshot => {
        _temp = !querySnapshot.empty
      }).catch(err => {
        console.log(err)
      })
    return _temp
  },
  // Fetch matched reserved stay data id from api
  // resource: data category
  // category: child route from baseURL
  async getReservedStayData (resource, params) {
    let isReserved, docId, isStayExist
    const ref = await db.collection(resource)
      .where('email', '==', params.email)
      .where('confirmationNum', '==', params.reservationNum)
      .where('lastName', '==', params.lastName)
    // Check if the stay exists through email, confirmation number and last name
    await ref.get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          isStayExist = false
        } else {
          isStayExist = true
          querySnapshot.forEach((doc) => {
            docId = doc.id
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    // Check if pet has been registered when the stay exists.
    if (isStayExist) {
      await db.collection(resource).doc(docId).collection('petRegistration')
        .get()
        .then((querySnapshot) => {
          isReserved = !querySnapshot.empty
        })
    }
    // Return reserve condition and id of document
    if (isReserved === true) {
      return { id: docId, isRegistered: isReserved }
    } else if (isReserved === false) {
      return { id: docId, isRegistered: isReserved }
    } else {
      return {}
    }
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
        if (querySnapshot.empty) {
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
  // Push pet registration data into reservation doc
  // resource: data category
  // data: new data which will be pushed into db
  async postPetRegistrationData (resource, data) {
    await db.collection('reservationList')
      .doc(data.id)
      .collection(resource)
      .add(data.form)
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
