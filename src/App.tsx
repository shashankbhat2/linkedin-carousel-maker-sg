import {
  Outlet
} from "react-router-dom";
import DashboardLayout from "./components/layout/dashboard.layout";


export function App() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}

export default App