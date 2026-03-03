import { db } from './firebase'
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'

const firebaseApi = {
  // Fetch all matched members data from api
  async getMembersData (resource, params) {
    try {
      const q = query(collection(db, resource), where('email', '==', params))
      const snapshot = await getDocs(q)
      return !snapshot.empty
    } catch (err) {
      console.error('[firebaseApi] getMembersData error:', err)
      return false
    }
  },

  // Fetch matched reserved stay data id from api
  async getReservedStayData (resource, params) {
    try {
      const q = query(
        collection(db, resource),
        where('email', '==', params.email),
        where('confirmationNum', '==', params.reservationNum),
        where('lastName', '==', params.lastName)
      )
      const snapshot = await getDocs(q)
      if (snapshot.empty) return {}

      const docId = snapshot.docs[0].id
      const petSnapshot = await getDocs(collection(db, resource, docId, 'petRegistration'))
      return { id: docId, isRegistered: !petSnapshot.empty }
    } catch (err) {
      console.error('[firebaseApi] getReservedStayData error:', err)
      return {}
    }
  },

  // Fetch all matched reservation data from api
  async getReservedData (resource, params) {
    try {
      const q = query(
        collection(db, resource),
        where('email', '==', params.email),
        where('lastName', '==', params.lastName)
      )
      const snapshot = await getDocs(q)
      if (snapshot.empty) return []
      return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    } catch (err) {
      console.error('[firebaseApi] getReservedData error:', err)
      return []
    }
  },

  // Push new data into db
  async postData (resource, data) {
    try {
      await addDoc(collection(db, resource), data)
    } catch (err) {
      console.error('[firebaseApi] postData error:', err)
    }
  },

  // Push pet registration data into reservation doc
  async postPetRegistrationData (resource, data) {
    try {
      await addDoc(collection(db, 'reservationList', data.id, resource), data.form)
    } catch (err) {
      console.error('[firebaseApi] postPetRegistrationData error:', err)
    }
  },

  // Update reservation status
  async updateData (resource, payload) {
    try {
      await updateDoc(doc(db, resource, payload.id), {
        status: payload.status,
        lastUpdateTime: payload.lastUpdateTime
      })
    } catch (err) {
      console.error('[firebaseApi] updateData error:', err)
    }
  },

  // Delete a document
  async deleteData (resource, payload) {
    try {
      await deleteDoc(doc(db, resource, payload.id))
    } catch (err) {
      console.error('[firebaseApi] deleteData error:', err)
    }
  }
}

export default firebaseApi
