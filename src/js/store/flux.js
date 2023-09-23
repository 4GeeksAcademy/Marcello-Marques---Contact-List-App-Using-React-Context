const getState = ({ getStore, getActions, setStore }) => {
    const baseUrl = "https://playground.4geeks.com/apis/fake/contact/";

    return {
        store: {
            contact: [],
                upDateContactInfo: [] // Initialize agendaData in the store
        },
        actions: {
            newContact: (name,email,address,phone) =>{
                fetch(baseUrl,{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(
                        {
                        "full_name": name,
                        "email": email,
                        "agenda_slug": "Marcello-agenda",
                        "address":address,
                        "phone":phone
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
                },
                deleteContact: (id) =>{
                    fetch(baseUrl + id, {
                        method: "DELETE",
                       })                    
                    .then((response)=>response.json());
                },
            getUpdateContact: (upDateData) =>{
                    setStore({ upDateContactInfo: upDateData })
            }
        },
    };
};

export default getState;