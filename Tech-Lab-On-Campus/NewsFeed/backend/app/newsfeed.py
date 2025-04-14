"""Module for retrieving newsfeed information."""

from dataclasses import dataclass
from datetime import datetime
import json
import app.utils.redis as redis


@dataclass
class Article:
    """Dataclass for an article."""

    author: str
    title: str
    body: str
    publish_date: datetime
    image_url: str
    url: str


def _format(article) -> Article:
    format_article = Article(author=article["author"],
                            title=article["title"],
                            body=article["text"],
                            publish_date=datetime.fromisoformat(article["published"]),
                            image_url=article["thread"]["main_image"],
                            url=article["url"])
    return format_article


def get_all_news() -> list[Article]:
    """Get all news articles from the datastore."""
    # 1. Use Redis client to fetch all articles 2. Format the data into articles 3. Return a list of the articles formatted 
    all_articles = redis.REDIS_CLIENT.get_entry("all_articles")
    all_news = []
    for article in all_articles:
        formatted_article_json = _format(article)
        all_news.append(formatted_article_json)
    return all_news



def get_featured_news() -> Article | None:
    """Get the featured news article from the datastore."""
    # 1. Get all the articles
    # 2. Return as a list of articles sorted by most recent date
    all_articles = get_all_news()
    return sorted(all_articles, key=lambda article: article.publish_date)[-1]

