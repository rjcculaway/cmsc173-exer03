import styles from "./DesignSystemContent.module.css";

const DesignSystemContent: React.FC = () => {
  return (
    <div className={styles.content_container}>
      <section>
        <header>
          <h1 className={styles.top_level_heading}>The PLK Design System</h1>
        </header>
        <p>
          PLK-01’s small and humble store in Laguna is renowned for a shopping
          experience like no other. We wanted to bring the same experience on the
          web. A large part of this online experience will be coming from our own
          design language. Introducing the PLK Design System, tailor made for
          PLK-12’s online store.
        </p>
      </section>
      <section>
        <header>
          <h2>The Philosophy</h2>
        </header>
        <p>
          Our products are in a class of its own. We at PLK-01 strongly believe in
          our products, so much that it is the center of our design language. Our
          design language embraces simplicity and contrast— heavy-handed
          presentation just takes the focus away from our high-quality products.
        </p>
      </section>
      <section>
        <header>
          <h2>Transparency</h2>
        </header>
        <p>
          The PLK Design System seeks to emulate the familiar experience when
          visiting our stores. Those who have visited our store have noticed its
          “open” feel with our generous use of glass. The PLK Design Systems
          incorporates this through “frosted glass” effects, ensuring that your
          attention remains on our products.
        </p>
      </section>
      <section>
        <header>
          <h2>Color</h2>
        </header>
        <p>
          Our main colors, black and white, come from our name: 0 and 1. The
          reason for this is two-fold: these two colors maximize contrast and
          visibility, and allow us to use a third color that based on the accent
          colors of our products.
        </p>
      </section>
      <section>
        <header>
          <h2>Typography</h2>
        </header>
        <p>
          Monospace fonts are the main font used in the PLK Design System. JetBrains Mono is our favorite.
          Font weights differ dramatically, heightening contrast.
        </p>
      </section>
    </div>
  );
};

export default DesignSystemContent;
