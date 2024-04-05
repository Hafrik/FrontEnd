import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ResetPassword } from "./routes/Password";

const router = createBrowserRouter([
	// Created a router to navigate users
	{
		path: "/",
		element: (
			<h1 style={{ color: "white" }}>
				This is where the homepage should be at
			</h1>
		),
	},
	{
		path: "/password",
		children: [
			{
				path: "reset",
				element: <ResetPassword />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
