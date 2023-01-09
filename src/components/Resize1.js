import React, { useEffect, useState } from "react";

function Resize1() {
  console.log(`리사이즈`);

  // 상태변화에 관련된 값은 무조건 useState사용
  const [width, setWidth] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    console.log(width);
  }, [width]);
  return <></>;
}

export default Resize1;
