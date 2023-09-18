import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [agendaUrls, setAgendaUrls]=useState ([]);
	const baseUrl = "https://playground.4geeks.com/apis/fake/contact/agenda/";
	const fetchAgendaData = ()=>{
		store.contact.forEach((item, index)=>{
			fetch(baseUrl+item)
			.then((received) => received.json())
			.then((data) => setAgendaUrls([...agendaUrls,data]))
			.catch ((error)=>{
			 console.error(`Error fetching data for: ${error.message}`);
			})
		})		 
	}
	useEffect(()=>{
	fetchAgendaData();
	},[])
	console.log("store", store);
	console.log(agendaUrls, "Agenda URLs");
	const [state, setState] = useState({
	showModal: false
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contact ? store.contact.map((item,index)=>{
							return(
								<div>
									<ContactCard onDelete={() => setState({ showModal: true })} />
								</div>
							)
						}):"No contact"}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};