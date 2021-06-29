import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let postsData = [
  {
    id: '1',
    message: 'Hi how are you?',
    likes: '5'
  },
  {
    id: '2',
    message: 'Hello I am post?',
    likes: '10'
  },
]

export let dialogsData = [
  {
    id: '1',
    name: 'Oleg'
  },
  {
    id: '2',
    name: 'Dimych'
  },
  {
    id: '3',
    name: 'Sasha'
  },
  {
    id: '4',
    name: 'Ruben'
  },
]

export let messagesData = [
  {
    id: '1',
    message: 'Hi'
  },
  {
    id: '2',
    message: 'How is your IT?'
  },
  {
    id: '3',
    message: 'YO'
  },
]

ReactDOM.render(<App />, document.getElementById('root'));
