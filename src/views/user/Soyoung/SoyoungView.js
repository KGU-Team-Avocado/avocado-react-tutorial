import { useState } from "react";
import MemoInput from "./input/MemoInput";
import MemoList from "./memoList/MemoList";

const Soyoung = () => {
  const [memoList, setMemoList] = useState([]);
  const [id, setId] = useState(0);

  const createMemo = (item) => {
    setId(item.id + 1);
    setMemoList(memoList.concat(item));
  }

  const deleteMemo = (id) => {
    setMemoList(memoList.filter((item) => item.id !== id))
  }
  
  return (
    <div className="mx-5">
      <div className="row justify-content-between my-2">
        <h2 className="col-auto mb-2">memoList</h2>
        <button className="col-auto btn btn-primary" data-bs-toggle="modal" data-bs-target="#writeMemoModal">새 메모</button>
      </div>
      <MemoInput createMemo={createMemo} memoId={id}  />
      <MemoList memoList={memoList} deleteMemo={deleteMemo} />
    </div>
  )
}

export default Soyoung;