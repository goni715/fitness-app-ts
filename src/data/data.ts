import { TBenefitType } from "../shared/types";
import { HiHomeModern, HiAcademicCap } from "react-icons/hi2";
import { FaUserGroup } from "react-icons/fa6";


export const benefits: Array<TBenefitType> = [
    {
      icon: HiHomeModern,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
    {
      icon: FaUserGroup,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: HiAcademicCap,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];