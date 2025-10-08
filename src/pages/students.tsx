import { HStack, VStack } from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { StudentsHeader } from "@/components/StudentsHeader";
import { DefaultLayout } from "@/layouts/DefaultLayout";

type Student = {
  name: string;
  course: string;
  semester: string;
  registration: string;
  actions: string;
};

const defaultData: Student[] = [
  {
    name: "Lucas Scotti",
    course: "Análise e Desenvolvimento de Sistemas",
    semester: "6° Semestre",
    registration: "2023014216",
    actions: "Estudante",
  },
];

const columnHelper = createColumnHelper<Student>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.name, {
    id: "name",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Nome</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.course, {
    id: "course",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Curso</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.semester, {
    id: "semester",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Semestre</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.registration, {
    id: "registration",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Matrícula</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.actions, {
    id: "actions",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Ações</span>,
    footer: (info) => info.column.id,
  }),
];

export default function Students() {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <HStack>
        <StudentsHeader />
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>

        {/*Estudante / Curso / Semestre / Matricula / Ações*/}
      </HStack>
    </DefaultLayout>
  );
}
