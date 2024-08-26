"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect, type PropsWithChildren } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://ea.posthog.com",
  });
}

const PostHogAuthWrapper = ({ children }: Required<PropsWithChildren>) => {
  const auth = useAuth();
  const userInfo = useUser();

  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.emailAddresses?.[0]?.emailAddress,
        name: userInfo.user.fullName,
      });
    } else if (!auth.isSignedIn) {
      posthog.reset();
    }
  }, [userInfo, auth]);

  return children;
};

export const CSPostHogProvider = ({
  children,
}: Required<PropsWithChildren>) => {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
};
