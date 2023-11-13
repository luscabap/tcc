import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from 'react';
import styles from './SliderAuto.module.scss';
import banner1 from '../../../../public/assets/banner_1.png'; 
import banner2 from '../../../../public/assets/banner_2.png'; 

export default function SliderAuto() {
  const [opacities, setOpacities] = useState<number[]>([]);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map((slide) => slide.portion)
        setOpacities(new_opacities)
      }
    },

    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider container">
        <div className="keen-slider__slide number-slide2 imagem"><img src={banner1}/></div>
        <div className="keen-slider__slide number-slide3 imagem"><img src={banner2}/></div>
        <div className="keen-slider__slide number-slide4 imagem"><img src={banner1}/></div>
        <div className="keen-slider__slide number-slide3 imagem"><img src={banner2}/></div>
      </div>
  );
}