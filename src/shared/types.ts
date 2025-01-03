import { IconType } from "react-icons";

export enum TSelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus'
  }
  

  
export interface TBenefitType {
  icon: IconType;
  title: string;
  description: string;
}


export interface TClassType {
  name: string;
  description?: string;
  image: string;
}

  