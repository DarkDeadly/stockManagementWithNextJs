import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/db";

const defaultProfile = "/profile.svg";

export const AddUser = async (uid, username, email, role = "user", profileImg = defaultProfile) => {
  try {
    await setDoc(doc(db, "Users", uid), {
      username: username || "defaultUsername",
      email,
      profileimg: profileImg,
      role,
    });
  } catch (error) {
    console.error("❌ Firestore error:", error.message);
  }
};

export const GetUser = async (id) => {
    try {
        const userData = await getDoc(doc(db , "Users" , id))
        if (userData.exists()) {
            return userData.data() 
        }
        return null
    } catch (error) {
            console.error("❌ Firestore error:", error.message);

    }
}