import '../styles/TinderCards.css';
import TinderCard from 'react-tinder-card'
import {useState, useEffect} from 'react'

const TinderCards = () => {
    //will pull from the backend after using fetch 
    const [athletes, setAthletes] = useState([]);

    //pull random 4-6 until they refresh
    //refresh new 4 
    //heart = swipe right 
    //x swipe left 
    //add element or div that appears when they dnt have anymore cards
    
    useEffect(()=>{
        getTinderProfiles(); 
    }, [])

    const getTinderProfiles = async() =>{
        const res = await fetch("http://localhost:8000/tinder/card"); 
        const data = await res.json();

        setAthletes(data); 
    }

    const swiped = (direction, name) =>{
        console.log(`You swiped ${direction} on ${name}`)
    }

    const outOfFrame = (name) => {
        console.log(`Yikes! You swiped left on: ${name}`)
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardsContainer">
                {athletes.map(athlete => 
                <TinderCard
                    className="swipe"
                    key={athlete.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir)=>swiped(dir, athlete.name)}
                    onCardLeftScreen={()=> outOfFrame(athlete.name)}>
                    <div style={{ backgroundImage: `url('${athlete.imgUrl}')` }} className="card">
                        <h3>{athlete.name}</h3>
                    </div>
                </TinderCard>)}
            </div>
        </div>
    )
}

export default TinderCards
