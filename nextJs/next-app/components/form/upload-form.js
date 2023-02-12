import { useState } from "react"
import classes from './upload-form.module.css'

const UploadForm = () => {
    const [values, setValues] = useState({ title: '', description: '', file: '' })

    const handleInputChange = (e) => {
        const { name, value, files } = e.target

        if (files) {
            const { name } = files[0]
            setValues({ ...values, [name]: name })
        }
        setValues({ ...values, [name]: value })
    }

    const handleSabmitForm = async (e) => {
        e.preventDefault()

        await fetch('/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        });

        setValues({ title: '', description: '', file: '' })
    }

    return (
        <form className={classes.form} onSubmit={handleSabmitForm}>
            <input placeholder="title" onChange={handleInputChange} name='title' value={values.title} type='text' />
            <textarea placeholder="description" onChange={handleInputChange} name='description' value={values.description} />
            <input name="file" type="file" onChange={handleInputChange} value={values.file} />
            <button type="submit">upload event</button>
        </form>
    )
}

export default UploadForm