const apiKey = process.env.REACT_APP_API_KEY;

const checkForError = (response) => {
    if (!response.ok) {
        throw new Error(response.status)
    } else {
        return response.json()
    }
}

export const getTodaysImageDetails = () => {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(checkForError)
}
