import { useState } from "react"


function HomePage() {
    const [values, setValues] = useState({ link: '' })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ [name]: value })
    }

    const handleSabmitForm = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const content = await response.json();

        console.log(content);
    }

    return (
        <form onSubmit={handleSabmitForm}>
            <label htmlFor="link">link</label>
            <input onChange={handleInputChange} name='link' type='text' />
            <button type="submit">upload link</button>
        </form>
    )
}

export default HomePage