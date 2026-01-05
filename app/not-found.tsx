"use client";
import Button from "@/components/layout/Button";
import Container from "@/components/layout/Container";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <Container className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
      <p className="flex items-center">
        <span className="text-4xl font-bold border-r pr-2 mr-2">404</span>
        This page could not be found.
      </p>
      <Button className="mt-6" onClick={() => router.back()}>
        Go Back
      </Button>
    </Container>
  );
};

export default NotFound;
