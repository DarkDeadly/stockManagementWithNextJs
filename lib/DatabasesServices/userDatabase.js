import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/db";
import { updateEmail } from "firebase/auth";

const defaultProfile = "https://www.flaticon.com/free-icon/account_9458848";

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

export const UpdateUser = async (id, username, email) => {
  try {
    await updateEmail(auth.currentUser, email);
    await updateDoc(doc(db, "Users", id), {
      username,
      email, 
    });
    console.log("✅ User updated successfully");
    return true;
  } catch (error) {
    console.error("❌ Failed to update user:", error.message);
    return false;
  }
};