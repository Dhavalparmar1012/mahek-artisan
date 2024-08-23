import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const ResetPasswordContainer = dynamic(
  () => import("@/components/Admin/LoginPage/ResetPasswordContainer"),
  { ssr: false }
);

const ResetPassword = () => (
  <SEOLayout>
    <NoSsr>
      <ResetPasswordContainer />
    </NoSsr>
  </SEOLayout>
);

export default ResetPassword;
