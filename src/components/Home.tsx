import Hero from "./Hero";

interface HomeProps {
  onTalkClick: () => void;
}

function Home({ onTalkClick }: HomeProps) {
  return <Hero onTalkClick={onTalkClick} />;
}

export default Home;