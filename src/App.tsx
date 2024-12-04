import { SpeedInsights } from "@vercel/speed-insights/react";

import MainPage from "@/pages/MainPage/MainPage.tsx";

function App() {
  return (
    <>
      <SpeedInsights />
      <MainPage />
    </>
  );
}

export default App;
