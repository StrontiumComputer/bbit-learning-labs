import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function FeaturedNewsCard({ article }: NewsCardProps) {
    // PART 1: Display a Featured News article

    // Using the info about the article passed in as a prop, show:
    // 1. The featured article's title
    // 2. The featured article's image
    // 3. A portion of the selected article's body, truncated so that it fits nicely in the section

    // Once completing this part, you should be able to see the Featured News Article at the top of the page.

    // Hint: Some classes included in `globals.css` may help with styling.

    return (
        <>
            <div className="featured-news-card">
                <div className="featured-news-img-div">
                    <img
                        src={article.image_url}
                        alt={article.title}
                        className="featured-news-img" />
                </div>
                <div className="featured-news-info">
                    <h2 className="featured-story-title">{article.title}</h2>
                    <p className="featured-story-summary">{article.body}</p>
                    {article.author && <span className="featured-story-author">By {article.author}</span>}
                    {article.url &&
                        <span className="featured-story-author" >
                            Via <Link className="origin-link" href={article.url} target="_blank">{article.url}</Link>
                        </span>
                    }
                </div>
            </div>
        </>
    );
}

export default FeaturedNewsCard;
