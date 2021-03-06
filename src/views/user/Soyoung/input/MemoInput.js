import { useEffect, useState } from "react";
import InputContent from "../../../../components/user/Soyoung/input/InputContent";
import InputTitle from "../../../../components/user/Soyoung/input/InputTitle";
import SaveButton from "../../../../components/user/Soyoung/input/SaveButton";

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

    const handleContentChange = (content) => {
        setMemoContent(content);
    }

    return (
        <>
            <div className="modal fade" id="writeMemoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="writeMemoModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="writeMemoModalLabel">MEMO</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={restore}></button>
                        </div>

                        <div className="modal-body">
                            <InputTitle isRead={isRead} memoTitle={memoTitle} handleTitleChange={handleTitleChange} />
                            <InputContent isRead={isRead} memoContent={memoContent} handleContentChange={handleContentChange} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={restore}>Close</button>
                            <SaveButton isRead={isRead} memo_id={memo.id} saveMemo={saveMemo} handleModify={handleModify} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default  MemoInput;