import React, {  useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import LeftPanel from "./leftpanel/LeftPanel";
import RightPanel from "./rightpanel/RightPanel";
import { photosSelector, getPhotos } from "./features/photos/PhotoSlice";
import { useSelector, useDispatch } from "react-redux";


function App() {
  // const [hiddeLeftPanel, sethiddeLeftPanel] = useState(false);
  const dispatch = useDispatch();
  // const { photos, loading, errors } = useSelector(photosSelector);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6}>
          <LeftPanel></LeftPanel>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <RightPanel></RightPanel>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
