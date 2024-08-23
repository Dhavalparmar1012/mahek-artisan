import { Box } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import UINewTypography from "@/components/UIComponent/UINewTypography";

const CustomPasswordRegex = ({ password }: { password: string }) => {
  const isBetweenLength = password.length >= 8 && password.length <= 124;
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "509px",
          padding: 2,
          borderRadius: "8px",
          gap: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <UINewTypography
          variant="bodySemiBold"
          sx={{ color: "text.secondary" }}
        >
          Use a password you don’t use elsewhere
        </UINewTypography>
        <Box
          sx={{
            display: "flex",
            alignIitems: "center",
            gap: "4px",
          }}
        >
          {isBetweenLength ? (
            <Box
              component="img"
              src="/images/NewThemeImage/home/Vector.svg"
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          ) : (
            <FiberManualRecordIcon
              sx={{
                width: "10px",
                height: "10px",
                alignSelf: "center",
              }}
              fontSize="small"
            />
          )}
          <UINewTypography
            variant="bodyRegular"
            sx={{ color: "text.secondary" }}
          >
            Between 8 and 124 characters
          </UINewTypography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignIitems: "center",
            gap: "4px",
          }}
        >
          {hasNumber ? (
            <Box
              component="img"
              src="/images/NewThemeImage/home/Vector.svg"
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          ) : (
            <FiberManualRecordIcon
              sx={{ width: "10px", height: "10px", alignSelf: "center" }}
              fontSize="small"
            />
          )}
          <UINewTypography
            variant="bodyRegular"
            sx={{ color: "text.secondary" }}
          >
            Contains at least one number
          </UINewTypography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignIitems: "center",
            gap: "4px",
          }}
        >
          {hasSymbol ? (
            <Box
              component="img"
              src="/images/NewThemeImage/home/Vector.svg"
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          ) : (
            <FiberManualRecordIcon
              sx={{ width: "10px", height: "10px", alignSelf: "center" }}
              fontSize="small"
            />
          )}
          <UINewTypography
            variant="bodyRegular"
            sx={{ color: "text.secondary" }}
          >
            Contains at least one symbol
          </UINewTypography>
        </Box>
      </Box>
    </>
  );
};

export default CustomPasswordRegex;
