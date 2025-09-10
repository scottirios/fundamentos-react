import { Card, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiAward } from "react-icons/bi";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaCalendarDay,
  FaGraduationCap,
} from "react-icons/fa6";
import { IoIosBook, IoMdPeople } from "react-icons/io";
import { IndicatorCard } from "@/components/IndicatorCard";
import { RecentActivity } from "@/components/RecentActivity";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "Nova matrícula: Maria Silva - Engenharia de Software",
      time: "2 min atrás",
    },
    {
      id: 2,
      type: "grade",
      title: "Notas lançadas: Cálculo I - Prof. João Santos",
      time: "15 min atrás",
    },
    {
      id: 3,
      type: "course",
      title: "Novo curso criado: Análise de Ddoas",
      time: "1 hora atrás",
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "2 min atrás",
    },
  ];

  const iconMap: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: IoIosBook,
    calendar: FaCalendarDay,
  };

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
          label="Eventos Acadêmicos"
          value={18}
          indicator="+4 este mês"
          icon={FaCalendarDay}
          colorPalette="cyan"
        />
      </HStack>

      <HStack mt={8}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Atividades Recentes</Card.Title>
          </Card.Header>

          <Card.Body gap={10}>
            {recentActivities.map((activity) => {
              const ActivityIcon =
                iconMap[activity.type] ?? AiFillQuestionCircle;
              return (
                <RecentActivity
                  key={activity.id}
                  colorPalette="blue"
                  icon={ActivityIcon}
                  title={activity.title}
                  time={activity.time}
                />
              );
            })}
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}
