import { Container, HStack } from 'styled-system/jsx';
import { DemoPopover } from './components/Popover';


export const App = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <HStack justify="center" gap="4">
        <DemoPopover onExitComplete={() => console.log('exit complete')} onOpenChange={(v) => console.log('open change', v)}/>
      </HStack>
    </Container>
  )
}

