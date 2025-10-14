import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { StudentsHeader } from "@/components/StudentsHeader";
import Table from "@/components/Table";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <VStack align="flex-start">
        <StudentsHeader />
        <Table />

        {/*Estudante / Curso / Semestre / Matricula / Ações*/}
      </VStack>
    </DefaultLayout>
  );
}
