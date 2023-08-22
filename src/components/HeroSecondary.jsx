import '../assets/css/HeroSecondary.css';

const HeroSecondary = ({title})=> { 
    return(
        <section className='hero-secondary'>
            <div className='heading-section'>
                <h1>{title}</h1>
            </div>
        </section>    
      );
  };
  
  export default HeroSecondary;