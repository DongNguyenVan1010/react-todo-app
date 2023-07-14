import React, { useState } from 'react'
import { Col, Row, Input, Button, Select, Tag } from 'antd'
import Todo from '../Todo/Todo'

function TodoList() {

  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  return (
    <>
      <Row style={{ height: 'calc(100% - 40px)' }}>
      
      </Row>
    </>
  )
}

export default TodoList