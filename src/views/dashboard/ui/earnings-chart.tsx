import { AreaChart } from '@mantine/charts'
import { Paper } from '@mantine/core'

const data = [
  {
    date: 'Mar 22',
    value: 100,
  },
  {
    date: 'Mar 23',
    value: 50,
  },
  {
    date: 'Mar 24',
    value: 65,
  },
  {
    date: 'Mar 25',
    value: 40,
  },
  {
    date: 'Mar 26',
    value: 140,
  },
]

export default function EarningsChart({ className }: { className?: string }) {
  const unpaid = 200
  const total = useMemo(() => data.reduce((prev, curr) => prev + curr.value, 0), [])

  return (
    <Paper withBorder className={className}>
      <div className="ml-3 mb-10">
        <div>Earnings</div>
        <div className="flex gap-4">
          <div className="flex items-center">
            <span className="text-gray text">Total:&nbsp;</span>
            <span className="text-xl font-medium text-primary">${total}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray">Unpaid:&nbsp;</span>
            <span className="text-xl font-medium text-gray-800">${unpaid}</span>
          </div>
        </div>
      </div>
      <AreaChart
        data={data}
        dataKey="date"
        h={300}
        series={[{ name: 'value', color: 'primary' }]}
        valueFormatter={(_value) => `$${_value}`}
        strokeWidth={3}
        fillOpacity={0.6}
        withDots={false}
        curveType="monotone"
      />
    </Paper>
  )
}
