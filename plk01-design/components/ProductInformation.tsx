import Link from "next/link";
import { useAtom } from "jotai";
import { accentColorAtom } from "atoms/accentColorAtom";
import styles from "./ProductInformation.module.css";

import { CustomHoverColor } from "interface/CustomHoverColor";
import React from "react";

const ProductInformation: React.FC = () => {
  const [ accentColor, ] = useAtom(accentColorAtom);
  const hover_color: CustomHoverColor = { "--accent-color": accentColor };

  return (
    <div className={styles.product_glass_pane}>
      <h1 className={styles.product_heading}>
        The [P]hoto Series
      </h1>
      <div className={styles.captions}>
        <p className={styles.caption}>
          Superior low-light performance.
        </p>
        <p className={styles.caption}>
          Rugged for the adventure of a lifetime.
        </p>
      </div>
      <Link href="">
        <a className={styles.shop_button} style={hover_color}>Shop the Collection</a>
      </Link>
    </div>
  );
}

export default ProductInformation;