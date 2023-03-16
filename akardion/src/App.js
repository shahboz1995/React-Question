import { useState } from 'react'

import Question from './components/Question'
import savollar from './data'

import './App.css'
function App() {
  const [questions, setQuestions] = useState(savollar)
  const [questionInfo, setQuestionInfo] = useState('')
  function close(id) {
    if (id == questionInfo) {
      setQuestionInfo('')
    } else {
      setQuestionInfo(id)
    }
  }
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((item) => {
            return (
              <Question
                key={item.id}
                info={questionInfo == item.id ? item.info : ''}
                title={item.title}
                id={item.id}
                close={close}
              />
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App
