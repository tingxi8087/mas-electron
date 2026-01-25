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
      <div className={styles.title}>hello,mas-cms</div>
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        使用Tailwind类的元素
      </div>
    </>
  );
}
