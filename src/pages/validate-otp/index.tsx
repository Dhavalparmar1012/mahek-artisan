import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const ValidateOTPContainer = dynamic(
  () => import("@/components/Admin/LoginPage/ValidateOtp"),
  { ssr: false }
);

const ValidateOTP = () => (
  <SEOLayout>
    <NoSsr>
      <ValidateOTPContainer />
    </NoSsr>
  </SEOLayout>
);

export default ValidateOTP;
