const api = "https://api.untappd.com/v4/user/beers";
const user = "seeila";
const client_id = "0EA22DB517F8236B59C8E2CC5884789D3240D5D2";
const client_secret = "BCB22A2739CAC50711B0852E5CD4D8122A4B2026";
const limit = 50;

export const getAllBeers = () => {
   let beers = [];

   for(let i=0; i < 150; i+=50) {
      fetch(`${api}/${user}?client-id=${client_id}&client_secret=${client_secret}&limit=${limit}&offset=${i}`).then(response => {
         return response.json();
      }).then(response => {
         beers.push(...response.response.beers.items);
      }).then(() => {
            if(beers.length > 100) {
               return beers;
            }
      });
   }
}

//  let beers = [];
//  for(let i=0; i < 150; i+=50) {
//     fetch(`https://api.untappd.com/v4/user/beers/seeila?client_id=0EA22DB517F8236B59C8E2CC5884789D3240D5D2&client_secret=BCB22A2739CAC50711B0852E5CD4D8122A4B2026&limit=50&offset=${i} `).then(response => {
//        return response.json();
//     }).then(response => {
//        beers.push(...response.response.beers.items);
//     }).then(response => {
//        if(beers.length > 100) {
//          this.setState({ allBeers : beers });
//        }
//     });
// }
