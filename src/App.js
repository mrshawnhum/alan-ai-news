import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import dotenv from 'dotenv'

dotenv.config()


const alanKey = process.env.REACT_APP_ALAN_KEY

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command}) => {
                if( command === 'testCommand') {
                    alert('This code works!')
                }
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan AI News App made by Shawn Humphreys</h1>
        </div>
    )
}

export default App