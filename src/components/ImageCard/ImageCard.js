import unliked from '../../assets/saturn-unlike.png';
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
            <div className='like-container'>
                <button>Like?</button>
                <img className='unliked' src={unliked} alt='unliked' />
            </div>
        </section>
    )
}

export default ImageCard;