import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="loader" fill src="/loading.png" />
      </div>
      <p className="text-sm text-muted-foreground">We're thinking...</p>
    </div>
  );
};

export default Loader;
