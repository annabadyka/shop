import { Rating } from 'react-simple-star-rating';

const SingleReviews =({stars, reviews})=>{
        return(
        <>
            <div className='single-stars'>
                <span>{stars} / 5</span>
                <span><Rating initialValue={stars} readonly='true' allowFraction='true' size='25'/></span>
                <span>{reviews} customer reviews</span>
            </div>            
        </>          
    );
}

export default SingleReviews;