import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'

function EventDatails() {
    const router = useRouter()
    const event = getEventById(router.query.eventId)

    if (!event) {
        return <p>No event found !</p>
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics event={event} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDatails