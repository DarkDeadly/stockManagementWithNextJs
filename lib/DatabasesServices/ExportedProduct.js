import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { db } from "../config/db"


export const AddExportData = async(name , userid) => {
    try {
        const dataRef = collection(db , 'ExportProducts') 
    await addDoc(dataRef , {
        exportname : name ,
        user : userid,
        createdAt: new Date()
    })
        console.log("✅ Export data added");

    } catch (error) {
        console.log(error)
    }
}