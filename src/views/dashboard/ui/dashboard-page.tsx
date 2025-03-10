'use client'

import CourceReportChart from '@/views/dashboard/ui/course-report-chart'
import EarningsChart from '@/views/dashboard/ui/earnings-chart'
import { Avatar, Paper } from '@mantine/core'
import { BookOpen, CalendarCheck, CheckSquareOffset, Users, type Icon } from '@phosphor-icons/react'

type TStatisticsItem = {
  title: string
  description: string
  renderIcon: (props: React.ComponentPropsWithoutRef<Icon>) => React.ReactNode
}

function DashboardPage() {
  const statistics: TStatisticsItem[] = [
    {
      title: '9',
      description: 'Courses',
      renderIcon: (_props) => <BookOpen {..._props} />,
    },
    {
      title: '169',
      description: 'Students',
      renderIcon: (_props) => <Users {..._props} />,
    },
    {
      title: '64',
      description: 'Submissions',
      renderIcon: (_props) => <CalendarCheck {..._props} />,
    },
    {
      title: '36',
      description: 'Quiz attempts',
      renderIcon: (_props) => <CheckSquareOffset {..._props} />,
    },
  ]

  return (
    <div className="grid grid-cols-4 grid-rows-[1fr_1fr_auto_auto] gap-4">
      <div className="w-full flex justify-between col-span-4">
        <span className="text-xl font-bold">Overview</span>
        <Paper withBorder className="p-3 flex items-center">
          <div className="text-right mr-2">
            <div className="font-bold">Jared Nolan</div>
            <div className="description">yjerde@nolah.com</div>
          </div>
          <Avatar src="/images/avatar-mock.jpeg" size={50}></Avatar>
        </Paper>
      </div>
      {statistics.map(({ title, renderIcon, description }) => (
        <Paper key={title} className="p-4 flex rounded-lg col-span-1" withBorder>
          {renderIcon({ size: 50, className: 'text-primary-400 mr-4' })}
          <div>
            <div className="font-bold text-lg">{title}</div>
            <div className="description">{description}</div>
          </div>
        </Paper>
      ))}
      <EarningsChart className="col-span-2 py-5 pr-10 pl-2" />
      <CourceReportChart className="col-span-2 py-5 pr-10 pl-2" />
    </div>
  )
}

export { DashboardPage }
