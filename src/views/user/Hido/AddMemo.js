import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddMemo({ memos, setMemos }) {

  const[inputs, setInputs] = useState({
    title: '',
    content: '',
  });
  
  const { title, content } =inputs;

  const onChange =(e) => { // 입력 함수
    const { name, value } = e.target;
    setInputs({
      ...inputs, 
      [name]: value
    });
  };
  
  const nextId = useRef(4);
  
  const onAdd = () => {
    const memo = {
      id: nextId.current, 
      title, 
      content,
      date: new Date().getTime(),
    };
    setMemos([...memos, memo]);

    setInputs({
      title: '',
      content: ''
    });
    nextId.current += 1;
  };

  return (
    <>
    <Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label></Form.Label>
    <Form.Control size="lg" type="text" name="title" placeholder="제목" onChange={onChange}
        value={title} />
  </Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" name="content" placeholder="내용" rows={3}  onChange={onChange}
        value={content}/>
  </Form.Group>
  <Button onClick={onAdd}>등록</Button>{' '}
</Form>
    </>   
  )
}

export default AddMemo;
