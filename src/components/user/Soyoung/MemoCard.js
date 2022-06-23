import "./Card.css"

const MemoCard = ({ memo, deleteMemo, handleModify, handleRead }) => {
    return (
        <div className="col-lg-4 col-sm-6 mb-2">
            <div className="card card-hover">
                <div className="card-header text-truncate" data-bs-toggle="modal" data-bs-target="#writeMemoModal" onClick={handleRead}>
                    {memo.title}
                </div>
                <div className="card-body">
                    <p className="text-truncate" data-bs-toggle="modal" data-bs-target="#writeMemoModal" onClick={handleRead}>{memo.content}</p>
                    <div className="text-end">
                        <button type="button" className="btn btn-success me-2" onClick={handleModify} data-bs-toggle="modal" data-bs-target="#writeMemoModal">수정</button>
                        <button type="button" className="btn btn-danger" onClick={deleteMemo}>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemoCard;