export default function LoadingSpinner() {
  return (
    <>
      <div className="h-screen flex content-center justify-center">
        <div className="loader" data-testid="load"></div>
      </div>
    </>
  )
}
