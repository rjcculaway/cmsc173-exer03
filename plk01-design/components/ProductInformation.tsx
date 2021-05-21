import Link from "next/link";
import { useAtom } from "jotai";
import { accentColorAtom } from "atoms/accentColorAtom";
import styles from "./ProductInformation.module.css";

import { CustomHoverColor } from "interface/CustomHoverColor";
import React from "react";

interface IProductInformation {
  heading: string;
  caption1: string;
  caption2: string;
}

const ProductInformation: React.FC<IProductInformation> = ({ heading, caption1, caption2 }) => {
  const [ accentColor, ] = useAtom(accentColorAtom);
  const hover_color: CustomHoverColor = { "--accent-color": accentColor };

  return (
    <div className={styles.product_glass_pane}>
      <h1 className={styles.product_heading}>
        {heading}
      </h1>
      <div className={styles.captions}>
        <p className={styles.caption}>
          {caption1}
        </p>
        <p className={styles.caption}>
          {caption2}
        </p>
      </div>
      <Link href="">
        <a className={styles.shop_button} style={hover_color}>Shop the Collection</a>
      </Link>
    </div>
  );
}

export default ProductInformation;