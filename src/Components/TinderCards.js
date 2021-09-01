import '../styles/TinderCards.css';
import TinderCard from 'react-tinder-card'
import {useState, useEffect, useMemo, React} from 'react'
import SwipeButtons from '../Components/SwipeButtons';

const TinderCards = () => {
    //will pull from the backend after using fetch 
    const [athletes, setAthletes] = useState([]);
    // const childRefs = useMemo(() => Array(athletes.length).fill(0).map(i => React.createRef()), [])
    // const alreadyRemoved = []
    //pull random 4-6 until they refresh
    //refresh new 4 
    //heart = swipe right 
    //x swipe left 
    //add element or div that appears when they dnt have anymore cards
    //instead incorporate sweet alerts for each of the button clicks in swipebuttons
    
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

    // const swipe = (dir) => {
    //     console.log(`The direction is: ${dir}`)
    //     const cardsLeft = athletes.filter(athlete => !alreadyRemoved.includes(athlete.name))
    //     console.log(`Value of cards left: ${cardsLeft}`);
    //     if (cardsLeft.length) {
    //       const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
    //       console.log(`Removed Card Index: ${toBeRemoved}`);
    //       const index = athletes.map(athlete => athlete.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
    //       console.log(`index: ${index}`);
    //       alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
    //       childRefs[index].current.swipe(dir) // Swipe the card!
    //     }
    //   }

      const bv = () =>{
          console.log('holy')
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
            <SwipeButtons brick={bv}/>
        </div>
    )
}

export default TinderCards
