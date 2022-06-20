import { useState } from "react";
import MemoInput from "./input/MemoInput";
import MemoList from "./memoList/MemoList";

const Soyoung = () => {
  const [memoList, setMemoList] = useState([]);
  const [id, setId] = useState(0);

  const createMemo = (item) => {
    console.log(memoList.concat(item))
    setId(item.id + 1);
    setMemoList(memoList.concat(item));
  }
  
  return (
    <div className="mx-5 row">
      <MemoInput createMemo={createMemo} memoId={id} />
      <MemoList memoList={memoList} />
    </div>
  )
}

export default Soyoung;