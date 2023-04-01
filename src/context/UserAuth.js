import { createUserWithEmailAndPassword, onAuthStateChanged , signOut, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React,{createContext,useEffect,useState,useContext} from "react";
import { auth, db } from "../firebase";



export const AuthContext = createContext();
export const AuthProvider =({children})=>{
    const [user,setUser] = useState({});
    const [wh,setWh]=useState({
        weight:"",
        height:""
    });

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const takeWh=(name,weight,height)=>{
            setWh({
                name:name,
                weight:weight,
                height:height
            })
               
                    
    }

    const uData= (email,weight,height,legs,back,chest,shoulder,trainingDayes,trainingExperience)=>{
        const adduser = doc(db,"userData" , email);
        setDoc(adduser,{
          email:email,
          weight:weight,
          height:height,
          legs: legs,
          back: back,
          chest: chest,
          shoulder:shoulder,
          trainingDayes:trainingDayes,
          trainingExperience:trainingExperience
          
        });
      }

    const logout = () =>{
       return signOut(auth)
    }

    const signin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
     }
        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                console.log(currentUser);
                setUser(currentUser);
            })
                return ()=>{
                    unsubscribe();
                }
        },[])

    return(
        <AuthContext.Provider value={{createUser , user, logout, signin,uData,takeWh,wh}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext)
}