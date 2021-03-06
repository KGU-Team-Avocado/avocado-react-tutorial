import "../../../../views/user/Soyoung/Soyoung.css"
const InputContent = ({ isRead, memoContent, handleContentChange }) => {
    return (
        <div className="mb-3">
            <label className="form-label">내용</label>
            { isRead 
            ? 
            <textarea className="form-control content-area" value={memoContent} readOnly={true} disabled={true} /> 
            : 
            <textarea className="form-control content-area" value={memoContent} onChange={(e) => handleContentChange(e.target.value)} /> }
        </div>
    )
}

export default InputContent;