import { useState, useEffect, createContext } from 'react'
import { database } from '../../config/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
  const [jobs, setJobs] = useState([])
  const jobsCollectionRef = collection(database, 'jobs')

  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(jobsCollectionRef)
        const jobsData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setJobs(jobsData)
      } catch (err) {
        console.error(err)
      }
    }

    getData()
    setFetchStatus(false)
  }, [fetchStatus, setFetchStatus])

  console.log(jobs)

  return (
    <GlobalContext.Provider
      value={{ jobs, setJobs, fetchStatus, setFetchStatus }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
