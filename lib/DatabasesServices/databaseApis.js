import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
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
     const docref = await addDoc(collection(db , "Products" ) ,  {
        productName : prodName,
        productPrice : prodPrice,
        productCategory : prodCategory,
        productQuantity : prodQuantity,
        

      })

      return docref.id
    } catch (error) {
      console.log(error)
    }
}


export const addingProductToUser = async (prodName, prodPrice, prodCategory, prodQuantity, Userid , productId)  => {
  try {
    await updateDoc(doc(db, "Users", Userid), {
      products: arrayUnion({
        productId,
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



export const gettingProducts = (callback) => {
  const unsubscribe = onSnapshot(collection(db, "Products"), (snapshot) => {
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(products);
  });

  return unsubscribe; 
};

export const updateProductQuantity = async(ProdQuantity , ProdId) => {
  try {
    await updateDoc(doc(db , "Products" , ProdId), 
  {
    productQuantity : ProdQuantity
  })
  } catch (error) {
    console.log(error);
    
  }
}
export const UpdateUserProduct = async (userId, productId, newQuantity) => {
  try {
    const userRef = doc(db, "Users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) throw new Error("User not found");

    const userData = userSnap.data();
    const updatedProducts = userData.products.map((product) =>
      product.productId === productId
        ? { ...product, productQuantity: String(newQuantity) }
        : product
    );

    await updateDoc(userRef, { products: updatedProducts });

    console.log("✅ User product quantity updated");
  } catch (error) {
    console.error("❌ Error updating user product:", error.message);
  }
};