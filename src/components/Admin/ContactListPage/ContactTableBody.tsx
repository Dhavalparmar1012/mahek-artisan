import React from "react";

// MUI MATERIAL IMPORT
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { ContactData } from "@/controllers/interfaces";

const ContactTableBody = ({
  contacts,
  handleDelete,
}: {
  contacts: ContactData[];
  handleDelete: (id: string) => void;
}) => {
  return (
    <TableBody>
      {contacts.map((contact, index) => (
        <TableRow
          key={contact._id}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
        >
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell align="right">{contact.fname}</TableCell>
          <TableCell align="right">{contact.lname}</TableCell>
          <TableCell align="center">{contact.email}</TableCell>
          <TableCell align="right">{contact.telephone}</TableCell>
          <TableCell align="center">{contact.message}</TableCell>
          <TableCell align="center">
            <IconButton onClick={() => handleDelete(contact._id)}>
              <DeleteIcon sx={{ color: "white.main" }} />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default ContactTableBody;
