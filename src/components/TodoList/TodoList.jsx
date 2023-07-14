import React, { useState } from 'react'
import { Col, Row, Input, Button, Select, Tag, Space } from 'antd'
import Todo from '../Todo/Todo'

function TodoList() {

  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  return (
    <>
      <Row style={{ height: 'calc(100% - 40px)' }}>
        <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
          <Todo name='Learn React' priority='High' />
          <Todo name='Learn Redux' priority='Medium' />
          <Todo name='Learn JavaScript' priority='Low' />
        </Col>
        <Col span={24}>
          <Space size="large">
            <Space.Compact >
              <Input bordered placeholder="Enter Todo" style={{ width: '325px' }}/>
              <Select defaultValue="Medium">
                <Select.Option value='High' label='High'>
                  <Tag color='red'>High</Tag>
                </Select.Option>
                <Select.Option value='Medium' label='Medium'>
                  <Tag color='blue'>Medium</Tag>
                </Select.Option>
                <Select.Option value='Low' label='Low'>
                  <Tag color='gray'>Low</Tag>
                </Select.Option>
              </Select>
              <Button type='primary'>
                Add
              </Button>
            </Space.Compact>
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default TodoList