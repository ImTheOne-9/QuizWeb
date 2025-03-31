import { useParams, useLocation } from "react-router";
import { getDataQuiz } from "../../Services/apiService";
import { useEffect, useState } from "react";
import _ from "lodash";
import "../User/DetailQuiz.scss"
import Questions from "./Questions";
const DetailQuiz = () => {
    const params = useParams();
    const location = useLocation();

    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const quizId = params.id;

    const fetchDataQuiz = async (id) => {
        const res = await getDataQuiz(id)
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    console.log('key:', key, 'value:', value)
                    let answers = []
                    let description, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            description = item.description;
                            image = item.image;;
                        }
                        answers.push(item.answers)
                    })
                    return { id: key, answers, description, image }
                })
                .value()
            console.log(data)
            setQuizData(data)

        }

    }
    console.log('data:', quizData)
    useEffect(() => {
        fetchDataQuiz(quizId)
    }, [quizId])

    const handleNext = () => {
        setCurrentQuestion(prev => (quizData?.length ? Math.min(prev + 1, quizData.length - 1) : prev))
    }
    const handlePrev = () => {
        setCurrentQuestion(prev => (quizData?.length ? Math.max(prev - 1, 0) : prev))
    }
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.title}
                </div>
                <hr />
                <div className="q-content">
                    <Questions
                        index={currentQuestion}
                        data={quizData && quizData.length > 0 ? quizData[currentQuestion] : []} />
                </div>
                <div className="footer">
                    <button
                        className="btn btn-secondary"
                        onClick={() => { handlePrev() }}>
                        Prev
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => { handleNext() }}>
                        Next
                    </button>

                </div>
            </div>
            <div className="right-content">
                aaaaaaaa
            </div>
        </div>
    );
}

export default DetailQuiz;