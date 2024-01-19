"use client";

import * as Tabs from "@radix-ui/react-tabs";
import TextInput from "../TextInput/TextInput";
import TextSelectInput from "../TextSelectInput/TextSelectInput";
import Button from "../Button/Buttons";
import Title from "../Title/Title";
import style from "./style.module.scss";

export default function TabsComponent() {
	const triggers = ["Entries", "Accounts", "Labels", "Budget"];
	console.log("Loguei! E eu sou cliente");
	return (
		<Tabs.Root
			className={style.tab}
			defaultValue="tab1"
			orientation="horizontal"
		>
			<Tabs.List
				className={style.list}
				aria-label="tabs example"
			>
				{triggers.map((trigger, index) => (
					<Tabs.Trigger
						className="button"
						value={`tab${index + 1}`}
						key={index}
					>
						{trigger}
					</Tabs.Trigger>
				))}
			</Tabs.List>
			<Tabs.Content value="tab1">
				<form>
					<Title
						size="small"
						level="h2"
					>
						Add Entry
					</Title>
					<TextInput id="entry-description">Description</TextInput>
					<TextInput id="entry-amount">Amount</TextInput>
					<TextSelectInput
						id="entry-label"
						label="Label"
						listItems={triggers}
					/>
					<TextInput id="entry-label">Label</TextInput>
					<TextInput id="entry-account">Account</TextInput>
					<TextInput id="entry-date">Date</TextInput>
					<Button>Create</Button>
				</form>
			</Tabs.Content>
			<Tabs.Content value="tab2">
				<Title
					size="small"
					level="h2"
				>
					Add Account
				</Title>
				<form>
					<TextInput id="account-account">Account</TextInput>
					<TextInput id="account-total">Total</TextInput>
					<Button>Create</Button>
				</form>
			</Tabs.Content>
			<Tabs.Content value="tab3">
				<form>
					<Title
						size="small"
						level="h2"
					>
						Add Label
					</Title>
					<TextInput id="label-label">Label</TextInput>
					<Button>Create</Button>
				</form>
			</Tabs.Content>
			<Tabs.Content value="tab4">
				<form>
					<Title
						size="small"
						level="h2"
					>
						Register Budget
					</Title>

					<TextInput id="budget-description">Description</TextInput>
					<TextInput id="budget-amount">Amount</TextInput>
					<Button>Add</Button>
					<table>{/* add items here */}</table>
					<Button>Create</Button>
				</form>
			</Tabs.Content>
		</Tabs.Root>
	);
}
