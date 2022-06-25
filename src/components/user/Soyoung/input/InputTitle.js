const InputTitle = ({ isRead, memoTitle, handleTitleChange }) => {
    return (
        <div className="mb-3">
            <label className="form-label">제목</label>
            { isRead 
            ? 
            <input type="text" className="form-control" value={memoTitle} readOnly={true} disabled={true} /> 
            : 
            <input type="text" className="form-control" value={memoTitle} onChange={(e) => handleTitleChange(e.target.value)} /> }
        </div>
    )
}

export default InputTitle;