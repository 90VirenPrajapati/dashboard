import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import {Button, TextField} from "@mui/material";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "../firebase-config";
import Swal from "sweetalert2";

const AddProduct = ({closeEvent}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [rows, setRows] = useState([]);


    const empCollectionRef = collection(db, 'products')
    const createUser = async () => {
        await addDoc(empCollectionRef, {
            name: name,
            price: Number(price),
            category: category,
            date: String(new Date())
        })
        getUsers()
        closeEvent()
        Swal.fire('Submitted', 'your file has submitted', 'success')
    }

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef)
        setRows(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const currencies = [
        {
            value: 'mobile',
            label: 'Mobile',
        },
        {
            value: 'leptop',
            label: 'Leptop',
        },
        {
            value: 'food',
            label: 'Food',
        },
        {
            value: 'electronic',
            label: 'Electronic',
        },
    ];
    return (
        <>
            <Box sx={{m: 2}}/>
            <Typography variant='h5' align='center'>
                Add Products
            </Typography>
            <IconButton style={{position: 'absolute', top: '0', right: '0'}} onClick={closeEvent}>
                <CloseIcon/>
            </IconButton>
            <Box height={20}/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Name" variant="outlined" size='small' sx={{minWidth: '100%'}} value={name} onChange={handleNameChange}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Price" variant="outlined" size='small'
                               type='number'
                               sx={{minWidth: '100%'}}
                               value={price}
                               onChange={handlePriceChange}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Category" variant="outlined" size='small'
                               select
                               sx={{minWidth: '100%'}}
                               value={category}
                               onChange={handleCategoryChange}>
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5' align='center'>
                        <Button variant='contained' onClick={createUser}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{m: 4}}/>
        </>
    );
};

export default AddProduct;