import { useEffect } from "react";
import Image from "next/image";
import { accentColorAtom } from "atoms/accentColorAtom";
import { useAtom } from "jotai";
import ProductInformation from "./ProductInformation";

import styles from "./MainPageContent.module.css";

import camera from "../assets/img/pexels-math-90946-zoomed.png";

const MainPageContent: React.FC = () => {
  const [, setAccentColor] = useAtom(accentColorAtom);
  useEffect(() =>{
    setAccentColor("#fe6723");
  }, []);
  return (
    <div className={styles.content_container}>
      <div className={styles.bg}>
        <Image src={camera} layout="fill" objectFit="cover" className={styles.bg_image}  />
      </div>
      <ProductInformation /> 
    </div>
  );
}

export default MainPageContent;