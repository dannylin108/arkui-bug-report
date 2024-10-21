import { Container, HStack } from 'styled-system/jsx';
import { Tooltip } from './components/ui/tooltip';
import { Portal } from 'solid-js/web';
import { Button } from './components/ui/button';
import { ark } from '@ark-ui/solid/factory'

export const App = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <HStack justify="center" gap="4">
        <Basic />
        <AsButton />
        <AsDiv />
      </HStack>
    </Container>
  )
}


const Basic = () => (
  <Tooltip.Root>
    <Tooltip.Trigger>Default</Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>I am a tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
)

const AsButton = () => (
  <Tooltip.Root>
    <Tooltip.Trigger asChild={(props) => <Button variant="outline" {...props}/>}>
      asChild-Button
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>I am an asButton tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
)

const AsDiv = () => (
  <Tooltip.Root>
    <Tooltip.Trigger asChild={(props) => <ark.div {...props}/>}>
      Hover Me
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>I am an asDiv tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
)