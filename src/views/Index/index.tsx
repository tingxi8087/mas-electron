import { useEffect } from "react";
import styles from "./index.module.less";
import { encode } from "mas-encrypt";

export default function Index() {
  useEffect(() => {
    const str = encode("aaasdsd", "8087", 1);
    console.log(str);
    window.addEventListener("message", (e) => {
      console.log(e.data, "消息");
    });
  }, []);

  return (
    <>
      <div className="color-b font-11px mb-1">使用mascss样式</div>
      <div className={styles.title}>hello,mas-cms</div>
    </>
  );
}
