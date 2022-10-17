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
    async function growthbookSetter() {
      const response = await fetch(process.env.GROWTHBOOK_API_ENDPOINT, {
        method: 'GET'
      });

      const data = await response.json();

      growthbook.setFeatures(data.features);

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
    }
    
    growthbookSetter();
  }, [])

  return (
    <GrowthBookProvider growthbook={growthbook}>
      {children}
    </GrowthBookProvider>
  )
}
