import { useState } from "react";

const MemoInput = ({ createMemo, memoId }) => {
    const [memoTitle, setMemoTitle] = useState('');
    const [memoContent, setMemoContent] = useState('');

    const saveMemo = () => {
        const memo = { id: memoId, title: memoTitle, content: memoContent };
        setMemoTitle('');
        setMemoContent('');
        createMemo(memo);
    }

    return (
        <>
            <div class="modal fade" id="writeMemoModal" tabindex="-1" aria-labelledby="writeMemoModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="writeMemoModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <div class="mb-3">
                                    <label class="form-label">제목</label>
                                    <input type="text" class="form-control" value={memoTitle} onChange={(e) => setMemoTitle(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">내용</label>
                                    <textarea class="form-control" style={{ height: "400px" }} value={memoContent} onChange={(e) => setMemoContent(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button class="btn btn-primary" onClick={saveMemo} data-bs-dismiss="modal">저장</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  MemoInput;