import React, { useRef, useEffect } from 'react';

// Import all client logos
import aaaLogo from '../../assets/clients/aaalogo.png';
import accentureLogo from '../../assets/clients/accenture.png';
import adpLogo from '../../assets/clients/adp.png';
import amazonLogo from '../../assets/clients/amazon.png';
import ambestLogo from '../../assets/clients/ambestlogo.webp';
import anscesionLogo from '../../assets/clients/anscesion.webp';
import appleLogo from '../../assets/clients/apple.webp';
import atosLogo from '../../assets/clients/atos.webp';
import bankOfAmericaLogo from '../../assets/clients/bankofamerica.png';
import bhegtLogo from '../../assets/clients/bhegt&slogo.webp';
import boeingLogo from '../../assets/clients/boeing.webp';
import cadenceLogo from '../../assets/clients/cadencelogo.webp';
import capgeminiLogo from '../../assets/clients/capgemini.webp';
import capitalGroupLogo from '../../assets/clients/capitalgrouplogo.webp';
import capitalOneLogo from '../../assets/clients/capitolone.webp';
import centerpointLogo from '../../assets/clients/centerpoint.webp';
import commonwealthLogo from '../../assets/clients/commonwealthlogo.webp';
import coxLogo from '../../assets/clients/coxlogo.png';
import creditOneLogo from '../../assets/clients/creditone.webp';
import cricketWirelessLogo from '../../assets/clients/cricketwirelesslogo.webp';
import csWholesaleLogo from '../../assets/clients/cswholesalelogo.webp';
import cvsLogo from '../../assets/clients/cvs.webp';
import deloitteLogo from '../../assets/clients/deloitee.webp';
import ecolabLogo from '../../assets/clients/ecolablogo.webp';
import epsonLogo from '../../assets/clients/epsonlogo.webp';
import finishLineLogo from '../../assets/clients/finishlinelogo.webp';
import freddieMacLogo from '../../assets/clients/freddiemac.png';
import frontlineInsuranceLogo from '../../assets/clients/frontlineinsurancelogo.png';
import hclLogo from '../../assets/clients/hcl.png';
import healthFirstLogo from '../../assets/clients/healthfirstlogo.png';
import htcLogo from '../../assets/clients/htc.png';
import humanaLogo from '../../assets/clients/humana.png';
import ibmLogo from '../../assets/clients/ibm.png';
import infosysLogo from '../../assets/clients/infosys.png';
import intuitLogo from '../../assets/clients/intuitlogo.webp';
import ionLogo from '../../assets/clients/ionlogo.webp';
import jpMorganLogo from '../../assets/clients/jpmorganlogo.webp';
import libertyMutualLogo from '../../assets/clients/libertymutuallogo.webp';
import lipmanLogo from '../../assets/clients/lipmanlogo.webp';
import lplLogo from '../../assets/clients/lpl.webp';
import mastercardLogo from '../../assets/clients/mastercard.webp';
import medImpactLogo from '../../assets/clients/medimpactlogo.webp';
import meijerLogo from '../../assets/clients/meijerlogo.webp';
import metaLogo from '../../assets/clients/meta.webp';
import mizuhoBankLogo from '../../assets/clients/mizuhobanklogo.webp';
import morganStanleyLogo from '../../assets/clients/morganstanleylogo.webp';
import nvidiaLogo from '../../assets/clients/nvidia.webp';
import pncBankLogo from '../../assets/clients/pncbank.png';
import pubixLogo from '../../assets/clients/pubixlogo.webp';
import seiLogo from '../../assets/clients/sei.webp';
import stellantisLogo from '../../assets/clients/stellantislogo.webp';
import tcsLogo from '../../assets/clients/tcs.webp';
import truistLogo from '../../assets/clients/truist.webp';
import umgLogo from '../../assets/clients/umg.webp';
import upsLogo from '../../assets/clients/upslogo.webp';
import usaBankLogo from '../../assets/clients/usabank.webp';
import walmartLogo from '../../assets/clients/wallmart.webp';
import wellsFargoLogo from '../../assets/clients/wellsfargo.webp';
import wiproLogo from '../../assets/clients/wipro.webp';

