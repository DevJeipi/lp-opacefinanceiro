import { Button } from './components/button'
import { Header } from './components/header'

export default function Home() {
  return (
    <section>
      <Header />
      <div>
        <h1 className="bg-gradient-orange bg-clip-text text-transparent font-bold font-heading">Hello World</h1>
        <Button>OI</Button>
      </div>
    </section>
  );
}