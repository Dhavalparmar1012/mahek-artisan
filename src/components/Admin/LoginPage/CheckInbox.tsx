// MATERIAL - UI
import Link from "next/link";
import { Box } from "@mui/material";

// PROJECT IMPORTS
import LoginLayout from "@/layouts/LoginLayout";
import UINewTypography from "@/components/UIComponent/UINewTypography";
import {
  CheckInBoxMainContainer,
  CheckInBoxContainer,
  CheckInBoxTitle,
  CheckInBoxLogin,
} from "./CheckInBox.styled";

const CheckInbox = ({ email }: { email: string }) => (
  <LoginLayout>
    <CheckInBoxMainContainer>
      <CheckInBoxContainer>
        <Box component="img" src="\images\NewThemeImage\home\email.png" />
        <CheckInBoxTitle>
          <UINewTypography
            variant="h2"
            sx={{ textAlign: "center", color: "text.secondary" }}
          >
            Check your inbox
          </UINewTypography>
          <UINewTypography
            variant="bodyRegular"
            sx={{ textAlign: "center", color: "text.primary" }}
          >
            A link to reset your password has been emailed to
          </UINewTypography>
          <UINewTypography variant="bodySemiBold">{email}</UINewTypography>
        </CheckInBoxTitle>
      </CheckInBoxContainer>
      <CheckInBoxLogin>
        <UINewTypography
          variant="buttonLargeMenu"
          sx={{ color: "text.secondary" }}
        >
          Remember password?
        </UINewTypography>
        <Link
          href="/login"
          style={{ textDecoration: "underline" }}
          shallow={true}
        >
          <UINewTypography
            variant="buttonLargeBold"
            sx={{ color: "text.secondary" }}
          >
            Log in instead!
          </UINewTypography>
        </Link>
        <Link href={{ pathname: "/validate-otp", query: { email } }}>
          Continue
        </Link>
      </CheckInBoxLogin>
    </CheckInBoxMainContainer>
  </LoginLayout>
);

export default CheckInbox;
