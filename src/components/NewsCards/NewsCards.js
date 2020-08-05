import React from 'react'

import {NewsCard} from '../NewsCard/NewsCard'

export const NewsCards = ({ articles }) => {
    return (
        <div>
            {articles.map((article, i) => (
                <NewsCard />
            ))}
        </div>
    )
}
