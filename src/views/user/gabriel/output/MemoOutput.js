const MemoOutput = (props) => {
    return (
        <>
            {
                props.memo.length == 0
                    ?
                    <div>데이터가 없습니다</div>
                    :
                    props.memo.map((item) => <div>{item.date.toString()}{item.text}</div>)
            }
        </>
    )
}
export default MemoOutput;