import { useParams, useLocation } from "react-router";
import { getDataQuiz } from "../../Services/apiService";
import { useEffect } from "react";
import _ from "lodash";
import "../User/DetailQuiz.scss"
const DetailQuiz = () => {
    const params = useParams();
    const location = useLocation();
    console.log(location);
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
            console.log('raw:', raw)
            console.log(data);
        }

    }

    useEffect(() => {
        fetchDataQuiz(quizId)
    }, [quizId])


    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.title}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">Question 1</div>
                    <div className="answers">A.aaaaaaaaa</div>
                    <div className="answers">A.aaaaaaaaa</div>
                    <div className="answers">A.aaaaaaaaa</div>
                    <div className="answers">A.aaaaaaaaa</div>
                </div>
                <div className="footer">
                    <button className="btn btn-primary">Next</button>
                    <button className="btn btn-secondary">Prev</button>
                </div>
            </div>
            <div className="right-content">
                aaaaaaaa
            </div>
        </div>
    );
}

export default DetailQuiz;