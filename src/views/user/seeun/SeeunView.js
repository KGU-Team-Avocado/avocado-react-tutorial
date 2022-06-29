import { useRef, useState } from "react";

import MemoEditor from "./MemoEditor";
import MemoList from "./MemoList";

const SeeunView = () => {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (memo) => {
    const created_date = new Date().getTime();
    const newItem = {
      memo,
      created_date,
      id: dataId.current,
    };
    dataId.current+=1;
    setData([newItem, ...data]);
  };
  
  const onDelete = (targetId) => {
    const newMemoList = data.filter((it) => it.id !== targetId);
    setData(newMemoList);
  };

  const onEdit = (targetId, newContent) => {
      setData(
        data.map((it) =>it.id === targetId ? {...it, memo:newContent} : it )
      )
  }

  return (
    <div className="App">
      <MemoEditor onCreate={onCreate} />
      <MemoList onEdit = {onEdit} memoList={data} onDelete = {onDelete}/>
    </div>
  );
}

export default SeeunView;
