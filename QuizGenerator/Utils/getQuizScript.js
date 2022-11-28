const getQuizScript = id => `
<script>
  (function(){
    alert(${id})
  })();
</script>
`;

export default getQuizScript;
