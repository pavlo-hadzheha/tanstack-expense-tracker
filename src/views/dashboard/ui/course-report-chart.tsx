'use client'

import { cn } from '@/shared/lib/utils';
import { RadialBarChart } from '@mantine/charts';
import { Paper, Select } from '@mantine/core';
import { useState } from 'react';

export default function CourceReportChart({ className }: { className?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const data = [
    {
      name: 'Not started',
      value: 159,
      color: 'primary.2'
    },
    {
      name: 'In Progress',
      value: 5,
      color: 'primary.4'
    },
    {
      name: 'Completed',
      value: 0,
      color: 'primary'
    },
  ];

  return (
    <Paper withBorder className={cn(className, 'relative')}>
      <div className='ml-3 mb-10 flex justify-between'>
        <div>Cource report</div>
        <Select
          value={selectedCategory} 
          onChange={setSelectedCategory}
          placeholder='Pick course'
          data={['Biology', 'Meth']}
        />
      </div>

      <RadialBarChart
        data={data}
        dataKey="value"
        endAngle={-180}
        h={350}
        emptyBackgroundColor='gray.0'
        barSize={24}
        radialBarChartProps={{ innerRadius: '50%' }}
      />
    </Paper>
  );
}