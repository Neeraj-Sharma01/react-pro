

const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{id:"head1"},"hello World"),React.createElement("h1",{id:"head2"},"hello World")]),React.createElement("div",{id:"child"},[React.createElement("h1",{id:"head1"},"hello World"),React.createElement("h1",{id:"head2"},"hello World")])]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);