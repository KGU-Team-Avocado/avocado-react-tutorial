import { useEffect, useState } from "react";

const MemoInput = ({ createMemo, memoId, memo }) => {
    const [memoTitle, setMemoTitle] = useState('');
    const [memoContent, setMemoContent] = useState('');

    useEffect(() => {
        setMemoTitle(memo.title);
        setMemoContent(memo.content);
    },[memo])

    const saveMemo = () => {
        const newMemo = { id: memoId, title: memoTitle, content: memoContent };
        console.log(newMemo)
        setMemoTitle('');
        setMemoContent('');
        createMemo(newMemo);
    }

    return (
        <>
            <div className="modal fade" id="writeMemoModal" tabIndex="-1" aria-labelledby="writeMemoModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="writeMemoModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="mb-3">
                                    <label className="form-label">제목</label>
                                    <input type="text" className="form-control" value={memoTitle} onChange={(e) => setMemoTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">내용</label>
                                    <textarea className="form-control" style={{ height: "400px" }} value={memoContent} onChange={(e) => setMemoContent(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button className="btn btn-primary" onClick={saveMemo} data-bs-dismiss="modal">저장</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  MemoInput;