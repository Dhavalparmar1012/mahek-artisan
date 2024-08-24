import React, { useState, useEffect } from "react";

// MUI MATERIAL IMPORT
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import UploadIcon from "@mui/icons-material/Upload";
import LogoutIcon from "@mui/icons-material/Logout";
import TableContainer from "@mui/material/TableContainer";
import { TablePagination } from "@mui/material";

// PROJECT IMPORT
import ContainerV2 from "../../UIComponent/ContainerV2";
import { useAuth } from "@/context/AuthContext/authContext";
import { HeadlinePink } from "../../ReviewPage/Common.styled";
import UINewTypography from "../../UIComponent/UINewTypography";
import ContactTableBody from "./ContactTableBody";
import ContactTableHeader from "./ContactTableHeader";
import {
  ContactPageContainer,
  ContactPageIcon,
  ContactPageMainContainer,
} from "./Contact.styled";

// TYPES
import { ContactData } from "@/controllers/interfaces";

const ContactListPage = () => {
  const { push } = useRouter();
  const [page, setPage] = useState(0);
  const { isAuthenticated, logout } = useAuth();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [contacts, setContacts] = useState<ContactData[]>([]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts/get`
      );
      setContacts(res.data.contactList);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts/delete`,
        {
          params: { id },
        }
      );
      toast.success(res.data.message);
      fetchContacts();
    } catch (error) {
      console.error("Failed to delete contact", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <ContainerV2>
      <ContactPageMainContainer>
        <ContactPageContainer>
          <UINewTypography
            variant="h4"
            sx={{ textAlign: "center", color: "text.secondary" }}
          >
            Contact List
          </UINewTypography>
          <HeadlinePink />
          <ContactPageIcon>
            <Link href="/uploadfile" passHref>
              <IconButton>
                <UploadIcon sx={{ color: "white.main" }} />
              </IconButton>
            </Link>

            <IconButton onClick={logout}>
              <LogoutIcon sx={{ color: "white.main" }} />
            </IconButton>
          </ContactPageIcon>
        </ContactPageContainer>
        <Box sx={{ width: "100%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <ContactTableHeader />
              <ContactTableBody
                contacts={contacts}
                handleDelete={handleDelete}
              />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={contacts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </ContactPageMainContainer>
    </ContainerV2>
  ) : null;
};

export default ContactListPage;
