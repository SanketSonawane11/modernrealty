import { BiSolidOffer } from "react-icons/bi";
import { FaMapMarked } from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";
import { IoMdAnalytics } from "react-icons/io";

const content = [
  {
    title: "Offers",
    description:
      "Easily send home offers in just a couple clicks. We handle contingency clauses and can also send mailers for off-market deals.",
    content: (
      <div className="h-full w-full text-[10rem] flex items-center justify-center text-orange-100">
        <BiSolidOffer />
      </div>
    ),
  },
  {
    title: "Tours",
    description:
      "Schedule private tours without needing to handle the scheduling difficulty of the seller agent.",
    content: (
      <div className="h-full w-full text-[10rem] flex items-center justify-center text-orange-100">
        <FaMapMarked />
      </div>
    ),
  },
  {
    title: "Competitive Market Analysis",
    description:
      "Gain the best insight by looking at hyper-local information, like average percentage over list price local transactions go for.",
    content: (
      <div className="h-full text-[10rem] w-full flex items-center justify-center text-orange-100">
        <IoMdAnalytics />
      </div>
    ),
  },
  {
    title: "Disclosures",
    description:
      "Get your disclosures summarized and explained to you. Unlock the key information from those 500-page PDFs.",
    content: (
      <div className="h-full w-full text-[10rem] flex items-center justify-center text-orange-100">
        <HiDocumentSearch />
      </div>
    ),
  },
];

export default content;