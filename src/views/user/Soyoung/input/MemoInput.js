import { useEffect, useState } from "react";
import InputTitle from "../../../../components/user/Soyoung/input/InputTitle";

const MemoInput = ({ createMemo, modifyMemo, handleClose, memoId, memo, isRead }) => {
    const [memoTitle, setMemoTitle] = useState('');
    const [memoContent, setMemoContent] = useState('');

    useEffect(() => {
        setMemoTitle(memo.title);
        setMemoContent(memo.content);
    },[memo])

    const saveMemo = () => {
        const newMemo = { id: memoId, title: memoTitle, content: memoContent };
        setMemoTitle('');
        setMemoContent('');
        createMemo(newMemo);
    }

    const handleModify = () => {
        const newMemo = { id: memo.id, title: memoTitle, content: memoContent };
        setMemoTitle('');
        setMemoContent('');
        modifyMemo(newMemo);
    }

    const restore = () => {
        const newMemo = { id: -1, title: "", content: "" };
        setMemoTitle('');
        setMemoContent('');
        handleClose(newMemo)
    }

    const handleTitleChange = (title) => {
        setMemoTitle(title);
    }

    return (
        <>
            <div className="modal fade" id="writeMemoModal" tabIndex="-1" aria-labelledby="writeMemoModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="writeMemoModalLabel">MEMO</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={restore}></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <InputTitle isRead={isRead} memoTitle={memoTitle} handleTitleChange={handleTitleChange} />
                                <div className="mb-3">
                                    <label className="form-label">내용</label>
                                    { isRead ? <textarea className="form-control" style={{ height: "400px", backgroundColor:"white" }} value={memoContent} readOnly={true} disabled={true} /> : <textarea className="form-control" style={{ height: "400px" }} value={memoContent} onChange={(e) => setMemoContent(e.target.value)} /> }
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={restore}>Close</button>
                            {isRead ? 
                            null
                            :
                            (memo.id === -1
                                ?
                                <button className="btn btn-primary" onClick={saveMemo} data-bs-dismiss="modal">저장</button>
                                :
                                <button className="btn btn-primary" onClick={handleModify} data-bs-dismiss="modal">수정</button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  MemoInput;