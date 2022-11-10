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
  
  header .heading-${id} {
    font-size: 1.25em;
    font-weight: 500;
  }

  .illustration-${id} {
    min-height: 150px;
    background-color: #111921;
    border-radius: 8px;
    overflow: hidden;
  }

  .illustration-${id} img {
    width: 100%;
    height: 100%;
    max-height: 200px;
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

  .choices-${id} .choice-${id} {
    min-width: 4em;
    min-height: 48px;
    background-color: #111921;
    padding: 1em;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transition: 300ms;
  }

  .choices-${id} .choice-${id}:hover {
    opacity: .5;
  }
  
  .justification-${id} {
    background-color: #fff;
    padding: 1.5em 1.5em 1.5em 5em;
    border-radius: 7px;
    position: relative;
    color: var(--dark);
    overflow: hidden;
  }

  .justification-${id} p {
    color: #111921;
    line-height: 1.5em;
  }

</style>`;

export default getQuizCSS;
