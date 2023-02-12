import Button from '../ui/button'
import classes from './event-item.module.css'

function EventItem(props) {
    const { id, link } = props.item
    const detailLink = `/events/${id}`

    return (
        <li key={id} className={classes.item}>
            <img src={link} alt='' />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{id}</h2>
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