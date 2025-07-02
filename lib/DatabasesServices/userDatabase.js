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
      username :username ,
      email : email, 
    });
    console.log("✅ User updated successfully");
    return true;
  } catch (error) {
    console.error("❌ Failed to update user:", error.message);
    return false;
  }
};

export const handleGoogleSignIn = async (user) => {
  if (!user) return;

  const userRef = doc(db, "Users", user.uid);
  const userSnap = await getDoc(userRef);

  const userData = {
    email: user.email,
    username: user.displayName || "",
    role: "user",
    profileimg: user.photoURL || "",
  };

  await setDoc(userRef, userData, { merge: true });
};

export const GetUsers = (callback) => {
  const unsubscribe = onSnapshot(collection(db, "Users"), (snapshot) => {
    const usersData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(usersData); 
  });

  return unsubscribe; 
};