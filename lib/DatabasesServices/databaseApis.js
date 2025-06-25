import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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

export const AddProducts = async(prodName , prodPrice , prodCategory , prodQuantity) => {
    try {
      await addDoc(collection(db , "Products" ) ,  {
        productName : prodName,
        productPrice : prodPrice,
        productCategory : prodCategory,
        productQuantity : prodQuantity,
        

      })
    } catch (error) {
      console.log(error)
    }
}


export const addingProductToUser = async (prodName, prodPrice, prodCategory, prodQuantity, id) => {
  try {
    await updateDoc(doc(db, "Users", id), {
      products: arrayUnion({
        productName: prodName,
        productPrice: prodPrice,
        productCategory: prodCategory,
        productQuantity: prodQuantity,
      }),
    });
    console.log("✅ Product added to user");
  } catch (error) {
    console.error("❌ Error updating user:", error.message);
  }
};