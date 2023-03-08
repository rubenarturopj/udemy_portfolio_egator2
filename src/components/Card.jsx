import "./card.css";

export function Card({ children, className, onClick }) {
    return (
        <>
            <article className={`card ${className}`} onClick={onClick}>
                {children}
            </article>
        </>
    );
}

export default Card;
