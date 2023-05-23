import React, { useState, useEffect } from 'react';
import { Card } from '../Components/Card/card';
import { Form } from '../Components/Form/form';

export const TodoPage = () => {

  const [todo, setTodo] = useState([])
  const [addTodo, setAddTodo] = useState('')
  useEffect(()=> {
    fetch('http://localhost:5000/api').then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => setTodo(data)) 
  },[])

  const handleFormChange = (inputValue) => {
    setAddTodo(inputValue)
  }

  const handleFormSubmit = () => { 
    fetch('http://localhost:5000/api/create', {
      method: 'POST',
      body: JSON.stringify({
        content:addTodo
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
    .then(message => {
      console.log(message)
      setAddTodo('')
      getLatestTodos()
    })
  }

  const getLatestTodos = () => {
    fetch('http://localhost:5000/api').then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => setTodo(data))
  }

  return(
    <>
      <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
      <Card listOfTodos={todo}/>
    </>
  )
}