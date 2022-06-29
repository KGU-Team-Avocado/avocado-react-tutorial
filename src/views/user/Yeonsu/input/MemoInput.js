import React from 'react';
import { useState } from 'react';

const MemoInput = (props) => {
    const [content, Content] = useState('');

    const saveMemo = (state) => {
        Content(state.target.value);
    }

    const clickBtn = () => {
        console.log({content});
        props.setMemo(content);
        Content('');
        
    }

    return (
        <>
        {/* <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div> */}
        <div class="form-floating">
            <textarea className="form-control" placeholder="내용" id="floatingTextarea" onChange={saveMemo} value={content}></textarea>
            <label for="floatingTextarea">내용을 입력하세요.</label>
            <button type="button" className="btn float-right btn-outline-success" onClick={()=>clickBtn()}>저장</button>
        </div>
        </>
    )
}

export default MemoInput;