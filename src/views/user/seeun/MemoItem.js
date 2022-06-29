import { useRef, useState } from "react";

const MemoItem = ({onEdit, onDelete, id, memo, created_date}) => {

    const localContentInput = useRef();

    const [isEdit, setIsEdit] = useState(false);    //수정중인지 아닌지 확인
    const toggleIsEdit = () => setIsEdit(!isEdit);  //isEdit 상태를 전환
    const [localContent, setLocalContent] = useState(memo);

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(memo);
    }

    const handleEdit = () => {
        if(localContent.length < 5){
            localContentInput.current.focus();
            return;
        }
        onEdit(id, localContent);
        toggleIsEdit();
    }

    return (
        <div className="MemoItem">
            <div className="info">
                <span>
                    작성일 :  
                </span>
                <span className="date"> {new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="memo">{isEdit ? <>
            <textarea
                ref={localContentInput}
                value={localContent}
                onChange={(e)=> setLocalContent(e.target.value)}/>
            </> : 
            <>{memo}</>}</div>

            {isEdit ? <>
                <button onClick={handleQuitEdit}>수정취소</button>
                <button onClick={handleEdit}>수정완료</button></> 
            : <>
             <button onClick={() => {
                onDelete(id);
            }}>삭제</button>
            <button onClick={toggleIsEdit}>수정</button>
            </>}
        </div>
    );
};

export default MemoItem;