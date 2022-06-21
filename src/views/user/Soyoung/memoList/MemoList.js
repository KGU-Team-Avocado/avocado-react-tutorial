import MemoCard from "../../../../components/user/Soyoung/MemoCard";

const MemoList = ({ memoList, deleteMemo }) => {
    return (
        <div className="col-md-6" >
            <h2 className="mb-2">memoList</h2>
            <div className="row">
                {memoList.length === 0
                    ?
                    <div>저장된 메모가 없습니다.</div>
                    :
                    memoList.map((memo) => (
                        <MemoCard memo={memo} deleteMemo={deleteMemo} />
                    ))
                }
            </div>
        </div>
    )
}

export default MemoList;