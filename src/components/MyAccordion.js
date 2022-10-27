import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useNavigate } from 'react-router-dom'



export default function MyAccordion({ p }) {

  const navigate = useNavigate();
  async function selectSize(packageId) {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedPackage: packageId, termsConfirmed: false })
    };
    const response = await fetch('http://localhost:3001/parents/0', requestOptions);
    // const data = await response.json();

  }
  const navigateConfirm = (packageId) => {
    selectSize(packageId);
    navigate('/Confirm');
  };

  return (
    <div className={p.color}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography><b>{p.size}</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ul>
              {p.content.map((product, i) =>
                <li key={i}>{product}</li>
              )}
            </ul>
            <div className='mt-auto p-4'>
              {/* Onclick usenavigate */}
              <button className='knapp' onClick={() => navigateConfirm(p.id)}> VÄLJ</button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion >
    </div >
  )
}
