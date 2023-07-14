import React, { useState } from 'react'
import { Row, Tag, Checkbox } from 'antd'


const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo() {

  const [checked, setChecked] = useState('completed')

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        Eat cake
      </Checkbox>
    </Row>
  )
}
