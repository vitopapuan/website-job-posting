import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext'
import HomePage from './routes/HomePage'
import JobLists from './routes/JobLists'
import JobDetail from './routes/JobDetail'
import DefaultLayout from './layout/DefaultLayout'

const App = () => {

  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/job-lists'
            element={<JobLists />}
          />
          <Route
            path='/job-lists/:id'
            element={<JobDetail />}
          />
        </Routes>
      </DefaultLayout>
    </Router>
  )
}

export default App
