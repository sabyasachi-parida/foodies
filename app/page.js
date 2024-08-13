import Link from 'next/link';
import classes from './page.module.css'
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
         <ImageSlideshow/>
      </div>
      <div > 
        <div className={classes.hero}>
          <h1>NextLevel Food For Nextlevel foodies </h1>
          <p>taste & share food from all over the world </p>
        </div>
        <div className={classes.cta}>
          <Link href='/community'>join the community </Link>
          <Link href='/meals'>explore meals </Link>
        </div>
      </div>
    </header>
    <main>
      <section className={classes.section}>
        <h2>How it Works</h2>
        <p>nextlevel food is a plartform for foodies to share their favourite recipies with the world .</p>

      </section>
    </main>
    </>

  );
}
