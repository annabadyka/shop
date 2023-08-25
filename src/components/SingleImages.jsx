import { useState } from 'react';

const SingleImages =({images=[{url: ''}], title})=>{
   const [main, setMain] = useState(images[0]);

    const handleMainImage = (id) =>{
       setMain(images[id]);
    }

    return(
        <div className='single_cont_images'>
            <div className='single_main_img'>
                <img src={main.url} alt={title} />
            </div>
            <div className='single_second_imgs'>
                {images.map((image, index)=>{
                      return <img key={index} src={image.url} alt={title} 
                      onClick={()=>{handleMainImage(index)}} 
                      className={(image.url == main.url) ? 'active': ''}/>
                })
                }
            </div>
        </div>       
    );
}

export default SingleImages;