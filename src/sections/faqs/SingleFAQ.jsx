import Card from "../../components/Card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

export function SingleFAQ({ question }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <>
            <Card
                className="faq"
                onClick={() => setShowAnswer((prev) => !prev)}
            >
                <div>
                    <h5 className="faq__question">{question.question}</h5>
                    <button className="faq__icon">
                        {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </div>
                {/* alternate from to write the same line */}
                {/* {showAnswer ? (<p className="faq__answer">{question.answer}</p>) : null}  */}
                {showAnswer && <p className="faq__answer">{question.answer}</p>}
            </Card>
        </>
    );
}

export default SingleFAQ;
