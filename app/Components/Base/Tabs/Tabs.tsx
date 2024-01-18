"use client";

import * as Tabs from "@radix-ui/react-tabs";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Buttons";

export default function TabsComponent() {
	const triggers = ["Entries", "Accounts", "Labels", "Budget"];

	return (
		<Tabs.Root
			defaultValue="tab1"
			orientation="horizontal"
		>
			<Tabs.List aria-label="tabs example">
				{triggers.map((trigger, index) => (
					<Tabs.Trigger
						className="button"
						value={`tab${index + 1}`}
						key={index}
					>
						{trigger}
					</Tabs.Trigger>
				))}
				{/* <Tabs.Trigger
					className="button"
					value="tab1"
				>
					Entries
				</Tabs.Trigger> */}
				{/* 
				<Tabs.Trigger value="tab2">Accounts</Tabs.Trigger>
				<Tabs.Trigger value="tab3">Labels</Tabs.Trigger>
				<Tabs.Trigger value="tab4">Budget</Tabs.Trigger> */}
			</Tabs.List>
			<Tabs.Content value="tab1">
				<form>
					<h2>Add Entry</h2>
					<TextInput id="entry-description">Description</TextInput>
					<TextInput id="entry-amount">Amount</TextInput>
					<TextInput id="entry-label">Label</TextInput>
					<TextInput id="entry-account">Account</TextInput>
					<TextInput id="entry-date">Date</TextInput>
					<Button>Create</Button>
				</form>
			</Tabs.Content>
			<Tabs.Content value="tab2">
				<form>
					<div>
						<label>Account</label>
						<input />
					</div>
					<div>
						<label>Total</label>
						<input />
					</div>
					<Button>Create</Button>
				</form>
			</Tabs.Content>
			<Tabs.Content value="tab3">
				<form>
					<h2>Add Label</h2>
					<TextInput id="label">Label</TextInput>
					<Button>Create</Button>
				</form>
			</Tabs.Content>
			<Tabs.Content value="tab4">
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
					<Button>Create</Button>
				</form>
			</Tabs.Content>
		</Tabs.Root>
	);
}
