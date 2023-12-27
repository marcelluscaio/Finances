import { Table } from "@radix-ui/themes";

export default function TableFunction() {
	return (
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.ColumnHeaderCell>Evento</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>Valor</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>Origem</Table.ColumnHeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				<Table.Row>
					<Table.RowHeaderCell>Conta Luz</Table.RowHeaderCell>
					<Table.Cell>R$36,60</Table.Cell>
					<Table.Cell>Conta Caio</Table.Cell>
				</Table.Row>

				<Table.Row>
					<Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
					<Table.Cell>zahra@example.com</Table.Cell>
					<Table.Cell>Admin</Table.Cell>
				</Table.Row>

				<Table.Row>
					<Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
					<Table.Cell>jasper@example.com</Table.Cell>
					<Table.Cell>Developer</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	);
}
