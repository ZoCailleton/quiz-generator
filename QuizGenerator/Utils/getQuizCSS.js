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
    display: flex;
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
  .choice-${id}.reveal-${id}.true {
    outline: 2px solid green;
  }
  .choice-${id}.reveal-${id}.false {
    outline: 2px solid red;
  }
  .choice-${id}.photo-${id} {
    flex: 1 1 300px;
    flex-direction: column;
  }
  .choice-${id}.video-${id} {
    flex: 1 1 300px;
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
  .controls-${id} .control-${id}.disabled-${id} {
    opacity: .5;
    cursor: default;
  }
  .controls-${id} .control-${id}:hover {
    opacity: .5;
  }
</style>`;

export default getQuizCSS;
