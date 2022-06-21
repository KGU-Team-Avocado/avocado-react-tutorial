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
    <div className="mx-5 row">
      <MemoInput createMemo={createMemo} memoId={id} />
      <MemoList memoList={memoList} deleteMemo={deleteMemo} />
    </div>
  )
}

export default Soyoung;