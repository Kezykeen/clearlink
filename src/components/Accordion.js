import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ReactComponent as MinusCircle } from "../assets/minus-circle.svg";
import { ReactComponent as PlusCircle } from "../assets/plus-circle.svg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "16px",
  border: `1px solid #EAECF0`,
  background: `#F9FAFB`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => {
  const { expanded } = props;
  return (
    <MuiAccordionSummary
      expandIcon={expanded ? <MinusCircle /> : <PlusCircle />}
      {...props}
    />
  );
})(({ theme }) => ({
  padding: "32px",
  "& .MuiAccordionSummary-root:not(.Mui-expanded)": {
    border: `2px solid green`,
  },
  "& .MuiAccordionDetails-root": {
    padding: `0px 32px 12px`,
    borderTop: `none`,
  },
  "& .MuiTypography-root": {
    color: `#101828`,
    fontFamily: `Inter, sans-serif`,
    fontSize: `19px`,
    fontStyle: `normal`,
    fontWeight: `600`,
    lineHeight: `30px`,
  },
  "& .MuiAccordionSummary-content": {
    margin: `0px`,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const CustomizedAccordions = ({ title, content, idx }) => {
  const [expandedPanel, setExpandedPanel] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpandedPanel(newExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expandedPanel === `panel${idx}`}
      onChange={handleChange(`panel${idx}`)}
    >
      <AccordionSummary
        expanded={expandedPanel === `panel${idx}`}
        aria-controls={`panel${idx}d-content`}
        id={`panel${idx}d-header`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomizedAccordions;
