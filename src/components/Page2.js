// Page2.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CircularProgress from "@mui/material/CircularProgress";

function Page2() {
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
        <title>Open Surveys</title>
      </Helmet>
      <h1>No Currently Open Surveys, Try Again Later!</h1>
      {/* Page 2 content */}
    </div>
  );
}

export default Page2;