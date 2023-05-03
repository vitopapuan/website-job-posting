import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage'
import JobLists from './routes/JobLists'
import JobDetail from './routes/JobDetail'
import DefaultLayout from './layout/DefaultLayout'
import LogIn from './routes/Login'
import SignUp from './routes/SignUp'

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path='/website-job-posting/' element={<HomePage />} />
          <Route path='/website-job-posting/job-lists' element={<JobLists />} />
          <Route
            path='/website-job-posting/job-lists/:id'
            element={<JobDetail />}
          />
          <Route path='/website-job-posting/login' element={<LogIn />} />
          <Route path='/website-job-posting/signup' element={<SignUp />} />
        </Routes>
      </DefaultLayout>
    </Router>
  )
}

export default App
