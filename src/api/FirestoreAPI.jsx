import { auth, firestore } from "../firebaseConfig";
import {addDoc,collection,onSnapshot}from 'firebase/firestore'
import { toast } from "react-toastify";



let dbref = collection(firestore,"posts")

export const postStatus = (object) => {
   addDoc(dbRef,object)
      .then((res)=>{
        Toast.success('Document hasw been addded successfully')
      })
      .catch((err)=>{
          console.log(err);
      });

      
};
export const getStatus =() =>{
onSnapshot(dbref,(Response)=>{
    console.log(Response.docs,Map((docs)=>{
        return {...docs.data(),id:docs.id};
    }))
})
}




