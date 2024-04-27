import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <VideoContainer /> },
      { path: "watch", element: <WatchPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;

// {header,
// body- {sidebar, video-container}
// video-container-{buttons , video-card}
///watch url - new page video playing and comment or suggestion video

// }
