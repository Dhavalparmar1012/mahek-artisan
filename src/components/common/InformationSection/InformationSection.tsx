// PROJECT IMPORT
import UINewTypography from "@/components/UIComponent/UINewTypography";
import { InformationSectionMainContainer } from "./InformationSection.styled";

// TYPES
import { InformationSectionProps } from "@/types/common";

const InformationSection: React.FC<InformationSectionProps> = ({ title }) => (
  <InformationSectionMainContainer
    sx={{
      position: "relative",
      height: { lg: 190, md: 140, sm: 105, xs: 95 },
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url(/images/wallpaper.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.6,
        zIndex: 0,
      },
    }}
  >
    <UINewTypography
      color="text.secondary"
      sx={{
        textAlign: "center",
        fontSize: { xs: "20px", sm: "32px", md: "48px" },
        fontWeight: 700,
        position: "relative",
        zIndex: 1,
      }}
    >
      {title}
    </UINewTypography>
  </InformationSectionMainContainer>
);

export default InformationSection;
