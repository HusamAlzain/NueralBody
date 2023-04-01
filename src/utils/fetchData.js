export const exerciseOptions = {
  method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'a0707179cbmsh65f18c03725ea08p1e5580jsneb9ff24cf6a7',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
};




export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;

}