import { useState, useEffect, createContext } from 'react'
import { database } from '../../config/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
  const [jobs, setJobs] = useState(null)
  const jobsCollectionRef = collection(database, 'jobs')

  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        try {
          const data = await getDocs(jobsCollectionRef)
          const jobsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          setJobs(jobsData)
        } catch (err) {
          console.error(err)
        }
      }

      setFetchStatus(false)
      getData()
    }, 1000)
  }, [fetchStatus, setFetchStatus])

  console.log(jobs)

  return (
    <GlobalContext.Provider
      value={{ jobs, setJobs, fetchStatus, setFetchStatus }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
