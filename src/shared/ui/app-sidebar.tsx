import { Button, NavLink } from '@mantine/core'
import { Plus, Rows } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

function AppSidebar() {
  return (
    <>
      <Button variant="filled" className="text-white" my={15} h={40}>
        <Plus className="mr-1" /> Create new course
      </Button>

      <NavLink component={Link} to="/" label="Overview" className="rounded-md" leftSection={<Rows size={24} />} />
    </>
  )
}

export { AppSidebar }
