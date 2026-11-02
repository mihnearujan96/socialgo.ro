import { Navigate } from 'react-router-dom'

/** Trimite rutele vechi de servicii către secțiunea potrivită de pe homepage. */
export default function HomeSectionRedirect({ hash }: { hash: string }) {
  return <Navigate to={{ pathname: '/', hash }} replace />
}
