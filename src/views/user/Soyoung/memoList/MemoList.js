const MemoList = ({ memoList }) => {
    return (
        <div className="col-6">
            {memoList.map((memo) => (
                <div key={memo.id}>
                    <h5>{memo.title}</h5>
                    <p>{memo.content}</p>
                </div>
            ))}
        </div>
    )
}

export default MemoList;