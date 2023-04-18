const heading = React.createElement("h1", { id: "heading" }, [
	React.createElement("div", { id: "subheading" }, "I am a  child of h1"),
	React.createElement(
		"div",
		{ id: "subheading2" },
		"I am a second child of h1"
	),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
console.log(root.render(heading));
root.render(heading);
