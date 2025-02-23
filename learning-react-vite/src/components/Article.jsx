import { Link } from 'react-router-dom';
import '../styles/Article.css'

export default function Article (props) {
    return (
        <>
            <div className="article">
                <img src={props.image} alt={props.title} />
                <div className="article-text">
                    <p className="article-author">By {props.name}</p>
                    <Link className="article-link">{props.title}</Link>
                    <p>{props.article}</p>
                </div>
            </div>
        </>
    );
}