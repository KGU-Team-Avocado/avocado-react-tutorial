import MemoCard from "../../../../components/user/Soyoung/MemoCard";

const MemoList = ({ memoList }) => {
    return (
        <div className="col-md-6 row" >
            <h2 className="mb-4">memoList</h2>
            {memoList.map((memo) => (
                // <div className="col-md-6" key={memo.id}>
                //     <h5>{memo.title}</h5>
                //     <p>{memo.content}</p>
                // </div>
                <MemoCard memo={memo} />
            ))}
        </div>
    )
}

export default MemoList;