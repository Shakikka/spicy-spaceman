const apiKey = process.env.REACT_APP_API_KEY;

const checkForError = (response) => {
    if (!response.ok) {
        throw new Error(response.status)
    } else {
        return response.json()
    }
}

export const getImageDetails = () => {
    return fetch(`https://api.nasa.gov/planetary/apod?start_date=2021-09-15&api_key=${apiKey}`)
            .then(checkForError)
}
