import React from 'react';
import { useState } from 'react';
import MemoInput from '../Yeonsu/input/MemoInput';
import MemoOutput from '../Yeonsu/output/MemoOutput';
import MemoEdit from '../Yeonsu/edit/MemoEdit';
import MemoCard from '../../../components/user/Yeonsu/MemoCard';

const YeonsuView = () => {
  const [memo, setMemo] = useState([]);
  const [txt, setText] = useState('');
  const [key, setKey] = useState(0);
  const [modifyTxt, setModify] = useState('');

  const handleText = (state) => {
    setText(state.target.value);
  }
  const clickBtn = () => {
    console.log(txt);
    setMemo(memo.concat(txt));
    setText('');
    setKey(key+1);
  }

  return (
     <>
      {/* <div className="mx-5 my-4">
       <MemoInput memo={memo} setMemo={setMemo}/>
       <MemoOutput memo={memo} setMemo={setMemo}/>
      </div> */}
      <div class="form-floating">
            <textarea className="form-control" placeholder="내용" id="floatingTextarea" onChange={handleText} value={txt}></textarea>
            <label for="floatingTextarea">내용을 입력하세요.</label>
            <button type="button" className="btn float-right btn-outline-success" onClick={()=>clickBtn()}>저장</button>
        </div>
        <div>메모 리스트</div>
        {memo.length == 0 ? <div></div> : memo.map((a)=><div><MemoCard a={a} memo={memo} key={key} setMemo={setMemo}/></div>)}



{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">{}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="form-floating">
            <textarea className="form-control" placeholder="수정내용" id="floatingTextarea" onChange={handleText} value={txt}></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">저장</button>
      </div>
    </div>
  </div>
</div>

     </>
   ) 

}


export default YeonsuView;