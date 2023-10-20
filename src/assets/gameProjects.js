const gameProjects = [
  {
    title: "Runner's Grave",
    subhead: "HTML5 Game Demo",
    dateRange: "Jun 2022--",
    roles: ["Solo Developer", "Programmer", "Designer", "Artist",],
    skills: ["Javascript", "Phaser"],
    summary: `Arcade-style maze runner made in Javascript with Phaser.js
    Randomly generated mazes using depth-first backtracker
    Data-driven level design using a JSON with level parameters`,
    img: "/src/assets/runners-grave/runnergrave.png",
    url: "runners-grave",
    page: `
      
      <div>
        <img width="30%" src="/src/assets/runners-grave/run.gif">
        <img width="30%" src="/src/assets/runners-grave/fight.gif">
        <img width="30%" src="/src/assets/runners-grave/die.gif">

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

    <p><a href="https://sevenstudios.itch.io/antimony">Download from itch.io</a></p>

    <h3>Video Playthrough</h3>
    <iframe src="https://drive.google.com/file/d/1bJGW34wHkqd-GVx7Hjl4vabqendFiupj/preview" width="854" height="480" allow="autoplay"></iframe>

    `
  },
  {
    title: "The Solar Punk",
    subhead: "Isometric Action-Adventure Prototype",
    roles: ["Programmer", "Designer"],
    skills: ["Unity", "Unity3D", "C#", ],
    url: "solar-punk",
    img: "https://img.itch.zone/aW1nLzExNjc4MjIxLnBuZw==/315x250%23c/iAU2ta.png",
    page: `

    <img class="screenshot" src="src/assets/solar-punk/screen1.png">
    <img class="screenshot" src="src/assets/solar-punk/screen3.png">

    <p>A movement-based adventure game set in a Solarpunk post-apocalypse where the water levels have risen dramatically. 
    Use your solar-powered board to race through the remnants of the old civilization in an attempt to reconnect society.</p>
    <p>Playable with either keyboard or gamepad controls.</p>
    <p>Made for CMPM/ARTG 171 at UCSC</p>
    
    <p> We assembled two levels of greyboxed gameplay, and an ending scene for this demo </p>
    <p> For this project I designed and programmed the turret enemies, coded the UI, implemented usability/UX improvements, and sound playback.
    I also enabled seamless Gamepad support using the new Unity Input System </p>

    <h3>Credits</h3>
    <ul>
    <li>Ethan Nguyen - Programming, Music</li>
    <li>Ian Cowan - Programming</li>
    <li>Kofi Quansah - Programming</li>
    <li>Mrinmoyee Mishra - Programming</li>
    <li>Robert Newlin - 3D Art</li>
    <li>Omar Bahlool - 3D Art</li>
    </ul>

    <p><a href="https://steerevo.itch.io/the-solar-punk">Download from itch.io</a></p>

    `
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
    </p>
    <p> 
        As a designer, I worked and iterated on the overall gameplay loop, as well as the control schemes and movement.
        Thanks to advice and guidance from my class professor, I made the game playable with mouse and keyboard, only the mouse, or touch on mobile.
    </p>
    <p>
        As lead programmer, I worked on simplyfing minigame and event implementation using polymorphism through an expandable Activity class.
        I also implemented the main countdown and data meters using timers, and had a hand in most minigames.
    </p>
    <h3>Credits</h3>
    <ul>
          <li>Programming: Ian Cowan and Jason Chen</li>
          <li>Art: Nic Stepp, Chris Pau, and Ian</li>
          <li>Music: Chris</li>
          <li>Sounds: Chris and Ian</li>
        </ul>
    
    <a href="https://chrispy-chxcken.itch.io/ss-odyssey"> Play on itch.io</a>
    `
  },
  {
    title: "One-Button Microgames",
    subhead: "A collection of three small games playable with only one button",
    skills: ["Typescript"],
    roles: ["Programmer", "Designer"],
    url: "one-button-games",
    img: "/src/assets/one-button/microgames.png",
    page: `
    <p> 
        These web-base games were all completed in the span of two weeks, from learning about the library to implementation. 
        The library used to make them is <a href="">crisp-game-lib</a>, a fun minigame engine for typescript.
        The process was a great excercise in ideation under constraints, iterating on a design, and working with a new tool with minimal documentation.
        All games are playable on itch.io:
    </p>
      <a href="https://sevenstudios.itch.io/sine-surfer"><img src="src/assets/one-button/sine-surfer.gif"></a>
      <a href="https://sevenstudios.itch.io/fruitfall"><img src="src/assets/one-button/fruitfall.gif"></a>
      <a href="https://sevenstudios.itch.io/downhill-ski"><img src="src/assets/one-button/downhill-ski.gif"></a>
      <ul>
      <li><a href="https://sevenstudios.itch.io/sine-surfer">sine-surfer</a> I developed solo.</li>
      <li><a href="https://sevenstudios.itch.io/fruitfall">fruitfall</a> was co-developed with Mrinmoyee Mishra</li>
      <li><a href="https://sevenstudios.itch.io/downhill-ski">Downhill Ski</a> was created by Allan Moua, Manny Fluss and I</li>
      </ul>
    `,
  },
  {
    title: "Bugsy Battle",
    subhead: "A turn-based tactical RPG Demo",
    skills: ["Godot", "GDScript",],
    roles: ["Programmer", "Designer"],
    url: "bugsy-battles",
    img: "https://img.itch.zone/aW1nLzEwNzM0MDkwLnBuZw==/315x250%23c/mDSgQd.png",
    page: `
    <p>In this tactical turn-based RPG command the bee fighters and help them defend the hive from the evil wasps!</p>
    <p>Made for ARTG/CMPM 170 at UC Santa Cruz</p>
    <p>Art and Animation by Emery Plyler and Sadie Hower</p>
    <p>Programming by Ian Cowan,&nbsp;Salil Tantamjarik,&nbsp;Ethan Nguyen,&nbsp;Nathan Laureta, and&nbsp;Christopher Pau.</p>
    <p>Music and SFX by Sadie Hower</p>
    `

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