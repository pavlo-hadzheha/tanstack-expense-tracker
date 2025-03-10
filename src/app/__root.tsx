import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { DefaultLayout } from '@/core/layouts/default-layout'
import { MantineConfigProvider } from '@/core/providers'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <MantineConfigProvider>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>

      <TanStackRouterDevtools position="bottom-right" />
    </MantineConfigProvider>
  )
}
