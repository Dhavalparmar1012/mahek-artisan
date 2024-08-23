import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const ForgotPasswordLinkGenerateContainer = dynamic(
  () => import("@/components/Admin/LoginPage/ForgotPasswordLinkGenerateContainer"),
  { ssr: false }
);


const ForgotPassword = () => (
  <SEOLayout>
    <NoSsr>
    <ForgotPasswordLinkGenerateContainer />
    </NoSsr>
  </SEOLayout>
);

export default ForgotPassword;
