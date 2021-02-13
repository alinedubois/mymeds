import InputBase from '@material-ui/core/InputBase';
import {useStyles} from "../useStyles";
import SearchIcon from '@material-ui/icons/Search';



export const Recherche = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Recherche…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}