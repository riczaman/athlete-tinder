import '../styles/SwipeButtons.css';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const SwipeButtons = ({Refresh, Reject, Like, Premium}) => {
    return (
        <div className="swipeButtons">
            <IconButton onClick={Refresh} className="swipeButtons__repeat">
                <RefreshIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={Reject} className="swipeButtons__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={Like} className="swipeButtons__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={Premium} className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
