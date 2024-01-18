import React, { useEffect } from 'react'
import './add.scss'
import UpNavbar from '../homepage/UpNavbar/UpNavbar'
import { MainNavbar } from '../homepage/MainNavbar/MainNavbar'
import UpFooter from '../homepage/UpFooter/UpFooter'
import LastFooter from '../homepage/LastFooter/LastFooter'

import { useSelector, useDispatch } from 'react-redux'
import { getAllData, addTocart, addToWish, postData, deleteData } from '../../redux/slice/slice'

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import {
//     randomCreatedDate,
//     randomTraderName,
//     randomUpdatedDate,
// } from '@mui/x-data-grid-generator';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material'

const SignupSchema = Yup.object().shape({
    prodname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    detail: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    imagecard: Yup.string().matches(/^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, "Enter a valid url").required('Required'),
});

const Add = () => {
    const columns = [
        {
            field: 'prodname',
            headerName: 'prodname',
            width: 180,
        },
        {
            field: 'detail',
            headerName: 'detail',
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'imagecard',
            headerName: 'imagecard',
            width: 480,
        },
        {
            field: 'Delete',
            headerName: 'Delete',
            width: 220,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    dispatch(deleteData(row._id))
                }}>
                    Delete
                </Button>
        },
        {
            field: 'Input',
            headerName: 'Input',
            width: 220,
           
        },
    ];
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllData())
    }, [])
    return (
        <section id='add_page'>
            <div className="add_page">
                <UpNavbar />
                <MainNavbar />
                <div className="container">
                    <div className="my_add">
                        <Formik
                            initialValues={{
                                prodname: '',
                                detail: '',
                                imagecard: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {


                                console.log(values);
                                dispatch(postData(values))




                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <h1>prodname</h1>
                                    <Field name="prodname" />
                                    {errors.prodname && touched.prodname ? (
                                        <div className='error'>{errors.prodname}</div>
                                    ) : null}
                                    <h1>detail</h1>
                                    <Field name="detail" />
                                    {errors.detail && touched.detail ? (
                                        <div className='error'>{errors.detail}</div>
                                    ) : null}
                                    <h1>imagecard</h1>
                                    <Field name="imagecard" />
                                    {errors.imagecard && touched.imagecard ? <div className='error'>{errors.imagecard}</div> : null}
                                    <button type="submit">Add</button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className='table'>
                        <Box
                            key={products._id}
                            sx={{
                                height: 400,
                                width: '100%',
                                '& .MuiDataGrid-cell--editable': {
                                    bgcolor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#376331' : 'rgb(217 243 190)',
                                },
                            }}
                        >
                            <DataGrid
                                getRowId={(row) => row._id}
                                rows={products}
                                columns={columns}
                                isCellEditable={(params) => params.row.age % 2 === 0}
                            />
                        </Box>
                    </div>
                </div>
                <UpFooter />
                <LastFooter />
            </div>
        </section>
    )
    
}


export default Add