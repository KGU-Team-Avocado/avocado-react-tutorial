import { useState } from "react";
import MemoInput from "./input/MemoInput";
import MemoList from "./memoList/MemoList";

const Soyoung = () => {
  return (
    <div className="mx-5 row">
      <MemoInput />
      <MemoList />
    </div>
  )
}

export default Soyoung;