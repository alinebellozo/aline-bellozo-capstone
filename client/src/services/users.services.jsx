import { db } from "../firebase-config";

import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const usersCollectionRef = collection(db, "users");
class UsersDataService {
  addUsers = (newUser) => {
    return addDoc(usersCollectionRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(usersCollectionRef);
  };

  getUser = (id) => {
    const userDoc = (db, "users", id);
    return getDoc(userDoc);
  };
}

export default new UsersDataService();
