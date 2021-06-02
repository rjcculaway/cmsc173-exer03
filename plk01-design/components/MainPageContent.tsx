import { useEffect } from "react";
import { useAtom } from "jotai";
import { series, currentSeriesAtom } from "atoms/productInfoAtom";
import ProductInformation from "./ProductInformation";

import styles from "./MainPageContent.module.css";

import { CustomHoverColor } from "interface/CustomHoverColor";

const MainPageContent: React.FC = () => {
  const [currentSeries, setCurrentSeries] = useAtom(currentSeriesAtom);

  useEffect(() => {
    setCurrentSeries(0);
  }, []);

  return (
    <div
      className={styles.content_container}
      style={{
        backgroundImage: `url(${series[currentSeries].src})`,
      }}
    >
      <button
        className={styles.next_button}
        style={
          { "--accent-color": series[currentSeries].color } as CustomHoverColor
        }
        onClick={() => {
          setCurrentSeries((currentSeries + 1) % 2);
        }}
      >
        Next
      </button>
      <ProductInformation
        heading={series[currentSeries].heading}
        caption1={series[currentSeries].caption1}
        caption2={series[currentSeries].caption2}
      />
    </div>
  );
};

export default MainPageContent;
