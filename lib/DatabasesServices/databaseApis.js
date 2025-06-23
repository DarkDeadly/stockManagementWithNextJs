import { collection, doc, setDoc } from "firebase/firestore"
import { db } from "../config/db"
import profile from "../../public/profile.svg"
export const AddUser = async(username , email , role = "user" , Profile) => {
        const UserDocumentRef = doc(collection(db,"Users"))
        try {
            const addingUser = await setDoc(UserDocumentRef , {
                username : username || "defaultUsername" ,
                email : email,
                profileimg : Profile || profile,
                role : role
                
            })
            if (addingUser) {
                console.log("successfuly added to database");
                
            }
        } catch (error) {
          console.log(error.code);
            
        }
}