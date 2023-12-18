import {useEffect, useState} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {db} from "../firebase-config";
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Autocomplete, Button, Fade, Stack, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import AddProduct from "./AddProduct";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProductList() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const empCollectionRef = collection(db, 'products')

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef)
        setRows(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    useEffect(() => {
        getUsers()
    }, [])

    const deleteUser = (id) => {
        Swal.fire({
            title: 'Are you sure ?',
            text: "you won't be able to reserve this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: '#d55',
            confirmButtonText: 'yes, delete it!',
        }).then((result) => {
            if (result.value) {
                deleteApi(id)
            }
        })
    }
    const deleteApi = async (id) => {
        const userDoc = doc(db, "products", id)
        await deleteDoc(userDoc)
        Swal.fire("Deleted!", "Your File has been deleted.", "success")
        getUsers()
    }

    const filterData = (v) => {
        if (v) {
            setRows([v])
        } else {
            setRows([])
            getUsers()
        }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    // onClose={handleClose}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <AddProduct closeEvent={handleClose}/>
                        </Box>
                    </Fade>
                </Modal>
            </div>
            <Paper sx={{width: '100%', overflow: 'hidden'}}>
                <Typography gutterBottom variant='h5' component='div' sx={{padding: '20px'}}>
                    ProductList
                </Typography>
                <Divider/>
                <Box height={10}/>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: 20}}>
                    <Stack dorection='row' spacing={2}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            getOptionLabel={(rows) => rows.name || ''}
                            onChange={(e, v) => filterData(v)}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Search Products"/>}
                        />
                    </Stack>
                    <Button width={20} variant='container' endIcon={<AddCircleIcon/>} onClick={handleOpen}>
                        Add
                    </Button>
                </div>
                <Box height={10}/>
                <TableContainer sx={{maxHeight: 440}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='left' sx={{minWidth: '100px'}}>
                                    Name
                                </TableCell>
                                <TableCell align='left' sx={{minWidth: '100px'}}>
                                    Price
                                </TableCell>
                                <TableCell align='left' sx={{minWidth: '100px'}}>
                                    Category
                                </TableCell>
                                <TableCell align='left' sx={{minWidth: '100px'}}>
                                    Date
                                </TableCell>
                                <TableCell align='left' sx={{minWidth: '100px'}}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1}>
                                            <TableCell key={row.id} align={row.align}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell key={row.id} align={row.align}>
                                                {row.price}
                                            </TableCell>
                                            <TableCell key={row.id} align={row.align}>
                                                {row.category}
                                            </TableCell>
                                            <TableCell key={row.id} align={row.align}>
                                                {row.date}
                                            </TableCell>
                                            <TableCell align='left'>
                                                <Stack spacing={2} direction='row'>
                                                    <EditIcon sx={{fontSize: '20px', color: 'blue'}}
                                                    />
                                                    <DeleteIcon sx={{fontSize: '20px', color: 'red'}}
                                                                onClick={() => deleteUser(row.id)}
                                                    />
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )

}