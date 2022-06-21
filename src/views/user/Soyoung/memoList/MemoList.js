import MemoCard from "../../../../components/user/Soyoung/MemoCard";

const MemoList = ({ memoList }) => {
    return (
        <div className="col-md-6 row" >
            <h2 className="mb-4">memoList</h2>
            {memoList.map((memo) => (
                <MemoCard memo={memo} />
            ))}
        </div>
    )
}

export default MemoList;