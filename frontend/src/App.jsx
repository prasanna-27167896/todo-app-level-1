import React from "react";
import { TaskMain } from "./components/TaskMain";
import { MainLayout } from "./components/MainLayout";

const App = () => {
  return (
    <div>
      <MainLayout>
        <TaskMain />
      </MainLayout>
    </div>
  );
};

export default App;
