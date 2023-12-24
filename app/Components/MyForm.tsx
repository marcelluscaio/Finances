"use client";
import * as Form from "@radix-ui/react-form";

const MyForm = () => (
	<Form.Root>
		<Form.Field name="Oi">
			<Form.Label>Teste</Form.Label>
			<Form.Control />
			{/* <Form.Message /> */}
			{/* <Form.ValidityState  /> */}
		</Form.Field>

		{/* <Form.Message /> */}
		{/* <Form.ValidityState  /> */}

		<Form.Submit />
	</Form.Root>
);

export default MyForm;
