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

      <p><a href="https://sevenstudios.itch.io/runners-grave">Play now on itch.io!</a></p>
      `
    
  },
  {
    title: "Antimony",
    subhead: "narrative adventure",
    skills: ["Unity", "C#", "Puzzle Design", "Narrative Design"],
    roles: ["Programmer", "Designer", "Writer"],
    url: "antimony",
    img: "https://img.itch.zone/aW1nLzEyNjYyODM2LnBuZw==/315x250%23c/rPNGju.png",
    page: `<p> hello world </p>`
  },
  {
    title: "The Solar Punk",
    subhead: "action",
    url: "solar-punk",
    img: "https://img.itch.zone/aW1nLzExNjc4MjIxLnBuZw==/315x250%23c/iAU2ta.png",
    page: `<p> hello world </p>`
  },
  {
    title: "Toki Pona Tools",
    subhead: "A browser extension for looking up words in the constructed language Toki Pona",
    url: "toki-pona",
    roles: ["Solo Developer", "Designer", "Programmer"],
    img: "https://img.itch.zone/aW1nLzExNjc4MjIxLnBuZw==/315x250%23c/iAU2ta.png",
    page: `
    <header>
    <h1>o kama pona a!</h1>
    <h1 class="linja-pona">o kama+pona a!</h1>
    <p>
        Toki Pona is a constructed language with fewer than 200 words. 
        It's concept encourages the simplification of thoughts down to their 
        basic meanings. The process of learning the language inspired me to 
        create a couple projects that might be useful to other learners.
    </p>
</header>
<main>
    <section>
        <h3>
            Toki Pona Dictionary - <em>ilo nimi pi toki pona</em>
        </h3>
        <p>
            A web extension for looking up words in the language
        </p>
        <p>
            Available for <a href="https://chrome.google.com/webstore/detail/toki-pona-dictionary/cccekjhkcfnbfdkimklpaednfcekcbac?hl=en&authuser=2">Google Chrome</a> and 
            <a href="https://addons.mozilla.org/en-US/firefox/addon/toki-pona-dictionary/">Firefox</a>,
            or visit the <a href="https://github.com/IanC27/ilo_nimi_pi_toki_pona">source code</a>
        </p>
        <img src="/src/assets/toki/dict-screenshot-1.png" alt="a screenshot of the extention's popup showing the definition, emoji, and other info for the toki pona word 'sin'">
        <img src="/src/assets/toki/settings.PNG" alt="a screenshot of the extention's settings page">

        <p>
            The extension can display definitions in multiple languages, show different symbols, and play audio clips of pronunciation.
            It will automatically find the definition of the highlighted word when clicked, and can autoplay the pronounciation as well.
            It is only possible thanks to the online database of words 
            <a href="https://linku.la/about/">Linku</a> and the community members that build 
            and support it.
        </p>
        

    </section>
    <section>
        <h3>Kindle Dictionaries for Toki Pona</h3>
        <p>
            When I started trying to read books in Toki Pona while still 
            new to the language, I found myself repeatedly having to 
            look up words on another device, interrupting the experience.
            Unlike with English texts, I couldn't quickly get a definition by
            highlighting a word. After researching and finding out how to import
            and create a custom kindle dictionary, I got to work creating one
            using existing resources 
            (thanks again to <a href="https://linku.la/about/">Linku</a>)
        </p>
        <p>to get dictionaries you can either 
            <a href="https://github.com/IanC27/lipu_nimi_pi_toki_pona">build from source</a> 
            or download one from 
            <a href="https://github.com/IanC27/lipu_nimi_pi_toki_pona/releases">releases</a></p>
    </section>
</main>
    `
  }
];

export default gameProjects;