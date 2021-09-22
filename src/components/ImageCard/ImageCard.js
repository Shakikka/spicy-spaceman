import unliked from '../../assets/saturn-unlike.png';
import liked from '../../assets/saturn-like.png';
import './ImageCard.css';

const ImageCard = ({ imageDetails, favoriteImage, icons }) => {

    return (
        imageDetails.map(({ media_type, date, explanation, title, url }) => {
            return (
                <section className='image-card-box' key={date}>
                    {media_type==='image' && <img className='image' src={url} alt=''/>}
                    {media_type==='video' &&
                    <iframe
                        title={title}
                        width='750'
                        height='500'
                        src={url}
                    />}
                        <h6>{date}</h6>
                    <h3>{title}</h3>
                    <h6>{explanation}</h6>
                    <div className='like-container'>
                        <button id={date} onClick={favoriteImage}>{icons.includes(date) ? 'unlike' : 'like'}</button>
                        <img className='unliked' src={icons.includes(date) ? liked: unliked} alt='liked' />
                    </div>
                </section>
            )
        })
    )
}

export default ImageCard;