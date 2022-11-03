const getUniqId = () => {
  let id = Math.random().toString(16).slice(2);
  generatedIds.push(id);
  return id;
}

export default getUniqId;
