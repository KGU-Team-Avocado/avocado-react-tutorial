import React from 'react';
import { useState } from 'react';
import MemoInput from '../Yeonsu/input/MemoInput';
import MemoOutput from '../Yeonsu/output/MemoOutput';
import MemoEdit from '../Yeonsu/edit/MemoEdit';

const YeonsuView = () => {
  const [memo, setMemo] = useState([]);

  return (
     <>
      <div className="mx-5 my-4">
       <MemoInput memo={memo} setMemo={setMemo}/>
       <MemoOutput memo={memo} setMemo={setMemo}/>
      </div>
     </>
   ) 

}


export default YeonsuView;
