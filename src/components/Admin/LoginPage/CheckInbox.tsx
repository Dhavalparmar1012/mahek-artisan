// MATERIAL - UI
import { Box } from "@mui/material";

// PROJECT IMPORTS
import LoginLayout from "@/layouts/LoginLayout";
import UINewTypography from "@/components/UIComponent/UINewTypography";
import {
  CheckInBoxMainContainer,
  CheckInBoxContainer,
  CheckInBoxTitle,
} from "./CheckInBox.styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CheckInbox = ({ email }: { email: string }) => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push({
            pathname: "/validate-otp",
            query: { email },
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router, email]);

  return (
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
            <UINewTypography
              variant="bodyRegular"
              sx={{ textAlign: "center", marginTop: 2 }}
            >
              Redirecting in {countdown} second{countdown > 1 ? "s" : ""}
            </UINewTypography>
          </CheckInBoxTitle>
        </CheckInBoxContainer>
      </CheckInBoxMainContainer>
    </LoginLayout>
  );
};

export default CheckInbox;
