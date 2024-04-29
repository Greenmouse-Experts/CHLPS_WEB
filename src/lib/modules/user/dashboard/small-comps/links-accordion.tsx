import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LinksAccordion = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem className="!border-0 mb-1 pt-1">
        <AccordionButton className="flex justify-between fw-500">
          <div className="flex items-center gap-x-2 fs-500"><span className="bg-black w-3 h-3 circle"></span>CHLPS Features</div>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <ul className="grid gap-3 list-disc pl-4 fs-500 fw-500">
            <li>
                <Link to={'/user/plans'} className="">Membership Plans</Link>
            </li>
            <li>
                <Link to={'/user/plans'}>Membership Plans</Link>
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem className="mb-1 pt-1">
        <AccordionButton className="flex justify-between fw-500">
          <div className="flex items-center gap-x-2 fs-500"><span className="bg-black w-3 h-3 circle"></span>My Profile</div>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <ul className="list-disc pl-4 fs-500 fw-500">
            <li>
                <Link to={'/user/plans'}>Membership Plans</Link>
            </li>
            <li>
                <Link to={'/user/plans'}>Membership Plans</Link>
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem className="mb-1 pt-1">
        <AccordionButton className="flex justify-between fw-500">
          <div className="flex items-center gap-x-2 fs-500"><span className="bg-black w-3 h-3 circle"></span>CHLPS Support</div>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <ul className="list-disc pl-4 fs-500 fw-500">
            <li>
                <Link to={'/user/plans'}>Membership Plans</Link>
            </li>
            <li>
                <Link to={'/user/plans'}>Membership Plans</Link>
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default LinksAccordion;
