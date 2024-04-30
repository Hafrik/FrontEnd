import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import forgetPassword from "../routes/Password/forgetPassword";

const Body = () => {
	return (
		<body>
			<NavBar />
			<forgetPassword />
			<Footer />
		</body>
	);
};

export default Body;
