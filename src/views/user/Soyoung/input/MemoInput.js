import { useState } from "react";

const MemoInput = ({ createMemo, memoId }) => {
    const [memoTitle, setMemoTitle] = useState('');
    const [memoContent, setMemoContent] = useState('');

    const saveMemo = () => {
        const memo = {id: memoId, title: memoTitle, content: memoContent};
        setMemoTitle('');
        setMemoContent('');
        createMemo(memo);
    }

    return (
        <div className="col-md-6 mt-3">
            <div class="mb-3">
                <label class="form-label">제목</label>
                <input type="text" class="form-control" value={memoTitle} onChange={(e) => setMemoTitle(e.target.value)} />
            </div>
            <div class="mb-3">
                <label class="form-label">내용</label>
                <textarea class="form-control" style={{height: "400px"}} value={memoContent} onChange={(e) => setMemoContent(e.target.value)} />
            </div>
            <button class="btn btn-success" onClick={saveMemo}>저장</button>
        </div>
    )
}

export default  MemoInput;