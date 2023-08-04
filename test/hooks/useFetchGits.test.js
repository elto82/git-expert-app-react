import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGits } from "../../src/hooks/useFetchGits";

describe("Test hook useFetchGifs", () => {
  test("should resturn state initial", () => {
    const { result } = renderHook(() => useFetchGits("react"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should  return an array of images and isLoading false", async () => {
    const { result } = renderHook(() => useFetchGits("react"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
