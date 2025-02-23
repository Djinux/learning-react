import '../styles/Feature.css'

export default function Feature (props) {
    return (
        <>
            <div className="feature" key={props.id} className="feature">
                <img src={props.image} alt={props.title} />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <hr />
            </div>         
        </>
    );
}