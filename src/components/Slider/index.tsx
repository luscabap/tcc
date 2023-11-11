import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from 'react';

export default function Slider() {
  const [opacities, setOpacities] = useState<number[]>([]);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map((slide) => slide.portion)
        setOpacities(new_opacities)
      }
    },

    // [
    //   (slider) => {
    //     let timeout: ReturnType<typeof setTimeout>;
    //     let mouseOver = false;
    //     function clearNextTimeout() {
    //       clearTimeout(timeout);
    //     }
    //     function nextTimeout() {
    //       clearTimeout(timeout);
    //       if (mouseOver) return;
    //       timeout = setTimeout(() => {
    //         slider.next();
    //       }, 2000);
    //     }
    //     slider.on("created", () => {
    //       slider.container.addEventListener("mouseover", () => {
    //         mouseOver = true;
    //         clearNextTimeout();
    //       });
    //       slider.container.addEventListener("mouseout", () => {
    //         mouseOver = false;
    //         nextTimeout();
    //       });
    //       nextTimeout();
    //     });
    //     slider.on("dragStarted", clearNextTimeout);
    //     slider.on("animationEnded", nextTimeout);
    //     slider.on("updated", nextTimeout);
    //   },
    // ]
  );

  const images = [{href: 'https://wallpapercave.com/wp/wp1902273.jpg'},{href: 'https://i.pinimg.com/originals/d0/69/fa/d069fa489aba9989d96d396548232e2f.jpg'},{href: 'https://wallpapercave.com/wp/wp1902266.png'},{href: 'https://w0.peakpx.com/wallpaper/130/121/HD-wallpaper-santos-fc-brazilian-clube-futebol-logo-santos-sport.jpg'},{href: 'https://c4.wallpaperflare.com/wallpaper/40/188/62/soccer-santos-fc-emblem-golden-logo-hd-wallpaper-preview.jpg'}]
  return (
    <div ref={sliderRef} className="keen-slider imagem">
      {images.map((item, i) => (
        <div className="keen-slider__slide" key={i} style={{ opacity:opacities[i] }}>
          <img src={item.href} />
        </div>
      ))}
    </div>
  );
}
