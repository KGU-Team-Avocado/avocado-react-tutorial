import MemoCard from "../../../../components/user/gabriel/MemoCard";

const MemoOutput = (props) => {
    const deleteMemo = (key) => {
        console.log(key)
    }
    return (
        <>
            {
                props.memo.length == 0
                    ?
                    <div>데이터가 없습니다</div>
                    :
                    props.memo.map((item) => <div key={item.date.toString()}><MemoCard memo={item} deleteMemo={deleteMemo}/></div>)
            }
        </>
    )
}
export default MemoOutput;