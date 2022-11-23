// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: 'AIzaSyC4rxusnK-MmCJbmVBYORetwPy8n4d-if0',
  authDomain: 'project-ms-29297.firebaseapp.com',
  projectId: 'project-ms-29297',
  storageBucket: 'project-ms-29297.appspot.com',
  messagingSenderId: '539422319990',
  appId: '1:539422319990:web:adfd942082953c68470657',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

export async function uploadFile(
  file: File,
  updateCb: (snapshot: UploadTaskSnapshot) => void = () => false
): Promise<string> {
  const path = `products/${v4()}`
  const storageRef = ref(storage, path)
  const uploadTask = uploadBytesResumable(storageRef, file)
  return new Promise((res, rej) => {
    return uploadTask.on(
      'state_changed',
      updateCb,
      () => rej(null),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
          res(downloadURL)
        })
      }
    )
  })
}
