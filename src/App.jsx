// A versão vem do build da imagem (--build-arg APP_VERSION). Assim dá pra ver
// no navegador qual imagem o cluster está servindo depois de cada deploy.
const version = import.meta.env.VITE_APP_VERSION ?? 'dev'

export default function App() {
  return (
    <main style={{
      minHeight: '100vh', display: 'grid', placeItems: 'center',
      fontFamily: 'system-ui, sans-serif', background: '#16a34a', color: 'white',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>Front B</h1>
        <p>versão: <code>{version}</code></p>
        <p>servido por: <code>{window.location.host}</code></p>
      </div>
    </main>
  )
}
