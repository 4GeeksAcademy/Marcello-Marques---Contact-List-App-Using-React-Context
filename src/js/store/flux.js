const getState = ({ getStore, getActions, setStore }) => {
    const baseUrl = "https://playground.4geeks.com/apis/fake/contact/agenda/";

    return {
        store: {
            contact: [],
            agendaData: [] // Initialize agendaData in the store
        },
        actions: {
            getContacts: () => {
				fetch(baseUrl)
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