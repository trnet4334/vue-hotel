import { db } from './firebase'
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

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
  },

  // Subscribe to newsletter (deduplicated by email)
  async subscribeNewsletter (email) {
    try {
      const q = query(collection(db, 'newsletters'), where('email', '==', email))
      const snapshot = await getDocs(q)
      if (!snapshot.empty) return { success: false, duplicate: true }
      await addDoc(collection(db, 'newsletters'), { email, subscribedAt: serverTimestamp() })
      return { success: true, duplicate: false }
    } catch (err) {
      console.error('[firebaseApi] subscribeNewsletter error:', err)
      return { success: false, duplicate: false, error: err }
    }
  },

  // Submit a contact enquiry; returns { success, refId, error }
  async submitContact (payload) {
    try {
      const datePart = dayjs().format('YYYYMMDD')
      const refId = `CNT-${datePart}-${nanoid(6).toUpperCase()}`
      await setDoc(doc(db, 'contacts', refId), {
        ...payload,
        refId,
        createdAt: serverTimestamp()
      })
      return { success: true, refId }
    } catch (err) {
      console.error('[firebaseApi] submitContact error:', err)
      return { success: false, error: err }
    }
  },

  // Submit a wedding request; returns { success, orderId, error }
  async submitWeddingRequest (payload) {
    const datePart = dayjs().format('YYYYMMDD')
    const tryWrite = async () => {
      const orderId = `WED-${datePart}-${nanoid(6).toUpperCase()}`
      await setDoc(doc(db, 'wedding_requests', orderId), {
        ...payload,
        orderId,
        createdAt: serverTimestamp()
      })
      return orderId
    }
    try {
      const orderId = await tryWrite()
      return { success: true, orderId }
    } catch (firstErr) {
      // Retry once on collision or transient error
      try {
        const orderId = await tryWrite()
        return { success: true, orderId }
      } catch (err) {
        console.error('[firebaseApi] submitWeddingRequest error:', err)
        return { success: false, error: err }
      }
    }
  }
}

export default firebaseApi
