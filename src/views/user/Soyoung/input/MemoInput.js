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
        <div className="col-md-6">
            <input value={memoTitle} onChange={(e) => setMemoTitle(e.target.value)} />
            <textarea value={memoContent} onChange={(e) => setMemoContent(e.target.value)} />
            <button onClick={saveMemo}>저장</button>
        </div>
    )
}

export default  MemoInput;