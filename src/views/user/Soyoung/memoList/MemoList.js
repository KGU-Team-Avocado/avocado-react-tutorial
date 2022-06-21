import MemoCard from "../../../../components/user/Soyoung/MemoCard";

const MemoList = ({ memoList, deleteMemo }) => {
    return (
        <div className="col-md-6 row" >
            <h2 className="mb-4">memoList</h2>
            {memoList.map((memo) => (
                <MemoCard memo={memo} deleteMemo={deleteMemo} />
            ))}
        </div>
    )
}

export default MemoList;