const clients = [
  { name: 'AAA', logo: aaaLogo },
  { name: 'Accenture', logo: accentureLogo },
  { name: 'ADP', logo: adpLogo },
  { name: 'Amazon', logo: amazonLogo },
  { name: 'AM Best', logo: ambestLogo },
  { name: 'Ascension', logo: anscesionLogo },
  { name: 'Apple', logo: appleLogo },
  { name: 'Atos', logo: atosLogo },
  { name: 'Bank of America', logo: bankOfAmericaLogo },
  { name: 'BHE GT&S', logo: bhegtLogo },
  { name: 'Boeing', logo: boeingLogo },
  { name: 'Cadence', logo: cadenceLogo },
  { name: 'Capgemini', logo: capgeminiLogo },
  { name: 'Capital Group', logo: capitalGroupLogo },
  { name: 'Capital One', logo: capitalOneLogo },
  { name: 'CenterPoint Energy', logo: centerpointLogo },
  { name: 'Commonwealth', logo: commonwealthLogo },
  { name: 'Cox Communications', logo: coxLogo },
  { name: 'Credit One Bank', logo: creditOneLogo },
  { name: 'Cricket Wireless', logo: cricketWirelessLogo },
  { name: 'CS Wholesale', logo: csWholesaleLogo },
  { name: 'CVS Health', logo: cvsLogo },
  { name: 'Deloitte', logo: deloitteLogo },
  { name: 'Ecolab', logo: ecolabLogo },
  { name: 'Epson', logo: epsonLogo },
  { name: 'Finish Line', logo: finishLineLogo },
  { name: 'Freddie Mac', logo: freddieMacLogo },
  { name: 'Frontline Insurance', logo: frontlineInsuranceLogo },
  { name: 'HCL Technologies', logo: hclLogo },
  { name: 'Health First', logo: healthFirstLogo },
  { name: 'HTC', logo: htcLogo },
  { name: 'Humana', logo: humanaLogo },
  { name: 'IBM', logo: ibmLogo },
  { name: 'Infosys', logo: infosysLogo },
  { name: 'Intuit', logo: intuitLogo },
  { name: 'ION Trading', logo: ionLogo },
  { name: 'JPMorgan Chase', logo: jpMorganLogo },
  { name: 'Liberty Mutual', logo: libertyMutualLogo },
  { name: 'Lipman', logo: lipmanLogo },
  { name: 'LPL Financial', logo: lplLogo },
  { name: 'Mastercard', logo: mastercardLogo },
  { name: 'MedImpact', logo: medImpactLogo },
  { name: 'Meijer', logo: meijerLogo },
  { name: 'Meta', logo: metaLogo },
  { name: 'Mizuho Bank', logo: mizuhoBankLogo },
  { name: 'Morgan Stanley', logo: morganStanleyLogo },
  { name: 'NVIDIA', logo: nvidiaLogo },
  { name: 'PNC Bank', logo: pncBankLogo },
  { name: 'Publix', logo: pubixLogo },
  { name: 'SEI', logo: seiLogo },
  { name: 'Stellantis', logo: stellantisLogo },
  { name: 'Tata Consultancy Services', logo: tcsLogo },
  { name: 'Truist', logo: truistLogo },
  { name: 'Universal Music Group', logo: umgLogo },
  { name: 'UPS', logo: upsLogo },
  { name: 'U.S. Bank', logo: usaBankLogo },
  { name: 'Walmart', logo: walmartLogo },
  { name: 'Wells Fargo', logo: wellsFargoLogo },
  { name: 'Wipro', logo: wiproLogo },
];

function ClientsSection() {
  const clientsRef = useRef(null);

  useEffect(() => {
    if (clientsRef.current) {
      let scrollPosition = 0;
      const scrollInterval = setInterval(() => {
        if (clientsRef.current) {
          scrollPosition += 1;
          clientsRef.current.scrollLeft = scrollPosition;
          
          const maxScroll = clientsRef.current.scrollWidth / 2;
          if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
            clientsRef.current.scrollLeft = 0;
          }
        }
      }, 20);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={clientsRef}
            className="flex space-x-12 overflow-x-hidden"
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;