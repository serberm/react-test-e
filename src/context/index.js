import React, {useState, useContext, createContext} from 'react'

export const EventContext = createContext({
  users: [],
  user: null,
  histories: [],
  setHistories: () => {},
  isLoading: false,
  error: {show: false, msg: ''},
  searchGithubUsers: () => {},
  getGithubUser: () => {}
})

export const useEvent = () => useContext(EventContext)

const EventProvider = ({children}) => {

  const [events, setEvents] = useState([])
  const [event, setEvent] = useState()

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        event,
        setEvent
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export default EventProvider
