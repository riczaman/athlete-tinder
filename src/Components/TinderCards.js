import '../styles/TinderCards.css';
import TinderCard from 'react-tinder-card'
import {useState, useEffect, React} from 'react'
import SwipeButtons from '../Components/SwipeButtons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TinderCards = () => {
    //will pull from the backend after using fetch 
    const [athletes, setAthletes] = useState([]);
    const [trackCards, setTrackCards] = useState(0);
    const [swipes, setSwipes] = useState(0); 
    
    useEffect(()=>{
        getTinderProfiles(); 
    }, [])

    const getTinderProfiles = async() =>{
        const res = await fetch("http://localhost:8000/tinder/card"); 
        const data = await res.json();

        let item1 = data[Math.floor(Math.random() * data.length)];
        let item2 = data[Math.floor(Math.random() * data.length)];
        let item3 = data[Math.floor(Math.random() * data.length)];
        let item4 = data[Math.floor(Math.random() * data.length)];

        const randomData = [item1, item2, item3, item4]
        setTrackCards(randomData.length);
        setAthletes(randomData); 
    }

    const outOfFrame = (name) => {
        console.log(`${name} has left the screen`)
    }

    const refreshOptions = async () => {
        setSwipes(0);
        await getTinderProfiles(); 
    }

    const reject = () => toast(`😞 Your really going to swipe left?`);

    const like = () => toast(`😍 I have a feeling you're in love!`);
        
    const premiumFeatures = () => toast(`🤑 Premium features coming soon.`);

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardsContainer">
                {athletes.map(athlete => 
                <TinderCard
                    className="swipe"
                    key={athlete.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={() => setSwipes(prevSwipes => prevSwipes + 1)}
                    onCardLeftScreen={()=> outOfFrame(athlete.name)}>
                    <div style={{ backgroundImage: `url('${athlete.imgUrl}')` }} className="card">
                        <h3>{athlete.name}</h3>
                    </div>
                </TinderCard>)}
                {swipes === trackCards && 
                    <TinderCard
                        className="swipe"
                        preventSwipe={['left', 'right', 'up', 'down']}>
                        <div style={{ backgroundImage: `url('https://cdn.dribbble.com/users/246611/screenshots/10742148/media/d64b1bc4087cbf2c574a1688ecabc8ee.png?compress=1&resize=400x300')` }} className="card">
                        </div>
                    </TinderCard>
                }
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <SwipeButtons Refresh={refreshOptions} Reject={reject} Like={like} Premium={premiumFeatures}/>
        </div>
    )
}

export default TinderCards
