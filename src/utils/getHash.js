const getHash = () => 
  // location.hash.split("")[2].toLocaleLowerCase()
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

export default getHash;
  