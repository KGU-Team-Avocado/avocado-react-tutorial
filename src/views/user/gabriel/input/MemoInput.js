import { memo, useState } from "react";

const MemoInput = (props) => {

    const [data, setData] = useState(null);
    const [text, setText] = useState('');

    // console.log(props.memo);

    const handleData = (state) => {

        console.log(state.target.value);
        setText(state.target.value);
        setData({
            date: new Date(),
            text: state.target.value,
        });
    };

    const handleButton = () => {
        if(text!=''){
            props.setMemo(props.memo.concat(data));
            setData(null);
            setText('');    
        }
    }

    return (
        <>
            <input className="mb-2" onChange={handleData} value={text}></input>
            <button className="btn btn-success" onClick={() => handleButton()}>추가하기</button>
        </>
    )
}

export default MemoInput;