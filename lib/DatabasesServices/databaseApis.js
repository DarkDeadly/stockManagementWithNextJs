import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/db";





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


export const deleteProduct = async(prodId) => {
try {
    await deleteDoc(doc(db , "Products" , prodId))
    console.log("Deleted Successfuly")
} catch (error) {
  console.log(error)
}  
}

export const deleteUserProduct = async (prodId, userId) => {
  try {
    const userRef = doc(db, "Users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) throw new Error("User not found");

    const userData = userSnap.data();
    const currentProducts = userData.products || [];

    const updatedProducts = currentProducts.filter(
      (product) => product.productId !== prodId
    );

    await updateDoc(userRef, {
      products: updatedProducts,
    });

    console.log(`✅ Deleted product ${prodId} from user's array.`);
    return true;
  } catch (error) {
    console.error("❌ Failed to delete product:", error.message);
    return false;
  }
};