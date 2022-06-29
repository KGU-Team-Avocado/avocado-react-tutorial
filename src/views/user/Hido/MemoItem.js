import { useRef, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MemoItem = ({ onModify, onDelete, title, content, date, id }) => {
    const [isModify, setIsModify] = useState(false); // 수정모드인지 true false
    const toggleIsModify = () => setIsModify(!isModify); // 수정모드를 on off

    const [newContent, setNewContent] = useState(content); // 이전 content의 state를 이용해서 newContent
    const newContentInput = useRef(); // 수정 버튼을 눌렀을 때의 form을 focus
    
  const handleDelete = () => { 
        if (window.confirm(`삭제하시겠습니까?`)) {
            onDelete(id);
    }
};

const handleModify = () => {
    if (window.confirm(`수정하시겠습니까?`)) {
        onModify(id, newContent);
        toggleIsModify(); // 수정 모드 off
      }
};

return (
<>
  <Accordion>
    <Accordion.Item eventKey={id}>
      <Accordion.Header>
        <span><h4>{title}</h4></span>
        &nbsp;&nbsp;&nbsp;<span>{new Date(date).toLocaleString()}</span>
      </Accordion.Header>
      <Accordion.Body>
      {isModify ? 
      (
        <>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" name="newContent" placeholder="내용" rows={3}  ref={newContentInput} value={newContent} onChange={(e) => setNewContent(e.target.value)}
    />
    </Form.Group>
    </Form>
    </>
    ) : 
    (
      <>{content}</> // 수정 모드가 아니면 그냥 content를 보여줌
    )}

    <div>
        &nbsp;
    </div>

{isModify ? 
(
          <div>
            <Button onClick={handleModify}>수정완료 </Button>
            </div>
        ) : 
        (
            <div>
            <Button variant='success' onClick={toggleIsModify}>수정</Button>{' '}
            <Button variant='danger' onClick={handleDelete}>삭제</Button>
            </div>
        )}
    </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </>
          );
        };

        export default MemoItem;