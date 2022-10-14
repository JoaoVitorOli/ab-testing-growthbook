import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { ReactNode, useEffect } from "react";

interface GrowthbookProps {
  children: ReactNode;
}

const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    console.log({
      experimentId: experiment.key, 
      variationId: result.variationId
    })
  }
});

export default function Growthbook({ children }: GrowthbookProps) {
  useEffect(() => {
    // Load feature definitions from API
    fetch(process.env.GROWTHBOOK_API_ENDPOINT!)
      .then((res) => res.json())
      .then((json) => {
        growthbook.setFeatures(json.features);
      });

    // TODO: replace with real targeting attributes
    growthbook.setAttributes({
      "id": "foo",
      "deviceId": "foo",
      "company": "foo",
      "loggedIn": true,
      "employee": true,
      "country": "foo",
      "browser": "foo",
      "url": "foo"
    })
  }, [])

  return (
    <GrowthBookProvider growthbook={growthbook}>
      {children}
    </GrowthBookProvider>
  )
}
