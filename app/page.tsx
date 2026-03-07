"use client";

import { useState } from "react";
import { UploadZone } from "@/components/upload-zone";
import { UploadResult } from "@/components/upload-result";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

export default function Home() {
  const [result, setResult] = useState<any>(null);

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">{APP_NAME}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{APP_DESCRIPTION}</p>
        </div>

        {result ? (
          <UploadResult result={result} onReset={() => setResult(null)} />
        ) : (
          <UploadZone onUploadComplete={setResult} />
        )}

        <div className="mt-16 text-center text-sm text-muted-foreground space-y-2">
          <p>Upload your <code>.js</code> ForwardWidget modules to get a hosted <code>.fwd</code> subscription link.</p>
          <p>Import the link in <a href="https://apps.apple.com/app/forward/id1490153115" className="underline hover:text-foreground" target="_blank" rel="noopener">Forward App</a> to use your widgets.</p>
        </div>
      </div>
    </main>
  );
}
