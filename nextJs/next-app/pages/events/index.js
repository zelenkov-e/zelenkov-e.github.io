import EventList from '../../components/events/event-list'
import { useEffect, useState } from 'react'

function Events() {
    const [filteredEvents, setFilteredEvents] = useState([])

    useEffect(() => {
        async function fetchEvents() {
            let response = await fetch('/api/feedback')
            response = await response.json()
            response.message === 'success' && setFilteredEvents(response.links)
        }
        fetchEvents()
    }, [])

    return <EventList items={filteredEvents} />
}

export default Events