const getState = ({ getStore, getActions, setStore }) => {
    const baseUrl = "https://playground.4geeks.com/apis/fake/contact/";

    return {
        store: {
            contact: [],
            agendaData: [] // Initialize agendaData in the store
        },
        actions: {
            createAgenda: () =>{
                fetch(baseUrl,{
                    method:"POST",
                    headers:{"content-type":"aplication/json"},
                    body:JSON.stringify(
                        {
                        "full_name": "Dave Bradley",
                        "email": "dave@gmail.com",
                        "agenda_slug": "Marcello-agenda",
                        "address":"47568 NW 34ST, 33434 FL, USA",
                        "phone":"7864445566"
                    })
                })
            },
            getContacts: () => {
				fetch(baseUrl+"agenda/Marcello-agenda")
                    .then((received) => received.json())
                    .then((data) => setStore({ contact: data }))
                    .catch ((error)=>{
                     console.error(`Error fetching data for: ${error.message}`);
                    }) 
                }
        },
    };
};

export default getState;