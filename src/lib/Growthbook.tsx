import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { ReactNode, useEffect } from "react";
import { parseCookies, setCookie } from 'nookies'
import { v4 as uuid } from 'uuid';

interface GrowthbookProps {
  children: ReactNode;
}

const growthbook = new GrowthBook({});

export default function Growthbook({ children }: GrowthbookProps) {
  useEffect(() => {
    async function growthbookSetter() {
      const { ab_testing } = parseCookies();

      const response = await fetch('/api/growthbook', {
        method: 'GET'
      });

      const data = await response.json();

      growthbook.setFeatures(data.result);

      if (ab_testing === undefined) {
        const uniqueId = uuid();

        setCookie(null, 'ab_testing', uniqueId);

        growthbook.setAttributes({
          "id": uniqueId,
          "deviceId": "foo",
          "company": "foo",
          "loggedIn": true,
          "employee": true,
          "country": "foo",
          "browser": "foo",
          "url": "foo"
        })

        return;
      }

      growthbook.setAttributes({
        "id": ab_testing,
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
