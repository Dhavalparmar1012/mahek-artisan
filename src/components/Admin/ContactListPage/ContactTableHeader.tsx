import React from "react";

// MUI MATERIAL IMPORT
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const ContactTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell align="right">First Name</TableCell>
        <TableCell align="right">Last Name</TableCell>
        <TableCell align="center">Email</TableCell>
        <TableCell align="right">Telephone</TableCell>
        <TableCell align="center">Message</TableCell>
        <TableCell align="center">Action</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ContactTableHeader;
