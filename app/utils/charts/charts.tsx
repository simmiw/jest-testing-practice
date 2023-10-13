"use client";

import { PieChart, Pie, Cell } from "recharts";

interface StudentsData {
  firstName: string;
  lastName: string;
  email: string;
  physics: number;
  chemistry: number;
  mathematics: number;
  id: number;
}

interface DonutChartsProbs {
  data: StudentsData[];
}

export default function DonutChart({ data }: DonutChartsProbs) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const passingScore = 70;

  return (
    <>
      {data ?data.map((student) => (
        <div key={student.id}>
          {<span>{student.firstName}</span>}
          <PieChart width={800} height={400}>
            <Pie
              data={[
                { subject: "Physics", value: student.physics },
                { subject: "Chemistry", value: student.chemistry },
                { subject: "Mathematics", value: student.mathematics },
              ]}
              dataKey="value"
              cx={300}
              cy={200}
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={3}>
              {student.physics !== 0 && <Cell fill={COLORS[0]} />}
              {student.chemistry !== 0 && <Cell fill={COLORS[1]} />}
              {student.mathematics !== 0 && <Cell fill={COLORS[2]} />}
              <Cell fill={COLORS[3]} />
            </Pie>
          </PieChart>
        </div>
      )):null}
    </>
  );
}
