import { useState } from "react";
import MemoInput from "./input/MemoInput";
import MemoList from "./memoList/MemoList";

const Soyoung = () => {
  const [memoList, setMemoList] = useState([]);

  const createMemo = (item) => {
    console.log(memoList.concat(item))
    setMemoList(memoList.concat(item));
  }
  
  return (
    <div className="mx-5 row">
      <MemoInput createMemo={createMemo} />
      <MemoList memoList={memoList} />
    </div>
  )
}

export default Soyoung;