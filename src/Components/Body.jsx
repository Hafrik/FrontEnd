import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ResetPassword from "../routes/Password/ResetPassword";

const Body = () => {
	return (
		<body>
			<NavBar />
			<ResetPassword />
			<Footer />
		</body>
	);
};

export default Body;
