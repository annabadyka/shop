
import { TfiGithub, TfiLinkedin} from "react-icons/tfi";

export const socialLinks = [
    {
      id: 1,
      url: 'https://www.linkedin.com/in/anna-badyka-karpenko/', 
      icon: <TfiLinkedin/>,
      classIcon: 'ti-linkedin'     
    },
    {
        id: 2,
        url: 'https://github.com/annabadyka', 
        icon: <TfiGithub/>,
        classIcon: 'ti-github'     
    }
  ];
   
export const productsApiUrl = 'https://course-api.com/react-store-products';

export const singleProductApiUrl =  `https://course-api.com/react-store-single-product?id=`;