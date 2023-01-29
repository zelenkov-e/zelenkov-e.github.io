import { getFeaturedEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'

function Events() {
    const filteredEvents = getFeaturedEvents()

    return <EventList items={filteredEvents} />
}

export default Events