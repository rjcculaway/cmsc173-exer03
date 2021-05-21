import { useEffect } from "react";
import { useAtom } from "jotai";
import { accentColorAtom } from "atoms/accentColorAtom";
import { productImageAtom } from "atoms/productImageAtom";
import { headingAtom, caption1Atom, caption2Atom } from "atoms/productInfoAtom";
import ProductInformation from "./ProductInformation";

import styles from "./MainPageContent.module.css";

import { CustomHoverColor } from "interface/CustomHoverColor";

const MainPageContent: React.FC = () => {
  const [accentColor, setAccentColor] = useAtom(accentColorAtom);
  const hover_color: CustomHoverColor = { "--accent-color": accentColor };
  const [productImage, setProductImage] = useAtom(productImageAtom);
  const [heading, setHeading] = useAtom(headingAtom);
  const [caption1, setCaption1] = useAtom(caption1Atom);
  const [caption2, setCaption2] = useAtom(caption2Atom);

  useEffect(() => {
    setProductImage("pexels-math-90946-zoomed.jpg");
    setHeading("The [P]hoto Series");
    setCaption1("Superior low-light performance.");
    setCaption2("Rugged for the adventure of a lifetime.");
    setAccentColor("#fe6723");
  }, []);
  return (
    <div className={styles.content_container}  style={{
      backgroundImage: `url(${productImage})`
    }}>
      <button
        className={styles.next_button}
        style={hover_color}
        onClick={() => {
          setProductImage("pexels-ORANGE2.jpg");
          setAccentColor("#fc9d00");
          setHeading("The [K]ahel Series");
          setCaption1("Anything and everything orange.");
          setCaption2("For a limited time only.");
        }}
      >
        Next
      </button>
      <ProductInformation
        heading={heading}
        caption1={caption1}
        caption2={caption2}
      />
    </div>
  );
};

export default MainPageContent;
