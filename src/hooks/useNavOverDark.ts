import { useNavBandIntersects } from './useNavBandIntersects'

export function useNavOverDark(): boolean {
  return useNavBandIntersects('[data-navbar-theme="dark"]')
}
