import MemoCard from "../../../../components/user/gabriel/MemoCard";

const MemoOutput = (props) => {
    let memoList = props.memo;
    const deleteMemo = (key) => {
        const idx = props.memo.findIndex(item => item.key == key)
        // console.log(idx);
        memoList.splice(idx, 1);
        props.setMemo([...memoList]);
    }

    const modifyMemo = (key, newText) => {
        const idx = props.memo.findIndex(item => item.key == key)
        memoList[idx].text=newText;
        props.setMemo([...memoList]);
    }

    return (
        <>
            {
                props.memo.length == 0
                    ?
                    <div>데이터가 없습니다</div>
                    :
                    props.memo.map((item) => <div key={item.key}><MemoCard memo={item} deleteMemo={deleteMemo} modifyMemo={modifyMemo}/></div>)
            }
        </>
    )
}
export default MemoOutput;