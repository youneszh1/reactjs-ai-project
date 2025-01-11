import React, { useState } from "react";
import {
  Input,
  InputNumber,
  SelectPicker,
  Toggle,
  Button,
  Loader,
  Panel,
  Grid,
  Row,
  Col
} from "rsuite";

const PollinationsImageGenerator = () => {
  const [prompt, setPrompt] = useState("A futuristic city at sunset");
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [model, setModel] = useState("flux");
  const [seed, setSeed] = useState(-1);
  const [enhance, setEnhance] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch an image when "Generate Image" is clicked
  const generateImage = async () => {
    setLoading(true); // Show loading state

    try {
      const params = new URLSearchParams({
        prompt,
        width,
        height,
        seed,
        model,
        nologo: true,
        enhance
      });

      const response = await fetch(`https://image.pollinations.ai/prompt/${params.toString()}`);
      if (!response.ok) throw new Error("Failed to generate image");

      setImageUrl(response.url); // Set new image URL
    } catch (error) {
      console.error("Error generating image:", error);
    }

    setLoading(false); // Hide loading state
  };

  return (
    <Panel  className="p-5 w-full mx-auto bg-[var(--rs-bg-card)] rounded-lg shadow">
      <h2 className="text-center text-3xl font-semibold text-[var(--rs-text-primary)] mb-5">
        AI Image Generator
      </h2>

      {/* Prompt Input */}
      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium">Enter a prompt</label>
        <Input
          as="textarea"
          placeholder="Describe an image..."
          value={prompt}
          onChange={setPrompt}
        />
      </div>

      {/* Configuration Options */}
      <Grid fluid className="mb-4">
        <Row gutter={16}>
          <Col xs={12}>
            <label className="block mb-2 text-lg font-medium">Width</label>
            <InputNumber min={256} max={2048} value={width} onChange={setWidth} className="w-full" />
          </Col>
          <Col xs={12}>
            <label className="block mb-2 text-lg font-medium">Height</label>
            <InputNumber min={256} max={2048} value={height} onChange={setHeight} className="w-full" />
          </Col>
        </Row>
      </Grid>

      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium">Select Model</label>
        <SelectPicker
          data={[
            { value: "flux", label: "Flux" },
            { value: "flux-3d", label: "Flux-3D" },
            { value: "flux-pro", label: "Flux-Pro" },
            { value: "flux-realism", label: "Flux-Realism" },
            { value: "flux-anime", label: "Flux-Anime" },
            { value: "flux-cablyai", label: "Flux-CablyAI" },
            { value: "turbo", label: "Turbo" }
          ]}
          value={model}
          onChange={setModel}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium">Seed (Set -1 for Random)</label>
        <InputNumber value={seed} onChange={setSeed} className="w-full" />
      </div>

      <div className="mb-5 flex items-center">
        <Toggle checked={enhance} onChange={setEnhance} className="mr-3" />
        <span className="text-lg">Enhance Image</span>
      </div>

      {/* Generate Button */}
      <Button block color="blue" appearance="primary" onClick={generateImage} disabled={loading}>
        {loading ? <Loader size="sm" /> : "Generate Image"}
      </Button>

      {/* Display AI Image */}
      <Panel bordered className="mt-6 text-center flex justify-center">
        {loading ? (
          <Loader size="lg" />
        ) : imageUrl ? (
          <img src={imageUrl} alt="AI-generated" className="max-w-full rounded-lg" />
        ) : (
          <h4 className="text-gray-500">No image generated yet</h4>
        )}
      </Panel>
    </Panel>
  );
};

export default PollinationsImageGenerator;
