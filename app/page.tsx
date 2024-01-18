import Form from "./Components/Sections/Form/Form";

export default function Home() {
	return (
		<main>
			<Form />
			<form>
				<h2>Add Label</h2>
				<div>
					<label>Label</label>
					<input />
				</div>
				<button>Create</button>
			</form>

			<form>
				<h2>Add Entry</h2>
				<div>
					<label>Description</label>
					<input />
				</div>
				<div>
					<label>Amount</label>
					<input />
				</div>
				<div>
					<label>Label</label>
					<input />
				</div>
				<div>
					<label>Account</label>
					<input />
				</div>
				<div>
					<label>Date</label>
					<input />
				</div>
				<button>Create</button>
			</form>

			<form>
				<h2>Register Budget</h2>
				<div>
					<label>Description</label>
					<input />
				</div>
				<div>
					<label>Amount</label>
					<input />
				</div>
				<button>Add</button>
				<table>{/* add items here */}</table>
				<button>Create</button>
			</form>
		</main>
	);
}
