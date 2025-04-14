import React from 'react';
import { Article } from '../utils/types';
import NewsCard from './NewsCard';

interface NewsFeedProps {
    articles: Article[];
}
// The NewsFeed component receives an array of Article objects and renders them in a grid.
function NewsFeed({ articles }: NewsFeedProps) {
    // PART 3: Populate a news feed with the given `articles`

    // Now that you've implemented a reusable NewsCard in Part 2, you can use that to build out
    // the news feed underneath the FeaturedNews section.

    // Hint: Array.map() may be useful here: https://www.geeksforgeeks.org/typescript-array-map-method/

    return (
        <div className="stories-container">
            <div className="stories-grid">
                {articles.map((article, i) => (
                    <NewsCard
                        key={`${article}_${i}`}
                        article={article}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsFeed;
