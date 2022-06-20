import { useState } from "react";

const MemoInput = ({ createMemo }) => {
    const [memoTitle, setMemoTitle] = useState('');
    const [memoContent, setMemoContent] = useState('');

    const saveMemo = () => {
        const memo = {title: memoTitle, content: memoContent};
        setMemoTitle('');
        setMemoContent('');
        createMemo(memo);
    }

    return (
        <div className="col-6">
            <input value={memoTitle} onChange={(e) => setMemoTitle(e.target.value)} />
            <textarea value={memoContent} onChange={(e) => setMemoContent(e.target.value)} />
            <button onClick={saveMemo}>저장</button>
        </div>
    )
}

export default  MemoInput;