const getQuizCSS = (id) => `<style>

  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600&display=swap');

  .questions-wrapper-${id} {
    display: grid;
    gap: 2em;
    font-family: 'Fira Sans';
  }
  .questions-wrapper-${id} * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .question-${id} {
    background-color: #1e2731;;
    padding: 2em;
    border-radius: 15px;
    display: none;
    flex-direction: column;
    gap: 1.5em;
    color: #fff;
  }
  .question-${id}.active {
    display: flex;
  }
  .question-${id} .index {
    display: flex;
    gap: .5em;
  }
  .question-${id} .index div {
    width: 1em;
    height: 1em;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 50%;
  }
  .question-${id} .index div.active {
    background-color: #fff;
  }
  .header-${id} {
    display: flex;
    justify-content: space-between;
  }
  .header-${id} .index-${id} {
    display: flex;
    gap: .5em;
  }
  .header-${id} .index-${id} div {
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 10px;
    opacity: .5;
  }
  .header-${id} .index-${id} div.active {
    width: 30px;
    opacity: 1;
  }
  .heading-${id} {
    font-size: 1.25em;
    font-weight: 500;
  }
  .illustration-${id} {
    width: 100%;
    min-height: 150px;
    max-height: 200px;
    background-color: #111921;
    border-radius: 8px;
    overflow: hidden;
  }
  .illustration-${id} img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content-${id} {
    display: grid;
    gap: 1em;
  }
  .content-${id} .heading-${id} {
    font-size: 1.5em;
  }
  .choices-${id} {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
  .choice-${id} {
    min-width: 4em;
    min-height: 48px;
    background-color: #111921;
    padding: 1em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: .5em;
    position: relative;
    cursor: pointer;
    user-select: none;
    animation-duration: 500ms;
    animation-iteration-counts: 1;
    animation-fill-mode: forwards;
  }
  .choice-${id}:not(.reveal-${id}):hover {
    opacity: .5;
  }
  .choice-${id}.reveal-${id}.true {
    outline: 2px solid green;
    animation-name: yep;
  }
  @keyframes yep {
    25% {
      transform: scale(.7);
    }
    50% {
      transform: scale(.9);
    }
    75% {
      transform: scale(.8);
    }
    100% {
      transform: scale(1);
    }
  }
  .choice-${id}.reveal-${id}.false {
    outline: 2px solid red;
    animation-name: nope;
  }
  @keyframes nope {
    25% {
      transform: translateX(-1em);
    }
    50% {
      transform: translateX(1em);
    }
    75% {
      transform: translateX(-.5em);
    }
    100% {
      transform: translateX(0em);
    }
  }
  .choice-${id}.photo-${id} {
    flex: 1 1 200px;
    flex-direction: column;
  }
  .choice-${id}.video-${id} {
    flex: 1 1 200px;
    flex-direction: column;
  }
  .choice-${id}.video-${id} iframe {
    width: 100%;
    max-height: 100px;
  }
  .choice-${id} img {
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }
  .choice-${id} .state-${id} {
    width: 10px;
    height: 10px;
    background-color: #333333;
    border-radius: 50%;
  }
  .choice-${id} .state-${id}.true {
    background-color: green;
  }
  .choice-${id} .state-${id}.false {
    background-color: red;
  }
  .justification-${id} {
    background-color: #fff;
    border-radius: 7px;
    display: none;
    position: relative;
    color: var(--dark);
    overflow: hidden;
  }
  .justification-${id}.active-${id} {
    display: flex;
  }
  .justification-${id} .side-${id} {
    height: 100%;
    background-color: #111921;
    padding: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .justification-${id} .side-${id} .info-box-${id} {
    min-width: 1.5em;
    height: 1.5em;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: .75em;
    color: #111921;
    font-family: 'Fira Sans';
    font-weight: 500;
  }
  .justification-${id} p {
    padding: 1.5em;
    color: #111921;
    line-height: 1.5em;
  }
  .justification-${id} p .intro-${id} {
    display: none;
  }
  .justification-${id} p .intro-${id}.active {
    display: inline-block;
  }
  .final-screen-${id} {
    width: 100%;
    height: 100px;
    background-color: red;
  }
  .controls-${id} {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
  .controls-${id} .control-${id} {
    background-color: #1e2731;
    padding: 1.5em;
    border: 0;
    border-radius: 8px;
    font-size: 1em;
    color: #fff;
    font-family: 'Fira Sans';
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
  .controls-${id} .control-${id}.disabled-${id} {
    opacity: .5;
    cursor: default;
  }
  .controls-${id} .control-${id}:hover {
    background-color: #19212b;
  }
</style>`;

export default getQuizCSS;
