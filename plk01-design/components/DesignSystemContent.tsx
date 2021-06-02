import { useEffect } from "react";
import { useAtom } from "jotai";
import styles from "./DesignSystemContent.module.css";
import { series, currentSeriesAtom } from "atoms/productInfoAtom";
import { CustomHoverColor } from "interface/CustomHoverColor";

const DesignSystemContent: React.FC = () => {
  const [currentSeries, setCurrentSeries] = useAtom(currentSeriesAtom);

  useEffect(() => {
    setCurrentSeries(2);
  }, []);

  return (
    <div className={styles.bg}>
      <div
        className={styles.content_container}
        style={
          { "--accent-color": series[currentSeries].color } as CustomHoverColor
        }
      >
        <section>
          <header>
            <h1 className={styles.top_level_heading}>The PLK Design System</h1>
          </header>
          <p className={styles.description}>
            PLK-01’s small and humble store in Laguna is renowned for a shopping
            experience like no other. We wanted to bring the same experience on
            the web. A large part of this online experience will be coming from
            our own design language. Introducing the PLK Design System, tailor
            made for PLK-12’s online store.
          </p>
        </section>
        <section>
          <header>
            <h2 className={styles.header_points}>The Philosophy</h2>
          </header>
          <p className={styles.description}>
            Our products are in a class of its own. We at PLK-01 strongly
            believe in our products, so much that it is the center of our design
            language. Our design language embraces simplicity and contrast—
            heavy-handed presentation just takes the focus away from our
            high-quality products.
          </p>
        </section>
        <section>
          <header>
            <h2 className={styles.header_points}>Transparency</h2>
          </header>
          <div style={{ width: "100%" }}>
            <div className={styles.transparency_image}>
              <p className={styles.transparency_description}>
                The PLK Design System seeks to emulate the familiar experience
                when visiting our stores. Those who have visited our store have
                noticed its “open” feel with our generous use of glass. The PLK
                Design System incorporates this through “frosted glass” effects,
                ensuring that your attention remains on our products.
              </p>
            </div>
          </div>
        </section>
        <section>
          <header>
            <h2 className={styles.header_points}>Color</h2>
          </header>
          <div className={styles.colors_row}>
            <div className={styles.colors_sample}>
              <img src="/colors.png" width="250px" height="250px" />
            </div>
            <p className={styles.colors_description}>
              Our main colors,{" "}
              <span className={styles.highlighter_black}>black and white</span>,
              come from our name: 0 and 1. The reason for this is two-fold:
              these two colors maximize contrast and visibility, and allow us to
              use a <span className={styles.highlighter}>third color</span> that
              is based on the accent colors of our products. You can click the
              "Next" button at the upper right corner of the home page to see
              this in action.
            </p>
          </div>
        </section>
        <section>
          <header>
            <h2 className={styles.header_points}>Typography</h2>
          </header>
          <div className={styles.two_column}>
            <div className={styles.samples}>
              <div className={styles.sample_item}>
                <p className={styles.header_sample}>Header</p>
                <p className={styles.sample_caption}>font-weight: 800</p>
              </div>
              <div className={styles.sample_item}>
                <p className={styles.content_sample}>Content</p>
                <p className={styles.sample_caption}>font-weight: 100</p>
              </div>
            </div>
            <div className={styles.two_column_child}>
              <p className={styles.description}>
                Monospace fonts are the main font used in the PLK Design System.
                JetBrains Mono is our favorite. Font weights differ dramatically
                from header to content, heightening contrast.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignSystemContent;
