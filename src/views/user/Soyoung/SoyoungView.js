import { useState } from "react";
import MemoInput from "./input/MemoInput";
import MemoList from "./memoList/MemoList";

const Soyoung = () => {
  const [memoList, setMemoList] = useState([]);
  const [memo, setMemo] = useState({id: -1, title:'', content:''});
  const [id, setId] = useState(0);

  const handleModify = (item) => {
    setMemo(item);
  }

  const createMemo = (item) => {
    setId(item.id + 1);
    setMemoList(memoList.concat(item));
  }

  const deleteMemo = (id) => {
    setMemoList(memoList.filter((item) => item.id !== id))
  }

  const modifyMemo = (newMemo) => {
    setMemoList(memoList.map((memo) => memo.id === newMemo.id ? { ...memo, title:newMemo.title, content:newMemo.content } : memo))
    setMemo({id: -1, title:'', content:''});
  }
  
  return (
    <div className="mx-5">
      <div className="row justify-content-between my-2">
        <h2 className="col-auto mb-2">memoList</h2>
        <button className="col-auto btn btn-primary" data-bs-toggle="modal" data-bs-target="#writeMemoModal">새 메모</button>
      </div>
      <MemoInput createMemo={createMemo} modifyMemo={modifyMemo} memoId={id} memo={memo} />
      <MemoList memoList={memoList} deleteMemo={deleteMemo} handleModify={handleModify} />
    </div>
  )
}

export default Soyoung;