import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { route } from "./router/router";
import { nanoid } from "nanoid";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {route.map((item) => (
            <Route
              key={nanoid()}
              path={item.path}
              index={item.path ? false : true}
              element={item.component}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
