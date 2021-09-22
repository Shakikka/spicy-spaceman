import './ImageCard.css';

const ImageCard = ({ todaysDetails }) => {

    const { copyright, date, explanation, title, url} = todaysDetails

    return (
        <section className='image-card-box'>
            <img className='todays-image' src={url} alt=''/>
            <div className='image-details'>
                <h6>{copyright}</h6>
                <h6>{date}</h6>
            </div>
            <h3>{title}</h3>
            <h6>{explanation}</h6>
            <button>Like?</button>
        </section>
    )
}

export default ImageCard;