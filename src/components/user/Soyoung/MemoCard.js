const MemoCard = ({ memo, deleteMemo }) => {
    const clickDelete = () => {
        deleteMemo(memo.id);
    }
    return (
        <div class="col-md-6">
            <div class="card" key={memo.id}>
                <div class="card-header">
                    {memo.title}
                </div>
                <div class="card-body">
                    <p>{memo.content}</p>
                    <div class="text-end">
                        <button type="button" class="btn btn-success me-2">수정</button>
                        <button type="button" class="btn btn-danger" onClick={clickDelete}>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemoCard;