import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	console.log(store, "store");
	const [state, setState] = useState({
	showModal: false
	});
const [deleteContactId, setDeleteContactId] = useState (0);
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
							console.log(item, "Item");
							return(
								<div>
									<ContactCard data={item}onDelete={(id) => {
										setDeleteContactId(id)
										 setState({ showModal: true })}} />
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