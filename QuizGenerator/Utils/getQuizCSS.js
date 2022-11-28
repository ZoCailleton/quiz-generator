const getQuizCSS = (id) => `<style>

  --dark: #1e2731;

  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600&display=swap');

  .questions-wrapper-${id} {
    display: grid;
    gap: 2em;
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
  header .heading-${id} {
    font-size: 1.25em;
    font-weight: 500;
  }
  .illustration-${id} {
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
  }
  .choice-${id}.photo-${id} {
    flex: 1 1 300px;
    flex-direction: column;
  }
  .choice-${id}.video-${id} {
    flex-direction: column;
  }
  .choice-${id}:hover {
    opacity: .5;
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
    padding: 1.5em 1.5em 1.5em 5em;
    border-radius: 7px;
    display: none;
    position: relative;
    color: var(--dark);
    overflow: hidden;
  }
  .justification-${id}.active {
    display: block;
  }
  .justification-${id} p {
    color: #111921;
    line-height: 1.5em;
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
  }
  .controls-${id} .control-${id}:hover {
    opacity: .5;
  }
</style>`;

export default getQuizCSS;
