import MemoCard from "../../../../components/user/Soyoung/MemoCard";

const MemoList = ({ memoList, deleteMemo, handleModify }) => {
    return (
        <div>
            <div className="row">
                {memoList.length === 0
                    ?
                    <div>저장된 메모가 없습니다.</div>
                    :
                    memoList.map((memo) => (
                        <MemoCard memo={memo} deleteMemo={() => deleteMemo(memo.id)} handleModify={() => handleModify(memo)} key={memo.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default MemoList;