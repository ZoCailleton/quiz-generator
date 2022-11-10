const getQuizCSS = (id) => `<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600&display=swap');

  .questions-${id} {
    background-color: red;
  }
  
  .justification-${id} {
    background-color: #fff;
    padding: 1.5em 1.5em 1.5em 5em;
    border-radius: 7px;
    position: relative;
    color: #1e2731;
    overflow: hidden;
  }

  .justification-${id} p {
    line-height: 1.5em;
  }

</style>`;

export default getQuizCSS;
