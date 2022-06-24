import { useState } from "react";
import { Accordion } from "react-bootstrap";

const MemoCard = (props) => {

    const addZero = (n) => {
        const num = n > 9 ? n : "0" + n;
        return num;
    }

    const convertDate = (d) => {
        let year = addZero(d.getFullYear());
        let month = addZero(d.getMonth() + 1);
        let date = addZero(d.getDate());
        return year + "-" + month + "-" + date;
    }

    const convertTime = (d) => {
        let hour = addZero(d.getHours());
        let minute = addZero(d.getMinutes());
        let second = addZero(d.getSeconds());
        return hour + ":" + minute + ":" + second;
    }

    const [text, setText] = useState(props.memo.text);

    const handleData = (state) => {
        setText(state.target.value);
    };

    return (
        <>
            <div className="list-group-item list-group-item-action py-3 lh-tight mb-2">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <div>
                        <strong className="me-2">{convertDate(props.memo.date)}</strong>
                        <small className="text-muted">{convertTime(props.memo.date)}</small>
                    </div>
                    <div>
                        <a href="#" onClick={() => props.deleteMemo(props.memo.key)}><strong className="text-danger"><i className="bi bi-trash"></i></strong></a>
                    </div>
                </div>
                <div className="row">
                    <Accordion defaultActiveKey={props.memo.key} flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{props.memo.text}</Accordion.Header>
                            <Accordion.Body>
                                <div className="row">
                                    {/* <strong>메모</strong> */}
                                    <textarea onChange={handleData} value={text} ></textarea>
                                    <button className="btn btn-warning my-2" onClick={()=>props.modifyMemo(props.memo.key, text)}>메모 수정하기</button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default MemoCard;