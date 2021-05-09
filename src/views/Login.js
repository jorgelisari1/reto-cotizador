import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import phone from '../assets/img/phone.png';
import girlMobile from '../assets/img/mobile-girl.png';
import girl from '../assets/img/girl-desktop.png';
import '../styles/index.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#FFFFFF',
        width: '80px',
        height: '40px',
        border: '1px solid #ced4da',
        borderRight: '1px solid #FFFFFF',
        fontSize: 16,
        marginBottom: '15px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: '0px ',
    },
    divForm: {
        display: 'flex'
    },
}));


export default function useWindowDimensions() {

    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return windowDimensions;
}

const GreenCheckbox = withStyles({
    root: {
        color: '#43B748',
        '&$checked': {
            color: '#43B748',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const Login = () => {
    const history = useHistory();
    const [placa, setPlaca] = useState('');
    const [doc, setDoc] = useState('');
    const [celular, setCelular] = useState('');
    const [error, setError] = useState(false);
    const [errorDoc, setDocError] = useState(false);
    const [errorCliente, setErrorCliente] = useState(false);
    const [labelInput, setLabelInput] = useState("");
    const [labelDoc, setLabelDoc] = useState("");
    const [labelCelular, setLabelCelular] = useState("");
    const classes = useStyles();
    const [id, setId] = React.useState('DNI');
    const [checked, setChecked] = React.useState(true);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };
    const handleChange = (event) => {
        setId(event.target.value);
    };

    const Cotizar = () => {
        if(/^([0-9]{8,8})*$/.test(doc) && doc !== ""){
            if (/\d{9,}/.test(celular)) {
                if (/^([A-Za-z]{3}\d{3})$/.test(placa)) {
                    setError(false);
                    history.push(`home/`);
                } else {
                    setError(true);
                    setLabelInput("El número de  Placa es invalido.")
                }
            } else {
                setLabelCelular("Por favor ingresa un número de celular valido ")
                setErrorCliente(true);
            }

        }else{
            setLabelDoc('El número de documento es invalido.');
            setDocError(true)
        }

    };

    return (
        <div className="content">
            <div className="contentSubMobile">
                <div className="div-header-login" >
                    <div>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div class="imagenPhone" > <img className="phone" src={phone} alt="phone" /> <p className="Roboto mobile-login">Llámanos</p> </div>
                </div>
                <div className="viewMobileOcult">
                    <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                        <p style={{ color: '#494F66', fontSize: '12px', fontWeight: '900' }}>!NUEVO¡</p>
                        <p style={{ color: '#494F66', fontSize: '28PX', fontWeight: '900', lineHeight: '30px' }}>Seguro Vehicular</p>
                        <p style={{ color: '#EF3340', fontSize: '28PX', fontWeight: '900', lineHeight: '20px' }}>Tracking</p>
                        <p style={{ color: '#676F8F', fontWeight: '900' }}>Cuentanos donde le haras seguimiento a tu seguro</p>
                    </div> 
                    <img src={girlMobile} alt="girl" />  
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ECF0FF', width: '100%' }}>
                    <div className="loginDesktop">
                        <div className='divImgGirl'> <img className="girl" src={girl} alt="girl" />
                        </div>
                        <div style={{ marginLeft: '8rem', marginRight: '2rem', height: '38vh', width: '330px', paddingTop: '70px' }}>
                            <p style={{ color: '#494F66', fontSize: '12px', fontWeight: '900' }}>!NUEVO¡</p>
                            <div style={{ display: 'flex', alignItems: 'center', height: '30px', margin: '0px', padding: '0px' }}>
                                <p style={{ color: '#494F66', fontSize: '28PX', fontWeight: '900', lineHeight: '1px', marginRight: '15px' }}>Seguro </p>
                                <p style={{ color: '#EF3340', fontSize: '28PX', fontWeight: '900', lineHeight: '20px' }}>Vehicular</p>
                            </div>
                            <p style={{ color: '#EF3340', fontSize: '28PX', fontWeight: '900', lineHeight: '20px' }}>Tracking</p>
                            <p style={{ color: '#676F8F', fontWeight: '900' }}>Cuentanos donde le haras seguimiento a tu seguro</p>

                        </div>
                    </div>
                    <p className="footer"> © 2020 RIMAC Seguros y Reaseguros.</p>
                </div>
            </div>
            <div className="login  white calibri" id="login" >
                <div class="phoneDesktop" > <p className="Roboto">¿Tienes alguna duda?</p> <img className="phone" src={phone} alt="phone" /> <p className="Roboto" style={{ fontSize: '14px', color: '#6769FF', margin: '0rem 1rem 0rem .5rem', fontWeight: '500' }}>(01) 411 6001</p> </div>
                <form className="column form-login" >
                    <div className="center-text" > Déjanos tus datos </div>
                    <div className={classes.divForm} >
                        <FormControl className={classes.margin}>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={id}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                            >
                                <MenuItem value={'DNI'}>DNI</MenuItem>
                                <MenuItem value={'CE'}>CE</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField className="input-form2"
                            id="doc"
                            type="text"
                            label="Nro. de doc"
                            variant="outlined"
                            helperText={labelDoc}
                            error={errorDoc}
                            onChange={(e) => setDoc((e.target.value).replace(/ /g, ""))}
                        />
                    </div>
                    <div style={{ marginBottom: '2px' }}>
                        <TextField className="input-form"
                            id="celular"
                            type="text"
                            variant="outlined"
                            label="Celular"
                            helperText={labelCelular}
                            error={errorCliente}
                            onChange={(e) => setCelular((e.target.value).replace(/ /g, ""))}
                        />
                    </div>
                    <TextField className="input-form"
                        id="placas"
                        type="text"
                        label="Placa"
                        variant="outlined"
                        helperText={labelInput}
                        error={error}
                        onChange={(e) => setPlaca((e.target.value).replace(/ /g, ""))}
                    />
                    <div style={{ display: 'flex', paddingLeft: '1rem' }}>
                        <GreenCheckbox checked={checked} onChange={handleCheck} name="checkedG" />
                        <p className="terms">Acepto la  <span className="span"> política de Protección de Datos Personales</span> y los  <span className="span">Términos y Condiciones.</span></p>
                    </div>
                    <button className="btn-login"
                        type="button"
                        onClick={Cotizar} >
                        Cotízalo </button>
                </form>
            </div>
        </div>
    )
};