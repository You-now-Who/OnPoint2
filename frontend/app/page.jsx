import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
    The social media
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered team</span>
    </h1>
    <p className='desc text-center'>
      OnPoint is a super cool Open Source AI-enabled marketing creator tool specifically designed for small businesses. 
    </p>

    <Feed />
  </section>
);

export default Home;
