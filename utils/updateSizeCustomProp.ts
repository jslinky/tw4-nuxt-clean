import type { SizeSettingsObj } from "@/types"

export default function updateSizeCustomProp(propName: string, propValue: SizeSettingsObj, outputEl: HTMLElement = document.documentElement) {
  propValue.unit !== '' ? updateCustomProp(propName, propValue.value.concat(propValue.unit)) : updateCustomProp(propName, propValue.value)
}