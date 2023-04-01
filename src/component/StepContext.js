import React, { useState } from 'react'
import Checkout from './Checkout';


export const muliStepContext = React.createContext();
const StepContext = () => {

    const [userData,setUserData] = useState([]);
    const [finalData,setFinalData] = useState([]);
  return (
    <div>
        <muliStepContext.Provider value={{userData,setUserData,finalData,setFinalData}}>
            <Checkout/>
        </muliStepContext.Provider>
    </div>
  )
}
export default StepContext; 