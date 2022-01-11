# Rapid Games


## The Brief
<ul>
<li>Use any public API.</li>
<li>Have several JS components.</li>
<li>The app can have a router.</li>
<li>Include wireframes.</li>
<li>2 and ½ days to finish the app.</li>
<li>Be deployed online.</li>
</ul>

## Overview

Rapid game is an app about finding a wide selection of free games and has a few nice features. You’re able to filter through games and there’s a search bar. Every game has more information when you click on the card and the app even has a favourite feature where you can favourite games that will save to your local storage. My classmate and I used an external API from <a href="https://alternativeto.net/software/freetogame/about/">freetogame</a> and built a frontend for it while pair coding.

## Deployed project <a href="https://rapidgames.netlify.app">here</a>

Technologies used

<div style="display: flex; flex-direction: row; gap: 1.5rem; margin-bottom: 10px;">
  <img style="width: 70px;" src="https://i.imgur.com/BYUqdTS.png">
  <img style="width: 70px;" src="https://i.imgur.com/QlYh5mv.png">
  <img style="width: 100px;" src="https://i.imgur.com/k9De3HS.png">
  <img style="width: 300px;" src="https://i.imgur.com/KX1h5kY.png">
  <img style="width: 200px;" src="https://i.imgur.com/C9s6ueO.png">
  <img style="width: 150px;" src="https://i.imgur.com/st6ajnt.jpg">
</div>  

## API used <a href="https://www.freetogame.com/api-doc">here</a>

1st Day: Planning and Kickoff

Half of the day was spent planning what the project would be on with my classmate. He and I were into games so we looked for a games API and behold there was one perfect for us. We then started making the wireframe and once we were signed off to begin the project we got cracking with it! 
  
<img src="https://i.imgur.com/EiQazD4.png">
  
At this point we weren’t far from what we made with our wireframe. I had made the top with Bulma’s hero component and started working on the cards using Bulma’s card component to display the games. The banner at the top is supposed to represent the “Featured Games” by displaying a random game every time the user refreshes the page using “Math.random”, the hero component sends a get request to the game which ID correlates to the random value I created. 

`Hero component:

    const [featuredGames, setFeaturedGames] = useState([])

    useEffect(() => {

      const getData = async () => {
        try {
          const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/game',
            {
              params: { id: Math.floor(Math.random() * 514).toString() },
              headers: {
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY.toString(),
              },
            })
          // console.log('Data ->',data)
          setFeaturedGames(data)
        } catch (err) {
          console.log(err)
          getData()
        }
      }
      getData()
    }, [])

`
<img src="https://i.imgur.com/znP3lVK.png">

## 2nd Day

By the 2nd day, we finished our main objective which is displayed in the wireframe. We worked on styling the website more with CSS and I gave the banner the name of the game and a proper description by calling it with an axios get request. We gave the “h2” tag the value of the game title and the ”p” tag below it the value of the game short description. I also added a platform filter with the filter array method, it goes through the array of games and searches if the game platform is equal to the platform selected. I then made a page that shows a longer description of the game, system requirements, developer and publisher credit and a “try now” button which sends you to the official website of the API. I also made a logo with adobe sparks.

<img src="https://i.imgur.com/YmCZFxP.png">
<img src="https://i.imgur.com/z8kC7L4.png">

## 3rd Day:
This was our last day to finish our bonus goals. I worked hard on styling the “more info” page whilst my classmate started working on the favourite feature we had in mind. I added tiles from Bulma to put as much information about the game as possible including some share buttons that work and a + button so you can favourite the game. Once I finished the info page, I started pair coding the favourite feature with my classmate and managed to get it working in the end by using local storage to store the games in local storage.

<img src="https://i.imgur.com/UJBN5y1.png">

`Twitter share button:

              <a href={`https://twitter.com/share?url=${gameInfo.freetogame_profile_url}&text=Check out ${gameInfo.title}!`} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"> </i> Twitter
              </a>

`
`Facebook share button:

              <a href={`https://www.facebook.com/sharer/sharer.php?u=${gameInfo.freetogame_profile_url}`} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-square"> </i> Facebook 
              </a>

`
`Email share button:

              <a href={`mailto:?subject=Check out ${gameInfo.title}!&body=${gameInfo.freetogame_profile_url}`} target="_blank" rel="noreferrer">
                <i className="fas fa-envelope"></i> Email
              </a>

`

`Reddit share button:

              <a className="button column is-warning shareButton" href="https://reddit.com/submit?url=<URL>&title=<TITLE>" target="_blank" rel="noreferrer">
                <i className="fab fa-reddit-square"></i> Reddit
              </a>

`




## Wins & Challenges

### Wins:

<ul>
<li>Incredibly impressed with what my classmate and I managed to do in just 2 and ½ days.</li>
<li>Managed to get almost all bonus features done.</li>
<li>Almost no bugs</li>
<li>You don’t need to create an account to favourite games.</li>
</ul>

### Challenges:

<ul>
<li>The biggest challenge was getting the favourite feature to work.</li>
<li>Using Bulma with not much knowledge.</li>
</ul>

## Bugs

<li>Currently, if you type in a character that’s not a letter into the search the website just crashes.</li>
<li>No other bugs were found as of writing this.</li>

Future Content & Improvements

<li>Add all games made in the 1st project of our class.</li>
<li>The content inside the banner doesn’t centre no matter the resolution so I would use flexbox to fix that.</li>
<li>Fix the bug with the search.</li>

## Key Learnings

Working in a pair was good for me and is probably my favourite over solo and a group of 4. I learnt a bit about how local storage works as well as mastered Bulma. I got a much better understanding of Regex Search and array methods.

