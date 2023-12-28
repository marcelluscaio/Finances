"use client";
import * as Form from "@radix-ui/react-form";

const MyForm = () => (
	<Form.Root>
		<Form.Field name="evento">
			<Form.Label>Evento</Form.Label>
			<Form.Control />
			{/* <Form.Message /> */}
			{/* <Form.ValidityState  /> */}
		</Form.Field>
		<Form.Field name="valor">
			<Form.Label>Valor</Form.Label>
			<Form.Control />
		</Form.Field>
		<Form.Field name="origem">
			<Form.Label>Origem</Form.Label>
			<Form.Control />
		</Form.Field>

		{/* <Form.Message /> */}
		{/* <Form.ValidityState  /> */}

		<Form.Submit>Inserir</Form.Submit>
	</Form.Root>
);

export default MyForm;
