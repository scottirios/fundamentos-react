import { HStack } from "@chakra-ui/react";
import { BiMoney } from "react-icons/bi";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaGraduationCap,
} from "react-icons/fa6";
import { IoIosBook, IoMdPeople } from "react-icons/io";
import { IndicatorCard } from "@/components/IndicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do Sistema Universitário"
    >
      <HStack gap={8}>
        <IndicatorCard
          label="Total de Estudantes"
          value={2847}
          indicator="+12% este mês"
          icon={IoMdPeople}
          colorPalette="blue"
        />

        <IndicatorCard
          label="Professores Ativos"
          value={198}
          indicator="+3% este mês"
          icon={FaGraduationCap}
          colorPalette="green"
        />

        <IndicatorCard
          label="Cursos Oferecidos"
          value={24}
          indicator="+2% este mês"
          icon={IoIosBook}
          colorPalette="purple"
        />

        <IndicatorCard
          label="Taxa de Aprovação"
          value={0.892}
          style="percent"
          maximumFractionDigits={2}
          minimumFractionDigits={2}
          indicator="+2.1% este mês"
          icon={FaArrowTrendUp}
          colorPalette="orange"
        />

        <IndicatorCard
          label="Taxa de Reprovação"
          value={0.108}
          style="percent"
          maximumFractionDigits={2}
          minimumFractionDigits={2}
          indicator="-1% este mês"
          icon={FaArrowTrendDown}
          colorPalette="red"
        />

        <IndicatorCard
          label="Mensalidade Média"
          value={2.568}
          style="decimal"
          indicator="+3.9% este mês"
          icon={BiMoney}
          colorPalette="green"
        />
      </HStack>
    </DefaultLayout>
  );
}
