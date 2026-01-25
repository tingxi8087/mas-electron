import TestPublic from "@/components/TestPublic";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/index")}>跳转到首页</Button>
      <TestPublic />
      <Outlet />
    </div>
  );
}
