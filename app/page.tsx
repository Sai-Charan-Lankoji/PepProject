"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const submissionData = [
  { month: 'Feb', NotSubmitted: 500, Submitted: 20 },
  { month: 'Mar', NotSubmitted: 500, Submitted: 25 },
  { month: 'Apr', NotSubmitted: 500, Submitted: 30 },
  { month: 'May', NotSubmitted: 500, Submitted: 35 },
  { month: 'Jun', NotSubmitted: 500, Submitted: 40 },
  { month: 'Jul', NotSubmitted: 0, Submitted: 500 },
  { month: 'Aug', NotSubmitted: 500, Submitted: 45 },
  { month: 'Sep', NotSubmitted: 500, Submitted: 50 },
  { month: 'Oct', NotSubmitted: 500, Submitted: 55 },
];

const feePaymentData = [
  { semester: 'I-I', NotPaid: 50, Paid: 350 },
  { semester: 'I-II', NotPaid: 60, Paid: 600 },
  { semester: 'II-I', NotPaid: 40, Paid: 340 },
  { semester: 'II-II', NotPaid: 50, Paid: 630 },
  { semester: 'III-I', NotPaid: 900, Paid: 340 },
  { semester: 'III-II', NotPaid: 70, Paid: 560 },
  { semester: 'IV-I', NotPaid: 30, Paid: 240 },
  { semester: 'IV-II', NotPaid: 40, Paid: 340 },
];

const passPercentageData = [
  { name: 'I Year', value: 19.6, color: '#4ade80' },
  { name: 'II Year', value: 21.5, color: '#60a5fa' },
  { name: 'III Year', value: 25.5, color: '#fbbf24' },
  { name: 'IV Year', value: 33.4, color: '#a78bfa' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Submission Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={submissionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="NotSubmitted" fill="#60a5fa" />
                <Bar dataKey="Submitted" fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Fee Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={feePaymentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semester" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="NotPaid" fill="#60a5fa" />
                <Bar dataKey="Paid" fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Overall Pass Percentage</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={passPercentageData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {passPercentageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}