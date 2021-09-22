import './ImageCard.css';

const ImageCard = ({ todaysDetails }) => {

    const { copyright, date, explanation, title, url} = todaysDetails

    return (
        <section className='image-card-box'>
            <img className='todays-image' src={url} alt=''/>
        </section>
    )
}

export default ImageCard;