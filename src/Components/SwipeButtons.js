import '../styles/SwipeButtons.css';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const SwipeButtons = ({brick}) => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={brick} className="swipeButtons__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="swipeButtons__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
            <button onClick={brick}>Hello</button>
        </div>
    )
}

export default SwipeButtons
