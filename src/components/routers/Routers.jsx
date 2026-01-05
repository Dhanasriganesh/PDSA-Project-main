import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Service from '../pages/Service.jsx';
import Industry from '../pages/Industry.jsx';
import Technology from '../pages/Technology.jsx';
import Client from '../pages/Client.jsx';
import About from '../pages/About.jsx';
import Career from '../pages/Career.jsx';
import Contact from '../pages/Contact.jsx';

// Service Detail Pages
import BankingFinancial from '../pages/services/BankingFinancial.jsx';
import Healthcare from '../pages/services/Healthcare.jsx';
import Education from '../pages/services/Education.jsx';
import Government from '../pages/services/Government.jsx';
import MediaEntertainment from '../pages/services/MediaEntertainment.jsx';
import TechnologyEnablement from '../pages/services/TechnologyEnablement.jsx';
import StrategicStaffing from '../pages/services/StrategicStaffing.jsx';
import BusinessProcessOutsourcing from '../pages/services/BusinessProcessOutsourcing.jsx';
import RecruitmentProcessOutsourcing from '../pages/services/RecruitmentProcessOutsourcing.jsx';
import TrainingHub from '../pages/services/TrainingHub.jsx';

// Industry Detail Pages
import ConsumerIndustrialProducts from '../pages/industries/ConsumerIndustrialProducts.jsx';
import Energy from '../pages/industries/Energy.jsx';
import FinancialServices from '../pages/industries/FinancialServices.jsx';
import IndustryHealthcare from '../pages/industries/Healthcare.jsx';
import MediaEntertainmentGaming from '../pages/industries/MediaEntertainmentGaming.jsx';
import IndustryTechnologyEnablement from '../pages/industries/TechnologyEnablement.jsx';
import Telecommunication from '../pages/industries/Telecommunication.jsx';
import TransportationTravel from '../pages/industries/TransportationTravel.jsx';

// Technology Detail Pages
import AIMachineLearning from '../pages/technologies/AIMachineLearning.jsx';
import AndroidDevelopment from '../pages/technologies/AndroidDevelopment.jsx';
import BigData from '../pages/technologies/BigData.jsx';
import CloudComputing from '../pages/technologies/CloudComputing.jsx';
import DevOps from '../pages/technologies/DevOps.jsx';
import IoT from '../pages/technologies/IoT.jsx';
import WebDevelopment from '../pages/technologies/WebDevelopment.jsx';
import JavaPythonFullStack from '../pages/technologies/JavaPythonFullStack.jsx';
import ServiceNow from '../pages/technologies/ServiceNow.jsx';
import BusinessDataAnalyst from '../pages/technologies/BusinessDataAnalyst.jsx';
import QAEngineer from '../pages/technologies/QAEngineer.jsx';
import DataScience from '../pages/technologies/DataScience.jsx';
import Salesforce from '../pages/technologies/Salesforce.jsx';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/client" element={<Client />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Service Detail Routes */}
      <Route path="/services/banking-financial" element={<BankingFinancial />} />
      <Route path="/services/healthcare" element={<Healthcare />} />
      <Route path="/services/education" element={<Education />} />
      <Route path="/services/government" element={<Government />} />
      <Route path="/services/media-entertainment" element={<MediaEntertainment />} />
      <Route path="/services/technology-enablement" element={<TechnologyEnablement />} />
      <Route path="/services/strategic-staffing" element={<StrategicStaffing />} />
      <Route path="/services/business-process-outsourcing" element={<BusinessProcessOutsourcing />} />
      <Route path="/services/recruitment-process-outsourcing" element={<RecruitmentProcessOutsourcing />} />
      <Route path="/services/training-hub" element={<TrainingHub />} />
      
      {/* Industry Detail Routes */}
      <Route path="/industries/consumer-industrial-products" element={<ConsumerIndustrialProducts />} />
      <Route path="/industries/energy" element={<Energy />} />
      <Route path="/industries/financial-services" element={<FinancialServices />} />
      <Route path="/industries/healthcare" element={<IndustryHealthcare />} />
      <Route path="/industries/media-entertainment-gaming" element={<MediaEntertainmentGaming />} />
      <Route path="/industries/technology-enablement" element={<IndustryTechnologyEnablement />} />
      <Route path="/industries/telecommunication" element={<Telecommunication />} />
      <Route path="/industries/transportation-travel" element={<TransportationTravel />} />

      {/* Technology Detail Routes */}
      <Route path="/technologies/ai-machine-learning" element={<AIMachineLearning />} />
      <Route path="/technologies/android-development" element={<AndroidDevelopment />} />
      <Route path="/technologies/big-data" element={<BigData />} />
      <Route path="/technologies/cloud-computing" element={<CloudComputing />} />
      <Route path="/technologies/devops" element={<DevOps />} />
      <Route path="/technologies/iot" element={<IoT />} />
      <Route path="/technologies/web-development" element={<WebDevelopment />} />
      <Route path="/technologies/java-python-fullstack" element={<JavaPythonFullStack />} />
      <Route path="/technologies/servicenow" element={<ServiceNow />} />
      <Route path="/technologies/business-data-analyst" element={<BusinessDataAnalyst />} />
      <Route path="/technologies/qa-engineer" element={<QAEngineer />} />
      <Route path="/technologies/data-science" element={<DataScience />} />
      <Route path="/technologies/salesforce" element={<Salesforce />} />
    </Routes>
  );
}

export default Routers;
