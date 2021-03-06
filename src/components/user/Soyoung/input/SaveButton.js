const SaveButton = ({ isRead, memo_id, saveMemo, handleModify }) => {
    return (
        <>
            {
                isRead ?
                    null
                    :
                    (memo_id === -1
                        ?
                        <button className="btn btn-success" onClick={saveMemo} data-bs-dismiss="modal">저장</button>
                        :
                        <button className="btn btn-warning" onClick={handleModify} data-bs-dismiss="modal">수정</button>)
            }
        </>
    )
}

export default SaveButton;