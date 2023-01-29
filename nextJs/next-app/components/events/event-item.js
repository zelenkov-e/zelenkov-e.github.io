import Button from '../ui/button'
import classes from './event-item.module.css'

function EventItem(props) {
    const { id, date, image, location, title } = props.item
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric', month: 'long', year: 'numeric'
    })
    const formattedAddress = location.replace(', ', '\n')
    const detailLink = `/events/${id}`

    return (
        <li key={id} className={classes.item}>
            <img src={'/' + image} alt='' />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={detailLink}>
                        Event Details
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem