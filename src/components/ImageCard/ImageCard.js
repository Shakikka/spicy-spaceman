import './ImageCard.css';

const ImageCard = ({ todaysDetails }) => {

    const { copyright, date, explanation, title, url} = todaysDetails

    return (
        <section className='image-card-box'>
            <img className='todays-image' src={url} alt=''/>
            <h3>{title}</h3>
            <div className='img-deets'>
                <h6>{copyright}</h6>
                <h6>{date}</h6>
            </div>
            <h6>{explanation}</h6>
        </section>
    )
}

export default ImageCard;