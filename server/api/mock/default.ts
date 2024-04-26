import logos from "~/data/partner-logos";

export default defineEventHandler(async (event) => {
  return {
    logos
  }
})
