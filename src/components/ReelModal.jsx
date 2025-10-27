// ReelModal.jsx
import React, { useRef, useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

const ReelModal = ({ stories, open, onClose, startIndex }) => {
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const swiperRef = useRef(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log("activeIndex..", activeIndex);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    const videos = document.querySelectorAll(".story-video");
    videos.forEach((v, i) => {
      if (i === swiper.activeIndex) {
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const closeModal = () => {
    onClose?.();
    const videos = document.querySelectorAll(".story-video");
    videos.forEach((v) => {
      v.pause();
      v.currentTime = 0;
    });
  };

  useEffect(() => {
    if (open && swiperRef.current) {
      swiperRef.current.slideTo(startIndex, 0);
    }
  }, [open, startIndex]);

  useEffect(() => {
    if (open && swiperRef.current) {
      setTimeout(() => {
        swiperRef.current.slideTo(startIndex, 0);
        setActiveIndex(startIndex);
        const videos = document.querySelectorAll(".story-video");
        const current = videos[startIndex];
        if (current) current.play().catch(() => {});
      }, 100);
    }
  }, [open, startIndex]);

  return (
    <Modal
      open={open}
      onCancel={closeModal}
      footer={null}
      centered
      bodyStyle={{ padding: 0, backgroundColor: "black" }}
      style={{ top: 0 }}
      destroyOnClose
      maskStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(45px)",
      }}
    >
      <div className="reel-container" style={{ position: "relative" }}>
        <div
          className="reel-nav-buttons"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button shape="circle" onClick={goPrev} style={{ marginBottom: 10 }}>
            ↑
          </Button>
          <Button shape="circle" onClick={goNext}>
            ↓
          </Button>
        </div>

        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Mousewheel]}
          className="reel-swiper"
        >
          {stories.map((item, index) => (
            <SwiperSlide
              key={index}
              className="reel-slide"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
              }}
            >
              <video
                className="story-video"
                src={`${apiUrl}/uploads/${item.video}`}
                muted
                controls
                playsInline
                style={{
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
};

export default ReelModal;
