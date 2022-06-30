const MemoCard = ({ memo, deleteMemo, handleModify, handleRead }) => {
    return (
        <div className="col-lg-4 col-sm-6 mb-2">
            <div className="card card-hover">
                <div className="card-header text-truncate" data-bs-toggle="modal" data-bs-target="#writeMemoModal" onClick={handleRead}>
                    {memo.title}
                </div>
                <div className="card-body">
                    <div>
                        <p className="text-truncate" data-bs-toggle="modal" data-bs-target="#writeMemoModal" onClick={handleRead}>{memo.content}</p>
                    </div>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-warning me-2" onClick={handleModify} data-bs-toggle="modal" data-bs-target="#writeMemoModal">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button type="button" className="btn btn-outline-danger" onClick={deleteMemo}>
                            <i class="bi bi-clipboard-x-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemoCard;