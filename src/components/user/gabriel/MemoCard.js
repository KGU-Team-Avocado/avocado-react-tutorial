const MemoCard = (props) => {

    const convertDate = (d) => {
        const addZero = (n) => {
            const num = n > 9 ? n : "0" + n;
            return num;
        }
        let year = addZero(d.getFullYear());
        let month = addZero(d.getMonth() + 1);
        let date = addZero(d.getDate());
        let hour = addZero(d.getHours());
        let minute = addZero(d.getMinutes());
        let second = addZero(d.getSeconds());

        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    }

    return (
        <div className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
                <strong className="mb-1">{convertDate(props.memo.date)}</strong>
                <a href="#" onClick={() => props.deleteMemo(props.memo.key)}><small className="text-muted">삭제하기</small></a>
            </div>
            <div className="col-10 mb-1 small">{props.memo.text}</div>
        </div>
    )
}

export default MemoCard;