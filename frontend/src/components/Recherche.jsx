import {useStyles} from "../useStyles";
import SearchIcon from '@material-ui/icons/Search';
import React, {useState} from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {callApi} from "../api/api";
import TextField from '@material-ui/core/TextField';


export const Recherche = (props) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    let declenchementRecherche;

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <Autocomplete
                id="recherche"
                style={{ width: 300 }}
                getOptionLabel={(option) => option.nom}
                options={options}
                open={options?.length > 0 ? open : false}
                onClose={() => {
                    setOpen(false);
                    setOptions([]);
                }}
                onOpen={() => setOpen(true)}
                clearText="Effacer"
                renderOption={(option) => (
                    <React.Fragment>
                        <div style={{width: '400px !important'}}>
                            <div style={{width: '200px !important'}}>
                                {option.nom}
                            </div>
                            <div style={{width: '200px !important'}}>({option.formePharmaceutique})</div>
                        </div>
                    </React.Fragment>
                )}
                // loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Recherche…"
                        classes={{
                            root: classes.inputAutoComplete,
                        }}
                        onChange={(evenement) => {
                            const motCle = evenement.target.value;
                            if (motCle.length >= 3) {
                                if (declenchementRecherche) {
                                    clearTimeout(declenchementRecherche);
                                }
                                declenchementRecherche = setTimeout(async () =>{
                                    setOptions([]);
                                    setOpen(false);
                                    setLoading (true);
                                    const medicaments = await callApi({
                                        endpoint: '/medicaments',
                                        query: "recherche="+ motCle,
                                        method: 'GET'
                                    });
                                    setOpen (true);
                                    setLoading (false);
                                    setOptions (medicaments);

                                }, 500);
                            }
                        }}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />

                )}
            />

        </div>
    )
};