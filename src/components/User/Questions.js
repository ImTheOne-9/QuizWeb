import _ from 'lodash';
const Questions = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return <div>No data found</div>
    }
    return (
        <>
            {data?.image &&
                <div className='q-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`} alt="question-image" />
                </div>
            }
            <div className="question">Question {index + 1}: {data.description}</div>
            <div className="answers">
                {data.answers.map((a, index) => {
                    return (
                        <div
                            key={`answer-${index}`}
                            className="a-child">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label">
                                    {a.description}
                                </label>
                            </div>

                        </div>
                    )
                })}
            </div >

        </>
    )
}

export default Questions;