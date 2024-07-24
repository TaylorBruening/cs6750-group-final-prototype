// Page2.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CircularProgress from "@mui/material/CircularProgress";

function Page3() {
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

    if (loading) {
      return <CircularProgress sx={{"color":"#1997c6"}}/>
  }

  return (
    <div>
      <Helmet>
        <title>Responded Surveys</title>
      </Helmet>
      <h1>You haven't filled out any surveys yet!</h1>
    </div>
  );
}

export default Page3;