import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import dotenv from 'dotenv'

import {NewsCards} from './components/'

dotenv.config()


const alanKey = process.env.REACT_APP_ALAN_KEY

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if( command === 'newHeadLines') {
                    setNewsArticles(articles)
                }
            }
        })
    }, [])

    return (
        <div>
            <h1>AI News Application made by Shawn Humphreys</h1>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App