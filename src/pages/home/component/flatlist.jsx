import * as React from 'react';
import { Accordion } from '@material-ui/core';
import { AccordionSummary } from '@material-ui/core';
import { AccordionDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import './css/flatlist.css'

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="list-title">WHat is Next Stage lab</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="list-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{border:'0px'}}>
        <AccordionSummary
          expandIcon={<ExpandMore/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <div className="list-title">WHat is Next Stage lab</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="list-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor, sit amet consectetur adipisicing elit
            . Nulla similique vel ea voluptatum dolorem aliquam minus quibusdam beatae quam nobis.
          </div>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}
