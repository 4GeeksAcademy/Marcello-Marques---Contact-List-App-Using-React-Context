import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
	showModal: false
	});
const [deleteContactId, setDeleteContactId] = useState (0);
const [upDateContact, setUpDateContact] = useState ({});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link 
					onClick={actions.upOrDelete("create")}
					className="btn btn-success"
					to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contact ? store.contact.map((item,index)=>{
							return(
								<div>
									<ContactCard 
									data={item}
									onDelete={(id) => {
									  	setDeleteContactId(id)
										setState({ showModal: true })
										}
									}																				
									upDateContact={(data) =>{
										
										setUpDateContact(data)
										setState({ showModal: true })										
									}
								}

								 />
								</div>
							)
						}):"No contact"}
					</ul>
				</div>
			</div>
			<Modal
			show={state.showModal} 
			onClose={() => setState({ showModal: false })} 
			id={deleteContactId}
			
			
			/>
		</div>
	);
};