import '../styles/TinderCards.css';
import TinderCard from 'react-tinder-card'
import {useState} from 'react'

const TinderCards = () => {
    const [athletes, setAthletes] = useState([
        {
            name: "Candace Parker",
            url: "https://cdn.vox-cdn.com/thumbor/RPKQvi1KXlagAkM72CzM-AXv7fU=/0x0:1996x3000/1200x800/filters:focal(819x247:1137x565)/cdn.vox-cdn.com/uploads/chorus_image/image/61851569/984144892.jpg.0.jpg"
        },
        {
            name: "Paige Bueckers", 
            url: "https://cdn.cnn.com/cnnnext/dam/assets/210711101757-restricted-paige-bueckers-07-10-2021-exlarge-169.jpg"
        }
    ]);

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
                    <div style={{ backgroundImage: `url('${athlete.url}')` }} className="card">
                        <h3>{athlete.name}</h3>
                    </div>
                </TinderCard>)}
            </div>
        </div>
    )
}

export default TinderCards
