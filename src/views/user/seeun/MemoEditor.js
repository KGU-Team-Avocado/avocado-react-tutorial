import { useRef, useState } from "react";
import './Seeun.css';

const MemoEditor = ({onCreate}) => {
    //const [memo, setMemo] = useState(""); 

    const memoInput = useRef();

    const [state, setState] = useState({
        memo: "",
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        if(state.memo.length < 1){
            memoInput.current.focus();
            return;
        }
        onCreate(state.memo);
        alert("저장성공");
        setState({
            memo: "",
        });
    }

    return <div className="MemoEditor">
        <h2>메모장</h2>
        <div>
            <textarea 
                name = "memo"
                ref = {memoInput} 
                value={state.memo} 
               onChange={handleChangeState}
                />
        </div>
        <div>
            <button onClick={handleSubmit}>저장</button>
        </div>
    </div>;
};

export default MemoEditor;
