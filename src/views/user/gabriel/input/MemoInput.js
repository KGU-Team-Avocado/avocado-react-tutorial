import { memo, useState } from "react";

const MemoInput = (props) => {

    const [data, setData] = useState(null);
    const [text, setText] = useState('');
    const [key, setKey] = useState(0);

    const handleData = (state) => {

        setText(state.target.value);
        setData({
            key : key,
            date : new Date(),
            text : state.target.value,
        });
    };

    const handleButton = () => {
        if(text!=''){
            props.setMemo(props.memo.concat(data));
            setKey(key+1);
            setData(null);
            setText('');
        }
        console.log(data);
    }

    return (
        <>
            <textarea className="mb-2" onChange={handleData} value={text} ></textarea>
            <button className="btn btn-success mb-3" onClick={() => handleButton()}>추가하기</button>
        </>
    )
}

export default MemoInput;