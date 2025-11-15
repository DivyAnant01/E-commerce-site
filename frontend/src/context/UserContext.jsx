import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react';
import { authDataContext } from './authContext';
import axios from 'axios'

export const userDataContext = createContext()
function UserContext({ childern }) {

    let [userData, setUserData] = useState("");
    let { serverUrl } = useContext(authDataContext)

    const getCurrentUser = async () => {
        try {

            let result = await axios.post(serverUrl + "/api/user/getcurrentuser", { withCredential: true });
            setUserData(result.data)

        } catch (error) {
            setUserData(null)
            console.log(error)
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    let value = {
        userData,setUserData,getCurrentUser
    }


    return (
        <div>
            <userDataContext.Provider value={value}>
                {childern}
            </userDataContext.Provider>
        </div>
    )
}


export default UserContext