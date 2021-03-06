import { Redirect, Link } from "react-router-dom";

import Masthead from "../../components/Masthead";

import Auth from '../../utils/auth';

function Admin() {
	if (!Auth.loggedIn()) {
		return <Redirect to="/login" />;
	}

	const name = Auth.getProfile().data.name;

	return (
		<>
			<Masthead title="Admin Dashboard" />

			{Auth.loggedIn() && Auth.isAdmin() ? (
				<div>
					<h2>Hello {name}</h2>
					<Link className="btn btn-primary m-3" to="/admin/add-categories">Categories</Link>
					<Link className="btn btn-primary m-3" to="/admin/add-products">Products</Link>
				</div>
			) : <h2>Not logged in</h2>}
		</>
	);
}

export default Admin;