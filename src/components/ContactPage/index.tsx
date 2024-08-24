import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

//PROJECT IMPORT
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import ContainerV2 from "../UIComponent/ContainerV2";
import ContactForm from "./ContactForm";
import ScrollToTopIcons from "../HomePage/ScrollToTopIcons";
import InformationSection from "../common/InformationSection/InformationSection";
import { MainContainerSpace } from "../ReviewPage/Common.styled";

const ContactPage = () => {
  return (
    <>
      <Scrollbars autoHide autoHeight autoHeightMax={"100vh"}>
        <MainLayout>
          <InformationSection title="Contact us" />
          <ContainerV2>
            <MainContainerSpace>
              <ContactForm />
              <ScrollToTopIcons />
            </MainContainerSpace>
          </ContainerV2>
        </MainLayout>
      </Scrollbars>
    </>
  );
};

export default ContactPage;
