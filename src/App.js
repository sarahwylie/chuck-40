import * as React from "react";
import "./App.css"
import CountdownTimer from "./countdownTimer"

const chucklist = [
"Attend a museum free night OR a 21+ night at the Thinkery",
"Take a class",
"Finish a masterpiece",
"Have a special time out with each of your boys",
"Pet 40 dogs",
"Spend a night away from home",
"Take a trip",
"Run a 2K",
"Read a book outdoors",
"Invest in a piece of art",
"Make a playlist",
"Host a game night",
"Go for a picnic in nature",
"Try stand-up paddle boarding",
"Go to a live show",
"Do a zipline",
"Sing at karaoke",
"Find a waterfall and get wet",
"Visit somewhere that is haunted",
"Spa day (or at least a massage and mani/pedi)",
"Go on a hike",
"Start a new family tradition",
"Watch a full sunrise or sunset",
"Volunteer with a nonprofit",
"Smile and say hello to a stranger (outside of work)",
"Perform 5 random acts of kindness",
"Learn one phrase in 5 different languages",
"Do something you loved as a child",
"Restore an antique",
"Reconnect with an old friend",
"Make a new friend who you care about deeply",
"Try a new exercise",
"Take some mushrooms",
"Get a new tattoo",
"Get a spiritual reading (tarot, palm, psychic, whatever)",
"Attend a gay event",
"Try a fetish",
"Watch five supergay movies",
"Finish your will",
"Mentor someone"
];

const App = () => {
  const [checked, setChecked] = React.useState([]);
  // const [count, setCount] = React.useState('40');

// Add/Remove checked item from list
const handleChuck = (e) => {
  var updatedList = [...checked];
  if (e.target.checked) {
    updatedList = [...checked, e.target.value];
  } else {
    updatedList.splice(checked.indexOf(e.target.value), 1);
  }
  setChecked(updatedList);
};

// Return classes based on whether item is checked
const isChucked = (item) =>
  checked.includes(item) ? "checked-item" : "not-checked-item";

// Add a countdown list
// const countdown = () =>
//   checked>0 ? (count-=1, `Only ${setCount} items left to go!`) : "You did it! Now you can turn 40!"
const targetDate = '2024-12-08T00:00:00';

  return (
    <div className="chuckList">
      <h1 className="title">Chuck's 40 Before 40</h1>
      <div className="list-container">
        {chucklist.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" onChange={handleChuck} />
            <span className={isChucked(item)}>{item}</span>
          </div>
        ))}
      </div>
      <h1 className='counting'>COUNTDOWN TO 40</h1>
      <CountdownTimer targetDate={targetDate}/>
    </div>
  );
};

export default App;
