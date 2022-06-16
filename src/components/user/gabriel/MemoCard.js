const MemoCard = (props) => {
    return (
        <div className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
                <strong className="mb-1">{props.memo.date.toString()}</strong>
                <small className="text-muted">삭제하기</small>
            </div>
            <div className="col-10 mb-1 small">{props.memo.text}</div>
        </div>
    )
}

export default MemoCard;