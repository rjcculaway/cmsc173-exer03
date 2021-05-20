import Image from "next/image";
import styles from "./MainPageContent.module.css";
import ProductInformation from "./ProductInformation";

import camera from "../assets/img/pexels-math-90946-zoomed.png";

const MainPageContent: React.FC = () => {
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