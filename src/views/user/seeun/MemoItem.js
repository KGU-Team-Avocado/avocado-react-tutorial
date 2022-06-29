import { useState } from "react";

const MemoItem = ({onDelete, id, memo, created_date}) => {

    const [isEdit, setIsEdit] = useState(false);    //수정중인지 아닌지 확인
    const toggleIsEdit = () => setIsEdit(!isEdit);  //isEdit 상태를 전환

    return (
        <div className="MemoItem">
            <div className="info">
                <span>
                    작성일 :  
                </span>
                <span className="date"> {new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="memo">{isEdit ? <><textarea/></> : <>{memo}</>}</div>
            <button onClick={() => {
                onDelete(id);
            }}>삭제</button>
            <button onClick={toggleIsEdit}>수정</button>
        </div>
    );
};

export default MemoItem;