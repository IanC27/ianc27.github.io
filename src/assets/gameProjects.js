const gameProjects = [
    {
    title: "Runner's Grave",
    subhead: "HTML5 Game Demo",
    dateRange: "Jun 2022--",
    roles: ["Solo Developer", "Programmer", "Designer", "Artist",],
    skills: ["Javascript", "Phaser.js"],
    summary: `Arcade-style maze runner made in Javascript with Phaser.js
    Randomly generated mazes using depth-first backtracker
    Data-driven level design using a JSON with level parameters`,
    img: "/src/assets/runners-grave/runnergrave.png",
    url: "runners-grave",
    page: `
      
      <div>
        <img width="100%" height=auto src="/src/assets/runners-grave/runnerBanner.png">
        <img width="50%" height=auto src="/src/assets/runners-grave/fight2.gif">
      </div>
      <i>Run and fight through procedurally generated mazes.</i>
      <p>
      Runners' Grave is an arcade-style maze escape game made in Phaser.js. 
      I used a depth-first search backtracker to generate unique mazes, and a data-driven
      level design system to tune difficulty values like maze size, cannonball speed, and others.
      </p>

      <p><a href="https://sevenstudios.itch.io/runners-grave">Play on itch.io</a></p>
      `
    
  },
  {
    title: "Antimony",
    subhead: "Narrative Adventure Game",
    skills: ["Unity", "C#", "Puzzle Design", "Narrative Design"],
    roles: ["Programmer", "Designer", "Writer"],
    url: "antimony",
    img: "https://img.itch.zone/aW1nLzEyNjYyODM2LnBuZw==/315x250%23c/rPNGju.png",
    page: `

  
    <img src="https://img.itch.zone/aW1hZ2UvMjE0NjczOC8xMjY4NTQ2Ny5wbmc=/794x1000/tbrn%2F4.png" class="screenshot">
    <img src="https://img.itch.zone/aW1hZ2UvMjE0NjczOC8xMjY4NTQ2Ni5wbmc=/794x1000/rlZtY%2B.png" class="screenshot">

    <p>
     In this narrative point-and-click adventure, begin to uncover the mystery behind
     your missing memories with the help of a fascinating cast of characters.
    </p>
    <p>Made for CMPM 172 at UCSC</p>

    <p>
      As a programmer on this project, I created reusable clickable prototypes that encapsulate
      the behaviors of an inspectable or collectible item. I also worked to make it possible to easily
      connect lines of dialog (written in the scripting language Ink) to events happening in the game (e.g.
      a new item appearing). This was accomplished with Ink's Unity package, external events, and 
      Unity's callback-like "event" function system.
    </p>
    <h3>Credits</h3>

    <ul>
    <li>Producer: Ethan Nguyen</li>
    <li>Writing: Ethan Nguyen, Ian Cowan</li>
    <li>Programming: Kofi Quansah, Mrinmoyee Mishra, Ethan Nguyen, Ian Cowan</li>
    <li>Music and Sound Design: Omar Bahlool</li>
    <li>Character Design/Art: Kennedy Thomas</li>
    <li>UI Design/Art: Marshall Zhao, Ethan Nguyen</li>
    <li>Background Art: Ethan Nguyen</li>
    </ul>

    <h3>Video Playthrough</h3>
    <iframe src="https://drive.google.com/file/d/1bJGW34wHkqd-GVx7Hjl4vabqendFiupj/preview" width="854" height="480" allow="autoplay"></iframe>

    `
  },
  {
    title: "The Solar Punk",
    subhead: "Isometric Action-Adventure Prototype",
    url: "solar-punk",
    img: "https://img.itch.zone/aW1nLzExNjc4MjIxLnBuZw==/315x250%23c/iAU2ta.png",
    page: `<p> hello world </p>`
  },
  {
    title: "Spaceship Odyssey",
    subhead: "narrative adventure",
    skills: ["Phaser", "Javascript", "Minigames", "Accessiblity", "Tutorial"],
    roles: ["Programmer", "Designer"],
    url: "spaceship-odyssey",
    img: "https://img.itch.zone/aW1nLzkxMjM4ODgucG5n/315x250%23c/7%2BYkLj.png",
    page: `
    <p> Spaceship Odyssey is a "micro" time management sim set on a space station. 
    The player must balance the need for sleep, relaxation, and contact with home 
    while choosing how best to spend their limited time on the ship. By playing different
    minigames, the player adds points towards different goals, resulting in different outcomes by the end.
    </p>
    <p>
        The game was made as a final group project for the course, "Game Development Experience".
        <ul>
          <li>Programming: Ian Cowan and Jason Chen</li>
          <li>Art: Nic Stepp, Chris Pau, and Ian</li>
          <li>Music: Chris</li>
          <li>Sounds: Chris and Ian</li>
        </ul>
    </p>
    <p> 
        As a designer, I worked and iterated on the overall gameplay loop, as well as the control schemes and movement.
        Thanks to advice and guidance from my class professor, I made the game playable with mouse and keyboard, only the mouse, or touch on mobile.
    </p>
    <p>
        As a engineer and programmer, I worked on simplyfing minigame and event implementation using polymorphism through an expandable Activity class.
        I also implemented the main countdown and data meters using timers, and had a hand in most minigames.
    </p>
    <a href="https://chrispy-chxcken.itch.io/ss-odyssey"> Play on itch.io</a>
    `
  },
  {
    title: "One-Button Microgames",
    subhead: "A collection of three small games playable with only one button",
    skills: ["Typescript", "Rapid Prototyping"],
    roles: ["Programmer", "Designer"],
    url: "one-button-games",
    img: "/src/assets/microgames.png",
    page: `
    <p> 
        These web-base games were all completed in the span of two weeks, from learning about the library to implementation. 
        The library used to make them is <a href="">crisp-game-lib</a>, a fun minigame engine for typescript.
        The process was a great excercise in ideation under constraints, iterating on a design, and working with a new tool with minimal documentation.
        All games are playable on itch.io:

        <a>sine-surfer</a> I developed solo.
        <a>fruitfall</a> was co-developed with Mrinmoyee Mishra.
        <a>Downhill Ski</a> was created by Allan Moua, Manny Fluss and I
    </p>
    `,
  },
  {
    title: "Bugsy Battle",
    subhead: "A turn-based tactical RPG Demo",
    skills: ["Godot", "GDScript", ],
    roles: ["Programmer", "Designer"],
    url: "bugsy-battles",
    img: "https://img.itch.zone/aW1nLzEwNzM0MDkwLnBuZw==/315x250%23c/mDSgQd.png"

  },
  {
    title: "Game Jam Games",
    subhead: "",
    skills: ["Phaser", "Javascript", "Unity", "C#", "Puzzle Design", "Narrative Design"],
    roles: ["Programmer", "Designer", "Artist"],
    url: "jam-games",
    img: "https://img.itch.zone/aW1nLzEyNzM4MDQ0LnBuZw==/315x250%23c/zne%2FP3.png",
    page: `
    <p> I've taken part in the GMTK Game Jam every year since 2022! (so for 2 years now) </p>
    <p> In 2022, I made <a href="https://sevenstudios.itch.io/boost-or-bust"> Boost or Bust </a> 
    a silly infinite platform jumper about an alien with a broken jetpack. It was my first game jam, and I had a lot of fun</p>
    <p> In 2023, with the theme of "role reversal" in mind, I made this <a href="https://sevenstudios.itch.io/where-is-the-dungeon">puzzle game</a> where the player has to make a level for 
    a pre-programmed character. I leared alot about making a level editor, and switching between "edit" and "play" modes.
    `
  }

];

export default gameProjects;