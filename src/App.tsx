import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Toaster } from "@/components/ui/toaster";

function App() {

  return (
    <div className=" bg-black text-gray-900">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;