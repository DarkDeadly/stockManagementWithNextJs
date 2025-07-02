import { addDoc, collection, doc, onSnapshot, setDoc } from "firebase/firestore"
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


export const GetExportedDatas = (callback) => {
    const data =  onSnapshot(collection(db , "ExportProducts"),(snapshot) => {
        const exports = snapshot.docs.map(doc => ({
            id : doc.id , 
            ...doc.data()
        }))
        callback(exports)
    } )
    return data 
}